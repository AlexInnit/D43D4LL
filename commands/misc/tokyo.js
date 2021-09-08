const { Message, Client } = require("discord.js");

module.exports = {
    name: "tokyo",
    aliases: ['drift'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const { voice } = message.member;

        if(!voice) return message.reply('you must be in a voice channel.')

        voice.channel.join()
    },
};
