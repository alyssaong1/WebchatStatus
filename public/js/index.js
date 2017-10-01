const ConnectionStatus = BotChat.ConnectionStatus;

// Initialise directline object
var directLine = new BotChat.DirectLine({
    secret: 'YOUR SECRET HERE' // You probably want to replace this to use token
});

//Subscribe to activities
directLine.activity$
.subscribe(
    activity => console.log("received activity ", activity)
);
//Monitor connection status to see if bot is online
directLine.connectionStatus$
.subscribe(connectionStatus => {
    switch(connectionStatus) {
        case ConnectionStatus.Uninitialized:    // the status when the DirectLine object is first created/constructed
          console.log("Uninitialized!")
          break
        case ConnectionStatus.Connecting:       // currently trying to connect to the conversation
          console.log("Connecting...")
          document.getElementById("bot").innerText = "Connecting to bot...";
          break
        case ConnectionStatus.Online:           // successfully connected to the converstaion. Connection is healthy so far as we know.
          console.log("Online and ready to go!")
          // Bot is online, so let's initialize the chat UI
          BotChat.App({
            directLine: { secret: 'YOUR SECRET HERE' }, // You probably want to replace this to use token 
            user: { id: 'userid' },
            bot: { id: 'botid' },
            resize: 'detect'
          }, document.getElementById("bot"));
          break
        case ConnectionStatus.ExpiredToken:     // last operation errored out with an expired token. Your app should supply a new one.
          console.log("Expired token!")
          break
        case ConnectionStatus.FailedToConnect:  // the initial attempt to connect to the conversation failed. No recovery possible.
          console.log("Totally failed to connect!")
          document.getElementById("bot").innerText = "Bot currently offline. Please try again later.";
          break
        case ConnectionStatus.Ended:            // the bot ended the conversation
          console.log("Conversation ended.")
          break
    }
});

