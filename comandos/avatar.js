const MegaClient = require("simple-discord");
 
module.exports = new MegaClient.Comando({ //usamos el module.exports y el constructor Comando
  nombre: "avatar", //asignamos el nombre del comando
  alias: ["Avatar"], //le agregamos unos alias
  cooldown: 5, //el tiempo de cooldown de este comando sera de 5 segundos
  permiso_cooldown: "ADMINISTRATOR", //los usuarios que tengan el permiso de ADMINISTRADOR no les afectara el tiempo del cooldown
  descripcion: "Este comando te permite ver tu foto o el de otro usuario.", //la descripcion del comando
  disponible: true, //este comando estara disponible (podran usarlo)
  ejecutar: async (client, message, args) => { //la funcion
 
    let usuario = message.mentions.members.first() || message.member;
    let embed = new MegaClient.RichEmbed()
    embed.setColor("RANDOM")
    embed.setImage(usuario.user.displayAvatarURL)
    embed.setDescription(`Avatar del usuario ${usuario.user.username}`)
    return message.channel.send(embed)
  }
})