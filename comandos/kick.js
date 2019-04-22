const MegaClient = require("simple-discord");

module.exports = new MegaClient.Comando({
  nombre: "kick",
  alias: ["Kick"],
  cooldown: 5,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "Este comando te permite ver el ping del Bot",
  ejecutar:(client, message, args) => {

let user = message.mentions.users.first();
let razon = args.slice(1).join(' ');

var perms = message.member.hasPermission("KICK_MEMBERS");
if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);

if (!razon) return message.channel.send('Escriba una razón, `-kick @username [razón]`');
if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');
     
message.guild.member(user).kick(razon);
message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);
}

})