const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "ban",
  alias: ["Ban"],
  cooldown: 5,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "Este comando te permite banear a la gente",
  ejecutar:(client, message, args) => {
   
    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
        
    var perms = message.member.hasPermission("BAN_MEMBERS");
    if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
        
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    if(!razon) return message.channel.send('Escriba un razón, `-ban @username [razón]`');
    if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');
        
    
    message.guild.member(user).ban(razon);
    message.channel.send(`**${user.username}**, fue baneado del servidor, motivo: ${razon}.`);

    } 

    })