const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "unban",
  alias: ["Unban"],
  cooldown: false,
  permiso_cooldown: "BAN_MEMBERS",
  descripcion: "Este comando te permite desbanear usuarios",
  ejecutar: async (client, message, args) => {
    
    let argcustom = args.join(" ").slice(6)
client.unbanAuth = message.author;
  
let permiso = message.member.hasPermission("BAN_MEMBERS")
if (!permiso) return message.channel.send("No Tienes permiso!")

  let user = args[0];

if (!user) return message.channel.send("Dime alguna id")    
  if(isNaN(user)) return message.channel.send("ID Invalida.")    
    
  message.guild.unban(user)
  message.channel.send("He desbaneado a <@" + user + ">")
 
}
});