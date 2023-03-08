const { MessageEmbed } = require('discord.js')
 module.exports = {
    name: 'user',
    execute(client, message, args) {
        
        let member = message.mentions.members.first();
        if (!member) return;

        let Embed = new MessageEmbed()
         .setColor ('AQUA')
         .setFields (
            {name: 'Username: ', value: member.user.username },
            {name: 'Id: ', value: member.user.id },
            {name: 'Mention : ', value: `<@${member.user.id}>` },
            {name: 'تاريخ الدخول \ Created At  : ', value: `${member.user.createdAt.toLocaleString()}` },
            {name: ' تاريخ الدخول للسيرفر\ Joined At  : ', value: `${member.joinedAt.toLocaleString()}` },

         )
         .setTimestamp ()
         .setAuthor(member.user.tag, member.user.avatarURL({dynamic: true}))
         .setFooter('Made By Yamerashka : Yamerashka. ᵀᴺᴴ#0750')
        
         .setThumbnail(member.user.avatarURL({dynamic: true}));
         
         
        
        
            

        message.reply({embeds: [Embed]})

    }
}