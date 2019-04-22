
const MegaClient = require("simple-discord");
const fs = require("fs")
  
module.exports = new MegaClient.Comando({
  nombre: "setprefix",
  alias: ["setprefix"],
  cooldown: false,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "Este comando te permite cambiar el prefix del bot",
  ejecutar: async (client, message, args, prefix) => {

  
let perms = message.member.hasPermission("ADMINISTRATOR");
 
if (!perms) return message.channel.send("No tienes los permisos suficientes!")
  
if(!args[0] || args[0 == "help"]) return message.channel.send("Dime el prefix a cambiar!")
  
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  
  prefixes[message.guild.id] = {
    prefixes: args[0]
  };
  
  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });
  
  message.channel.send("Mi Prefijo ha sido cambiado a : **"+args[0]+"**")
}
});