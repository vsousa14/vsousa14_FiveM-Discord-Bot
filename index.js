const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const config = require('./config.json');
const BOT_TOKEN = config.BOT_TOKEN;
const PREFIX = config.PREFIX;
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
let PlayerCount = require('./server/players');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    
    setInterval(() => {
      PlayerCount.getPlayerCount().then((result) => {
          client.user.setActivity(`with ${result.data.length} players`,{ type: 'PLAYING' });
      })
    }, 10000);
});

client.login(BOT_TOKEN);

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('message', message =>{
  if(!message.content.startsWith(PREFIX) || message.author.bot) return
  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(!client.commands.has(command)) return
  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
  }
});
