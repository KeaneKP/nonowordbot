const Discord = require('discord.js');
const client = new Discord.Client();
const badWords = require("./badWords.json");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  message.content = message.content.toLowerCase();
  badWords.array.forEach( word => {
    if (message.content.includes(word)) {
      message.delete();
      return;
    }
  })
});

client.login(process.env.token);