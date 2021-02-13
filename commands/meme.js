const Discord = require('discord.js');
const axios = require('axios');
let config = require('../config.json');
module.exports = {
    name: 'meme',
    description: 'meme Command',
     async execute(message, args){
        if(message.channel.id === config.CHANNELS_ID.MEMES){
            const url = 'https://some-random-api.ml/meme';

            let data, response;
            try {
                response = await axios.get(url);
                data = response.data;
            } catch (e) {
                return message.channel.send(`An error has occured, try again!`)
            }
    
            const embed = new Discord.MessageEmbed()
                .setTitle(`Random Meme: `)
                .setDescription(data.caption)
                .setColor('#f3f3f3')
                .setImage(data.image)
    
            await message.channel.send(embed)
        }
        else{
            message.delete();

        let wEmbed = new Discord.MessageEmbed()
        .setTitle("Oops!")
        .setColor("#fc2403")
        .setDescription(`Wrong channel to post memes, use <#${config.CHANNELS_ID.MEMES}> instead`);
        message.channel.send(wEmbed).then((wmsg) =>{
          setTimeout(() =>{
            wmsg.delete();
          },4000);
       });
        }
        

    }, 
};