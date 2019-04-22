const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "say",
  alias: ["Say"],
  cooldown: false,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "Este comando te permite hacer que nuestro bot diga algo",
  ejecutar: async (client, message, args) => {
      
    if(!args) return message.channel.send(`debe escribir un mensaje a enviar.`);
message.channel.send(args.join(" "));
message.delete(1000)

    } 

    })