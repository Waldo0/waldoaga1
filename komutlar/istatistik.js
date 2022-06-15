const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
  .addField(`:scroll: »  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`:incoming_envelope: » Yapımcım` ,`<@637328548163616799>`,true)
  .addField(`:label: » Node.js`, `${process.version}`, true)
 .addField(`:bar_chart: » Kanal Sayısı`, `62`, true)
 .addField(`:postbox: » Kullanıcı Sayısı`, `62`, true)
 .addField(`:envelope: » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .addField(`» Linkler`, `[Destek Sunucusu](https://discord.gg/CQs2sbMMKx) | waldo.exe#9999`, true)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 