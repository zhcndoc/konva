async function checkSitemap() {
  try {
    // 1. Load the sitemap
    const response = await fetch('https://konvajs.org/sitemap.xml');
    const xml = await response.text();

    // 2. Parse URLs using regex
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    const urls = [...xml.matchAll(urlRegex)].map((match) => match[1]);

    // 3. Check each URL
    for (const url of urls) {
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

      // Add a small delay to avoid overwhelming the server
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkSitemap();
