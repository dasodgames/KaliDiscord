const MegaClient = require("simple-discord");

module.exports = new MegaClient.Evento({
   nombre: "ready",
   ejecutar: (client) => {
client.on ("ready", () => {
   console.log("Registrado en Discord bajo el nombre de " + client.user.tag + " y actualmente estoy en " + client.guilds.size + " servidores.");
 client.user.setPresence({
       status: "online",
       game: {
           name: "!kali | Funcionando correctamente",
           type: "PLAYING"
       }
 });
});

     console.log(`Conectado en ${client.guilds.size} servidores, con ${client.users.size} usuarios.`);
     
     
     
     
   }
})