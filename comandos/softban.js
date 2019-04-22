const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "softban",
  alias: ["Softban"],
  cooldown: false,
  permiso_cooldown: "BAN_MEMBERS",
  descripcion: "Este comando te permite borrar mensajes",
  ejecutar: async (client, message, args) => {
    
let user = message.mentions.users.first();
    var perms = message.member.hasPermission("BAN_MEMBERS");
    if(!perms) return message.reply("No posees los permisos suficientes.")
    if(message.mentions.users.size < 1) return message.reply("Mencione al usuario.").catch(console.error)
  if(user.id == message.author.id) return message.channel.send("Porque quieres banearte?")
 if(user.id == client.user.id) return message.channel.send("Porque me quieres banear?")
    if(!message.guild.member(user).bannable) return message.reply("No puedo banear a ese usuario.")
    message.guild.member(user).ban(7)
     message.guild.unban(user).then(a => {
      message.channel.send("Soft-ban hecho correctamente")
    })
    }
});