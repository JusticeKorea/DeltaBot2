const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Je suis prêt !");
});

client.on("message", message => {
  if (message.content.startsWith("Ping")) message.channel.send("Pong");
});

client.login(process.env.TOKEN);
