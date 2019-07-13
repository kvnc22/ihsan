const Discord = require('discord.js');
exports.run = (client, message, ) => { 
  
  let resim = ('https://media.discordapp.net/attachments/584361176427659265/599301727753076736/xdd.JPG')
  
  const embed = new Discord.RichEmbed()
.setColor('RED')
.setTitle('Bunu mu demek istediniz?')
.setImage(resim)
message.channel.sendEmbed(embed);
  
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['g'],
  permLevel: 0
};

exports.help = {
  name: 'gavato',
  description: 'gavato',
  usage: 'gavato'
};
///olm komutu neden komutlara açmadın skdbwidbwj