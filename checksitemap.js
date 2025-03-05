async function checkSitemap() {
  try {
    // 1. Load the sitemap
    const response = await fetch('https://konvajs.org/sitemap.xml');
    const xml = await response.text();

    // 2. Parse URLs using regex
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    const urls = [...xml.matchAll(urlRegex)]
      .map((match) => match[1])
      // Filter out unwanted URLs
      .filter((url) => !url.includes('downloads/code'));

    // 3. Process URLs in batches
    const batchSize = 20;
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      const promises = batch.map(async (url) => {
        const newUrl = url.replace(
          'https://konvajs.org',
          'https://new.konvajs.org'
        );

        try {
          const checkResponse = await fetch(newUrl, { method: 'HEAD' });
          if (checkResponse.ok) {
            console.log(`✅ Exists: ${newUrl}`);
          } else {
            console.log(`❌ Missing (${checkResponse.status}): ${newUrl}`);
          }
        } catch (error) {
          console.log(`❌ Error checking: ${newUrl}`);
        }
      });

      // Run batch in parallel
      await Promise.all(promises);

      // Add a small delay between batches
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkSitemap();
