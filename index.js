const { Client , GuildEmoji} = require("discord.js-selfbot-v13");
const { joinVoiceChannel } = require('@discordjs/voice');
const { clans } = require("./constants");


require("dotenv").config();

const client = new Client();
const whitelist = [];

const guildId = '1146226702264049695'; // Replace with your server's guild ID
const voiceChannelId = '1283093694592843796'; // Replace with the target voice channel ID

client.once('ready', async () => {
    console.log(`${client.user.tag} is online!`);

    // Find the guild by ID
    const guild = await client.guilds.fetch(guildId);
    if (!guild) return console.error("Guild not found!");

    // Find the voice channel by ID
    const voiceChannel = await guild.channels.fetch(voiceChannelId);
    if (!voiceChannel) { // 2 means it's a voice channel
        return console.error("Voice channel not found or invalid!");
    }

    // Join the voice channel
    joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: guild.id,
        adapterCreator: guild.voiceAdapterCreator,
        
        selfDeaf: true
    });

    console.log(`Joined voice channel: ${voiceChannel.name}`);
});



















client.on("messageCreate", (message) => {
  if (message.author.id === client.user.id) return; // Ignore self

  const member = message.guild.members.cache.get(message.author.id);

    const cmd = message.content.toLowerCase();
    const roles = member.roles.cache.map(role => role.name);
  switch (cmd) {
    case "shark":
        const nick = message.guild.emojis.cache.find(e => e.name === 'nick');
        message.channel.send(
            `# Shark's Clan helper\n\n**:white_check_mark:   bax dkhal l clan**\n\`\`\`shark join\`\`\`\n\n**:door: bax tkhraj**\n\`\`\`shark leave\`\`\`\n\n**${nick}   bax tbdel smiya dyalak (bla mtazid hada 🦈 fl lakhar )**\n\`\`\`shark chgname <name>\`\`\``
        );
        break;
  
    case "shark join":
        if(roles.includes("𝓢𝓗𝓐𝓡𝓚𝓢")){
            message.channel.send("nta 2aslan m3ana");
            return ;
        }
        let isClan = false;
        clans.forEach(e=>{
            if(roles.includes(e)){
                message.channel.send(`nta rak deja f ${e} Clan, dir \n> \`.c leave\`\nwmoraha dir\n \`shark join\``);
                isClan = true
                return ;
            }
        })
        if(isClan) return ;
        message.channel.send(`.c adduser ${message.author.id}`);
        message.channel.send(`<@${message.author.id}> please check dm and press "yes"`);
        break;
  
    case "shark leave":
        if(roles.includes("𝓢𝓗𝓐𝓡𝓚𝓢")){
            message.channel.send("we will miss you");
            message.channel.send(`smih <@${message.author.id}> ${message.author.globalName.slice(0 , message.author.globalName.length - 1)}`);
            message.channel.send(`.c removeuser ${message.author.id}`);
            return ;
        }
        
        message.channel.send("aslan maxi m3ana");
        break;
  
    case "shark leave":
        if(roles.includes("𝓢𝓗𝓐𝓡𝓚𝓢")){
            message.channel.send("we will miss you");
            message.channel.send(`smih <@${message.author.id}> ${message.author.globalName.slice(0 , message.author.globalName.length - 1)}`);
            message.channel.send(`.c removeuser ${message.author.id}`);
            return ;
        }
        
        message.channel.send("aslan maxi m3ana");
        break;
  
    default:
        const message1 = message.content.split(" ");
        if(message1.slice(0, 2).join(" ").toLowerCase() == "shark chgname"){
            if(!roles.includes("𝓢𝓗𝓐𝓡𝓚𝓢")){
                message.channel.send("nta 2aslan maxi m3ana");
                return ;
            }
            let name = message1.slice(2).join(" ");

            if(!name){
                message.channel.send("please enter a name");
                return ;
            }

            message.channel.send(`smih ${message.author.id} ${name} 🦈`);
         
        }
        break;
  }
//   if (message.content.toLowerCase() === "shark") {
   
    
//     message.channel.send(`.c adduser ${message.author.id}`);
//     message.channel.send(`<@${message.author.id}> please click "yes" in dm`);
//   }
});



client.login(process.env.TOKEN);
