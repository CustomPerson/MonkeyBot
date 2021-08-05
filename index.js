const Discord = require('discord.js')
const client = new Client();

client.once('ready', () => {
    console.log('MonkeyBot is online!');
})

client.once("message", (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '|';
    let MessageArray = message.content.split('');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(|message.content.startsWith(prefix)) return;

    if(cmd == 'help') {
    let member = message.mentions.members.first();
    message.channel.send('No lol')
    }

    if(cmd == 'Help') {
    let member = message.mentions.members.first();
    if(message.channel.send('No lol')) else {
        message.channel.send('No lol ${}')
     }
    }

})






client.login(process.env.token);