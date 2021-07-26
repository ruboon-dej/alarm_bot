import 
const ms = require('ms');
const discord = require ("discord.js");
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
client.login(Token);
client.once('ready', () => {
    console.log(`Ready to go! \n Log in as ${client.user.tag}`);
})

const PREFIX = "$";

client.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    message.channel.send("Test")
});