// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from '@theme/Layout';
import { useEffect } from 'react';

export default function Home(): JSX.Element {
  // useEffect(() => {
  //   // Add script if it doesn't exist
  //   if (!document.getElementById('crawlchat-script')) {
  //     const script = document.createElement('script');
  //     script.src = 'https://crawlchat.app/embed.js';
  //     script.id = 'crawlchat-script';
  //     script.setAttribute('data-id', '67d221efb4b9de65095a2579');

  //     // Simple load handler
  //     script.onload = () => {
  //       // Try to show chat when script loads
  //       if (window.crawlchatEmbed) {
  //         window.crawlchatEmbed.show();
  //       }
  //     };

  //     document.body.appendChild(script);
  //   } else if (window.crawlchatEmbed) {
  //     // If script already exists, show chat
  //     window.crawlchatEmbed.show();
  //   }
  // }, []);

  return (
    <Layout
      title={`Kai - AI-agent to help you with grahical web`}
      description="Kai is an AI-powered chatbot for Konva.js"
    >
      <main>
        <iframe
          src="https://konva-chat.vercel.app/"
          style={{ width: '100%', height: '80vh' }}
        />
      </main>
    </Layout>
  );
}
