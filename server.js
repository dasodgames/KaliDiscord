
const http = require('http');
const express = require('express');
const app = express();

//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

                                                                           //
//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT ///////////////////////

const Discord = require("discord.js");
const client = new Discord.Client();
const db = require ("quick.db")
const send = require ("quick.hook")
const fs = require ("fs")
const config = require("./config.json") 
const prefix = config.prefix;
const token = config.token;
const MegaClient = require("simple-discord") 


client.on("warn", console.warn);
client.on("error", console.error);
client.on("disconnect", () => console.log("Bot desconectado"));
client.on("reconnect", () => console.log("Reconectando..."));


new MegaClient.Client({

  token: "NTU2NTc3NzgyOTkwMTEwNzIx.XL3QCA.9y3s58faWetVcL23MUAoIH08TLo", 
  comandos: "./comandos", 
  eventos: "./eventos"
  });


client.on("message", async (message) => {
   let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
let prefix = prefixes[message.guild.id].prefixes;
  console.log(prefix)
});

client.on('ready', () => {
  console.log('estoy listo!');
  client.user.setPresence({
       status: "online",
       game: {
            name: "kali!help | Funcionando correctamente",
           type: "PLAYING"
       }
   });

});

client.on('message', message => {

  if (message.content.startsWith("ping")) {
   let ping = Math.floor(message.client.ping);
   message.channel.send(':ping_pong: `'+ping+' ms.` desde glitch.'); 

  }
  
});

client.login('NTU2NTc3NzgyOTkwMTEwNzIx.XL3QCA.9y3s58faWetVcL23MUAoIH08TLo');

