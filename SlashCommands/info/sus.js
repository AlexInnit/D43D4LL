const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "sus",
    description: "Quite sus ngl",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `RED DO BE SUS THE, AND YOU ARE RED TIME TO BAN YOU` });
        setTimeout(() => {
        interaction.followUp({ content: `Setting up the code to ban you`})
        }, 2000)
        setTimeout(() => {
        interaction.followUp({ content: `Ah sh*t somthing went wrong i guess you arent getting banned today`})
        }, 4000)
    },
};
