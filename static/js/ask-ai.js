window.addEventListener('load', function () {
  // Load the script if it doesn't exist
  console.log('loading 0');
  if (!document.getElementById('crawlchat-script')) {
    console.log('loading');
    const script = document.createElement('script');
    script.src = 'https://crawlchat.app/embed.js';
    script.id = 'crawlchat-script';
    script.setAttribute('data-id', '67d221efb4b9de65095a2579');

    // When script loads, add click handlers to all ai-chat buttons
    script.onload = function () {
      attachChatHandlers();
    };

    document.body.appendChild(script);
  } else {
    // If script is already loaded, just attach handlers
    attachChatHandlers();
  }

  function attachChatHandlers() {
    // Find all elements with class "ai-chat"
    const chatButtons = document.querySelectorAll('.ai-chat');

    console.log(chatButtons);

    // Add click event listener to each button
    chatButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Open the chat when clicked
        if (window.crawlchatEmbed) {
          window.crawlchatEmbed.show();
        }
      });
    });
  }
});
