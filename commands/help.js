  
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
let config = require('../config.json');
module.exports = {
    name: 'help',
    description: 'help Command',
    execute(message, args){
        const Fivem = new Discord.MessageEmbed()
        .setTitle('FiveM')
        .setColor('#ffaa17')
        .addField(`${config.PREFIX}status`, 'See the status of the server')
        .addField(`${config.PREFIX}playerlist`, 'See who is connected to the server')
        .addField(`${config.PREFIX}suggest`, 'Make a suggestion to the server')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .setColor('#1764ff')
        .addField(`${config.PREFIX}meme`, 'Generates a random meme')
        .addField(`${config.PREFIX}cat`, 'Generates a random cat image')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .setColor('#9500f2')
        .addField(`${config.PREFIX}ping`, 'Pong')
        .addField(`${config.PREFIX}clear <1-99>`, 'Clears the chat')
        .setTimestamp()

        const pages = [
                Fivem,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }, 
};