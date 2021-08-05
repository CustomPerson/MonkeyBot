const Discord = require('discord.js')

const client = new Discord.Client();

client.once('ready', () => {
    console.log('MonkeyBot is online!');
})








client.login(process.env.token);