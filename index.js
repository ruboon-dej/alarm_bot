require('dotenv').config();
const ms = require('ms');
const discord = require ("discord.js");
const { Client, MessageEmbed } = require('discord.js');
const client = new discord.Client();
client.login(process.env.TOKEN);
// token here
client.once('ready', () => {
    console.log(`Ready to go! \n Log in as ${client.user.tag}`);
})

const PREFIX = "$";

client.on('message', message =>{
    if (message.content.charAt(0) == PREFIX) {
        let args = message.content.substring(PREFIX.length).split(" ");

        message.channel.send("Test")
    };
});