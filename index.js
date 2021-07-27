require('dotenv').config();
const ms = require('ms');
const discord = require ("discord.js");
const { Client, MessageEmbed } = require('discord.js');
const client = new discord.Client();
client.login(process.env.TOKEN);
client.once('ready', () => {
    console.log(`Ready to go! \n Log in as ${client.user.tag}`);
})

const Multipleprefix = ["$","/","#"];

client.on('message', message =>{
    const PREFIX = DoesPrefixExist(message.content,Multipleprefix)
    if (PREFIX) {
        let args = message.content.substring(PREFIX.length).split(" ");

        message.channel.send("Test")
    };
});

function DoesPrefixExist(str, Prefix) {
    let FirstChar = str.charAt(0)
    for (let i = 0 ; i < Prefix.length; i++) { 
        if (FirstChar == Prefix[i]) {
            return Prefix[i]
        }
    }
    return false
}