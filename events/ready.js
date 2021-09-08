const { user } = require("../index");
const client = require("../index");

client.on("ready", () => {
    client.user.setActivity('Genesis Universe', {
        type: 'COMPETING'
    })
    client.user.setUsername("𝓓𝓑")
    client.user.setStatus('idle')    
    console.log(`${client.user.tag} is up and ready to go!`)
    
});
