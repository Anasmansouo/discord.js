const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'server',
    execute(client, message, args) {
        
        let Embed = new MessageEmbed()
        .setImage (message.guild.iconURL({dynamic: true}))
      
         .setColor('DARK_GOLD')
        .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true})) 
       .setDescription (`Owner : ${message.guild.ownerId} | <@${message.guild.ownerId}>\n Members In This Beutiful Server : ${message.guild.memberCount}\nCreated At :${message.guild.createdAt.toLocaleString()}`)
       .setThumbnail(message.guild.iconURL({dynamic: true}))
       message.reply({embeds: [Embed]}); 
       

    }
}