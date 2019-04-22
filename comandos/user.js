const MegaClient = require("simple-discord");
const dg = require("discord-gestor")  
module.exports = new MegaClient.Comando({

  nombre: "user",
  alias: ["user"],
  cooldown: 5,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "Este comando te permite hacer que nuestro bot te muestra la informacion de un usuario",
  ejecutar: async (client, message, args) => {

    let estados = {
        "online": "Conectado",
        "offline": "Desconectado",
        "idle": "Ocupado",
        "dnd": "No moletar"
    }
      
let userm = message.mentions.users.first()
dg.perfil.verPerfil(message.author.id, (datos) => {
if(!userm){
  var user = message.author;
      
  const embed = new MegaClient.RichEmbed()
    .setThumbnail(user.avatarURL)
    .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
    .setTitle("Usuario :")
     .setDescription("**Nombre : "+user.username+"\nDiscriminator : #"+user.discriminator+"\nID : "+user.id+"\nApodo : "+message.member.nickname+"\nCuenta Creada : "+user.createdAt.toDateString()+"\nEstado : "+estados[user.presence.status]+"**")
    .addField("Datos :", "**Nivel : "+datos.nivel+"\nPorcentaje : "+datos.porcNivel+ '%\nExperiencia : '+datos.sigNivel + "\nRoles : "+`${message.member.roles.map(m =>m).join(" **|** ")}`+"**")
    .setColor("#ef00ff")
        
  message.channel.send(embed);

}else{
  const embed = new MegaClient.RichEmbed()
     .setThumbnail(userm.avatarURL)
    .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
    .setTitle("Usuario :")
     .setDescription("**Nombre : "+userm.username+"\nDiscriminator : #"+userm.discriminator+"\nID : "+userm.id+"\nApodo : "+message.member.nickname+"\nCuenta Creada : "+userm.createdAt.toDateString()+"**")
    .setColor("#ef00ff")
    
  message.channel.send(embed);
}
});
  }
});