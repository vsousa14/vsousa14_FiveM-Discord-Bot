const Discord = require('discord.js');
let config = require('../config.json');

module.exports = {
    name: 'suggest',
    description: 'Give a suggestion to the server',
    execute(message, args){
      if(message.channel.id === config.CHANNELS_ID.SUGGESTIONS){
        
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        let suggestion = args.join(" ");
        if (!suggestion)
        {
          let emptyEmbed = new Discord.MessageEmbed()
        .setTitle("Oops!")
        .setColor("#fc2403")
        .setDescription(`Hey <@${message.author.id}>, you need to specify a suggestion!`);
        message.channel.send(emptyEmbed).then((msg) =>{
            setTimeout(() =>{
              msg.delete();
            },4000);
          });
          message.delete();
        }
        else{
          let embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setColor(randomColor)
            .setTitle("New Suggestion")
            .setDescription("```fix\n "+suggestion+"\n```")
            .setFooter('Sent by: '+message.author.tag,  `${config.SERVER_LOGO}`)
            .setTimestamp(new Date());
          message.channel
            .send(embed)
            .then((message) => {
              const sent = message;
              sent
                .react("👍")
                .then(() => {
                  sent
                    .react("👎")
                })
                .catch(console.error);
            })
            .catch(console.error);
          return message.delete();

        }

      }else{
        message.delete();

        let wEmbed = new Discord.MessageEmbed()
        .setTitle("Oops!")
        .setColor("#fc2403")
        .setDescription(`Wrong channel to make suggestions, use <#${config.CHANNELS_ID.SUGGESTIONS}> to make a suggestion `);
        message.channel.send(wEmbed).then((wmsg) =>{
          setTimeout(() =>{
            wmsg.delete();
          },5000);
       });
      }
        
         
        
    }, 
};