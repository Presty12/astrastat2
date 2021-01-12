const ayarlar = {
  guildID: 'id', // sunucu idsi
  ownerRole:"id", // sunucu sahiplerinin rolü
  teyitsizRolleri:['id'], // kayıt olmayanlara verieln rol
  jailRolu:"id", // cezalılara verilen rol
  enAltYetkiliRolu:['id'], // ilk yetkili permi
  activity:"shina", // botun durumu
  status:"online",// dnd idle / dnd = rahatsız etmeyin idle = boşta
  invitelink:"davet", //davet linki
  symbol:"tag", // tag
  voicechannel:"id" // botun gireceği ses kanalı
};
module.exports = ayarlar;
