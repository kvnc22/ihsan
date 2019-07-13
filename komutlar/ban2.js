const Discord = require('discord.js');
exports.run = (client, message, args) => { 
  
  if (!message.guild) {  ////  (!) olumsuz
 message.member.send('ban adlı komut özel mesajlarda kullanılamaz')   /// ' ' yazı
  }
    
   let guild = message.guild 
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();

  if (reason.length < 1) return message.reply('yasaklama sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('yasaklanacak kullanıcıyı yazmalısın!').catch(console.error);
  
  
////   .setColor('RED')
  
//// .addField('')
  
  
///.set.Title()
  
////.setTimestamp()
  
//// .addField()  

  
  ////kullanıcı : `${user.username}#${user.discriminator} (${user.id})`
  
  
  const embed2 = new Discord.RichEmbed()
.setColor('RED')
.setTitle('Yasaklama')
.addField('Kullanıcı:' , `${user.username}#${user.discriminator} (${user.id})`)
.addField('Sebep:' , reason)
.addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
client.channels.get('598494510842118146').send(embed2)
message.guild.ban(user, 2);

  
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'ban',
  usage: 'ban'
};