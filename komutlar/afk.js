const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
      let sebep = args.slice(0).join(" ");
      if (!sebep) return; message.channel.send('')

      db.set(`afks_${message.author.id}`, sebep)
  


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'afk',
  description: 'AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.)',
  usage: 'afk <sebep>'
};