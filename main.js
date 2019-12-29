const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Je suis prêt !");
});

client.on("message", message => {
  if (message.content.startsWith("Ping")) message.channel.send("Pong");
});

client.login("NjYwODgyOTc2MTY2NTEwNjAy.Xgj4xA.9uCKuMMdA4QGm7gl-EvArn_rfyM");
