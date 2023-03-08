const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

 module.exports = {
    name: 'ban',
    execute(client, message, args) {
        client.on('messageCreate', message => {
            if (!message.content.startsWith(prefix) || message.author.bot) return;
          
            const args = message.content.slice(prefix.length).trim().split(' ');
            const command = args.shift().toLowerCase();
          
            if (command === 'ban') {
              if (!message.member.permissions.has('ADMINISTRATOR')) {
                message.reply('You do not have permission to use this command.');
                return;
              }
          
              const member = message.mentions.members.first();
              if (!member) {
                message.reply('You did not mention anyone to ban.');
                return;
              }
          
              member.ban().then(() => {
                message.reply(`${member.user.tag} has been banned from the server.`);
              }).catch(err => {
                message.reply('An error occurred while trying to ban the member.');
                console.error(err);
              });
            }
          });
          
    
    
    }
}