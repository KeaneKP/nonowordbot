const Discord = require('discord.js');
const client = new Discord.Client();
const data = require("./data.json");
let hasBedTimed = false;
let utcHour = 1;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  message.content = message.content.toLowerCase();
  data.badWords.forEach( word => {
    if (message.content.includes(word)) {
      message.delete();
      return;
    }
  })
  let date = new Date();
  let hour = date.getHours();
  if (message.member.id=="732613702267961374" && hour>=0 && hour<=10) {
    message.react("🛏️");
  } else if (message.member.id=="734466331587379293") {
    message.channel.send("bruh");
  }
});
setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  if (hour===utcHour && !hasBedTimed) {
    let server = client.guilds.cache.get("487728941725909002")
    let channelArray = Array.from(server.channels);
    let general = channelArray.find(channel => {return channel[1].name == "general"});
    console.log(general);
    console.log(channelArray);
    console.log(client.channels.cache)
    console.log(client.guilds.cache)
    cpnsole.log(client.guilds.cache.array());
    general[1].send("<@732613702267961374>https://cdn.discordapp.com/attachments/688083956385710093/688091189710159951/SHAWNBED.png")
    hasBedTimed = true;
  } else if (hour != utcHour) {
    hasBedTimed = false;
  }
}, 15000);
client.login(process.env.token);
