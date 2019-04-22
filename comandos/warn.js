const MegaClient = require("simple-discord");
const Discord = require("discord.js");
const fs = require("fs");
const warnsJSON = require("../warns.json");
const maxwarns = 5;

  
module.exports = new MegaClient.Comando({

  nombre: "warn",
  alias: ["Warn"],
  cooldown: 5,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "Este comando te permite hacer que nuestro bot te muestra la informacion de un usuario",
  ejecutar: async (bot, message, args) => {
    
    var perms = message.member.hasPermission("BAN_MEMBERS");
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Necesito tener el permiso **BAN_MEMBERS**")
  if(!args[0]) return message.channel.send("Necesitas especificar al @usuario y el **motivo** de tu advertencia")
  var user = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!user) return message.channel.send("el usuario **"+args[0]+"** no existe.")
  if(user.id == message.author.id) return message.channel.send("Porque quieres advertirte?")
  if(user.id == bot.user.id) return message.channel.send("nop....")
  if(!args[1]) return message.channel.send("Necesitas poner el motivo de tu advertencia.")
  var motivo = args.slice(1).join(" ")
  var embed = new Discord.RichEmbed()
  embed.setColor("RANDOM")

  if(!warnsJSON[user.id]) {
    warnsJSON[user.id] = {
      warnings: 0
    }
  }

  warnsJSON[user.id].warnings++

  fs.writeFile("./warns.json", JSON.stringify(warnsJSON), (error) => {
    if(error) console.log(error)
  })

  if(warnsJSON[user.id].warnings == maxwarns) {
    message.guild.ban(user, {days: 7, reason: motivo}).then(m => {

      embed.addField("Usuario baneado","El usuario "+user+" llego al limite de advertencias.")
      embed.addField("Motivo","fue baneado por 7 dias con la razon: **"+motivo+"**.")
      embed.setThumbnail(user.user.displayAvatarURL)
      message.channel.send(embed)
    }).catch(error => {
      message.channel.send("el usuario "+user+" no puede ser baneado por la siguiente razon: **"+error.message+"**.")
    })
    return
  }

  embed.addField("Nueva advertencia","El usuario "+user+" acaba de ser advertido con la siguiente razon: **"+motivo+"**.")
  embed.addField("Numero de advertencias","El usuario "+user+" actualmente tiene **"+warnsJSON[user.id].warnings+"** advertencias.")
  message.channel.send(embed)
  user.send("Fuiste advertido por la siguiente razon: **"+motivo+"**, tu numero de advertencias es de **"+warnsJSON[user.id].warnings+"**.").catch(error => {
    console.log(error)
  })
  return
}
})
