const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require('fs');
var prefix = ayarlar.prefix;

  

module.exports = client => {
var oyun = [
        "+yardım"
       
               
               
  
];
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
 
      client.user.setGame(oyun[random], "https://www.twitch.tv/kendinemuzisyen");
        client.user.setStatus("dnd");
        }, 2 * 5000);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};