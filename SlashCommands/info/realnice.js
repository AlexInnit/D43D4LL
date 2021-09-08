const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "realnice",
    description: "for the one and only realnice",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `real NOICE. https://youtu.be/26lZvxwWzY0` });
    },
};
