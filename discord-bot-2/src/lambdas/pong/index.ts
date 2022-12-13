import { Handler } from "aws-cdk-lib/aws-lambda";
import {GatewayIntentBits, Client} from "discord.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers
    ],
    
});

let bot = {
    client, 
    prefix: "!",
    owners: ["97373703645458432"]
}

// client.application?.commands =  new Discord.Collection()
// client.events = new Discord.Collection()

// client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
// client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

// client.loadEvents(bot, false)
// client.loadCommands(bot, false)



client.login("MTA0ODA0Nzg0NTc3ODkxOTUxNA.GdUr7x.88X0fW-1pqOsJ06lXehmKsOio6BGXTgLyYUhgo");

export async function handle(event: any) {
    console.log(event);


        return {
            statusCode: 200,
            body: JSON.stringify({type: 1})
        };
}