const { Message, Client } = require("discord.js");

module.exports = {
    name: "pong",
    aliases: ['po'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`IDK, ping.`);
    },
};
