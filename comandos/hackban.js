const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "hackban",
  alias: ["Hackban"],
  cooldown: false,
  permiso_cooldown: "BAN_MEMBERS",
  descripcion: "Este comando te permite borrar mensajes",
  ejecutar: async (client, message, args) => {
  
    client.unbanAuth = message.author;
  
let permiso = message.member.hasPermission("BAN_MEMBERS")

    
if (!permiso) return message.channel.send("No tienes permisos Suficientes!")
  let user = args[0];
  
  if (!user) return message.channel.send("Dime alguna id")    
  if(isNaN(user)) return message.channel.send("ID Invalida.")    

  message.guild.ban(user)
  message.channel.send("**He baneado a <@" + user + ">**" )
  }
    
  });
  