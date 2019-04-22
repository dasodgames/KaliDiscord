const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "reload",
  alias: ["Reload"],
  cooldown: 5,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "Este comando te permite actualizar un comando.",
  ejecutar: async (client, message, args) => {
 
    if(message.author.id != "402177401947291659") return message.channel.send("Solo mi creador puede usar este comando.")
    if(client.comandos.size <= 0) return message.channel.send("No hay ningun comando.") //esto es un poco ilogico pero vamos a prevenir.
    if(!args[0]) { //si no se ingresa ningun argumento
      client.reload() //recargamos todos los comandos
      return message.channel.send(`Comandos cargados correctamente.`)
    }
    //esto se ejecutara si el usuario ingresa el nombre de un comando
    if(!client.comandos.has(args[0])) return message.channel.send(`El comando ${args[0]} no existe.`) //si el comando no existe
    client.reload(args[0]) //recargamos el comando
    return message.channel.send(`El comando ${args[0]} acaba de ser recargado correctamente.`)
  }
 
})