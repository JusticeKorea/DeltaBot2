const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Je suis prêt !");
});

client.on("message", message => {
  if (message.content.startsWith("Ping")) message.channel.send("Pong");
});

client.login("NjYwODgyOTc2MTY2NTEwNjAy.Xgj27Q.cRQ5w_W0uQM9Pw0-e7A02aXqi94");
