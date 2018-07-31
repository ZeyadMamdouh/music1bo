// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('EmeraldBot Shop', {type: 'WATCHING'});
});



client.login(process.env.TOKEN);
