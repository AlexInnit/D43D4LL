const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "pong",
    description: "sends ping because ping sends pong so pong sends ping",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `Ping.` });
    },
};
