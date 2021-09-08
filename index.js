const Discord = require("discord.js");

const client = new Discord.Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(client.config.token);
