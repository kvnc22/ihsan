const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var request = require('request');

exports.run = async (bot, message) => {

let atam = ('https://media.discordapp.net/attachments/584361176427659265/599302990590902275/ss.gif')
 
   let gifembed = new Discord.RichEmbed()
        .setTitle("Başbuğ Gazi Mareşal Mustafa Kemal ATATÜRK!")
        .setColor("RANDOM")
        .setImage(atam)
      .setFooter(`${message.author.username} Tarafından Saygıyla Anılıyor..`, message.author.avatarURL)
    message.channel.send(gifembed);
};

    
    

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'atatürk',
description: 'atatürk',
usage: 'atatürk'
};