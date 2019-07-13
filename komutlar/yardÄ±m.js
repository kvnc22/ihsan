const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');



exports.run = (client, message, params) => {

      var embed = new Discord.RichEmbed()
      
      .setTitle(`Karos Bot - Yardım Menüsü`)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      .setTimestamp()
      .addField("!ryardım :", "Robux alımı ve stoklarıyla ilgili komutları gösterir.")
      .addField("!syardım :", "Seviye ile satın alınan Rolleri gösterir.")
      .addField("!eyardım :", "Eğlence komutlarını gösterir.")
      .addField("!gyardım:", "Sunucu genel bot komutlarını gösterir.")
      .addField("!vyardım", "Vip komutlarını gösterir.")
      .addField("!mzyardım", "Müzik komutlarını gösterir.")
      .addField("!rkyardım", "vipler için renk komutlarını gösterir")
      .setFooter(`${message.author.username} Tarafından İnceleniyor..`, message.author.avatarURL)
      message.channel.sendEmbed(embed);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
