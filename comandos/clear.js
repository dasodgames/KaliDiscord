const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "clear",
  alias: ["Clear"],
  cooldown: false,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "Este comando te permite borrar mensajes",
  ejecutar: async (bot, message, args) => {


    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Parece que no puedes usar esto")
    if(!args[0]) return message.channel.send("Dime cuantos mensajes debo borrar")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`He borrado ${args[0]} mensajes.`).then(msg => msg.delete(5000));
    })
      
    } 
    
    })