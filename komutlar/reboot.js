const Discord = require('discord.js');


exports.run = function(client, message) {

      var embed = new Discord.RichEmbed()   
      .addField("**Reboot** :", "**Geliştiricim** Botu *Yeniden Başlatmamı* istedi hemen Yapıyorum! <a:a:587713423622799394> ") 
      .setColor('GREEN')
  
  
  message.channel.sendEmbed(embed).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
   
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
