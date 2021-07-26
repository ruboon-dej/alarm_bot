const ms = require('ms');
const discord = require ("discord.js");
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
client.login("ODY5MjA3NDkxMTg2MTMwOTY0.YP62jg.eN8i1KGZ3P_UPMkNSinfGzvQP5A");
client.once('ready', () => {
    console.log(`Ready to go! \n Log in as ${client.user.tag}`);
})

const PREFIX = "$";

client.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    message.channel.send("Test")
});