const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
let guild = message.guild.id;   
var prefix = ayarlar.prefix;

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`**TC / AD SOYAD / DOGUM TARIHI / TELEFON NUMARASI**
  
||11246862000    ONUR ÖZBEK        (+90) 531 904 02 33    03.06.2008    TÜLİN   AVCI MEHMET    ANKARA    YENİ MAHALLE    İVEDİKKÖY MAH 1489 CAD ANKARA YENİMAHALLE
74392007114    TÜLİN ÖZBEK  (+90) 543 654 02 33  12.08.1981    null   null    ANKARA    YENİ MAHALLE    İVEDİKKÖY MAH 1489 CAD ANKARA YENİMAHALLE 
11744375866    BERAT EREN ÖZBEK  (+90) 534 263 95 40  12.08.2002    TÜLİN   AVCI MEHMET    ANKARA    YENİ MAHALLE    İVEDİKKÖY MAH 1489 CAD ANKARA YENİMAHALLE
74464004706    AVCI MEHMET ÖZBEK  (+90) 530 273 88 61  12.08.1978    null   null    ANKARA    YENİ MAHALLE    İVEDİKKÖY MAH 1489 CAD ANKARA YENİMAHALLE
https://media.discordapp.net/attachments/1012410671222239272/1012411692392652880/unknown.png?width=509&height=599
https://media.discordapp.net/attachments/1012410671222239272/1012411800702173214/unknown.png?width=328&height=599||`);
};

exports.conf = {
  aliases: ['duchy'],
  permLevel: 0,
  kategori: 'infaz'
};

exports.help = {
  name: 'dante',
  description: 'Dante Aile XD',
  usage: 'dante',

};