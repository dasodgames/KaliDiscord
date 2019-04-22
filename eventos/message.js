const MegaClient = require("simple-discord");
const config = require("../config.json");

module.exports = new MegaClient.Evento({
   nombre: "message",
   ejecutar: (client, message) => {
      if(message.channel.type == "dm") return;
      if(message.author.bot) return;
      let prefix = config.prefix
      if(message.content.startsWith(prefix)) {
         client.verificar_comando(message, prefix)
         return;

      }
   }
})