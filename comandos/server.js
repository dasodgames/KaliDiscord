const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "serverinfo",
  alias: ["server"],
  cooldown: false,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "Este comando te muestra la informacion del server",
  ejecutar: async (client, message, args) => {
      
const server = message.guild;
  
 let embed = new MegaClient.RichEmbed()
 .setTitle("Informacion de : "+server.name)
 .setDescription("**Creado el : "+server.createdAt.toDateString()+"\nID : "+server.id+"\nRegion : "+server.region+"**")
 .addField("Informacion del Dueño :", "**Dueño : "+server.owner.user.username+"#"+server.owner.user.discriminator+"\nID : "+server.owner.user.id+"\nDiscriminator : "+server.owner.user.discriminator+"\nCuenta Creada en : "+server.owner.user.createdAt.toDateString()+"**")
 .addField("Otras Cosas :", "**Miembros : "+server.memberCount+"\nRoles : "+server.roles.size+"**")
 .setColor("#ea899a")
 .setAuthor(server.name, server.iconURL)
 .setThumbnail(server.iconURL)
 message.channel.send(embed)
}
})