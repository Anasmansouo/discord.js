const {token, prefix} = require ('../config.json');

module.exports = {
    name: 'messageCreate',
    once: true,
    execute(message,client) {
        
       if(!message.content.startsWith(prefix) || message.author.bot ) return;
       const args = message.content.slice(prefix.length).trim().split(/ +/);
       const command = args.shift().toLowerCase();
       try{
       let commandFiles = client.commands.get(command) || client.commands.find (cmd => cmd.aliases && cmd.aliases.includes(command));
       if(!commandFiles) return;


       
commandFiles.execute(client, message, args)
       } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command! ');
       }


    },
}