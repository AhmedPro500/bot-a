client.on('message', message => {
    var BotServersChannel = "550845266316492800";// ايدي الروم المطلوب يرسل فيه السيرفرات
    if(message.author.bot) return;
    if(message.content === config.prefix + '!') {
    if (message.author.id !== config.mkID) return;
      client.guilds.forEach(g => {
          var botserverembed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor('RANDOM')
        .setThumbnail(g.iconURL)
        .addField("**ServerName**", `**${g.name}**`, true)
        .addField("**ServerID**", `**${g.id}**`, true)
        .addField("**Members**", `**${g.memberCount}**`, true)
        .addField("**Roles**", `**${g.roles.size}** Role `, true)
        .addField('**Channels**', `**${g.channels.size}**`, true);
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400,
        }).then(i => client.channels.get(BotServersChannel).send(`Invite Link: <https://discord.gg/GMtSbsA>\nServer Owner: <@${g.owner.id}>`,{embed: botserverembed}));
        ;
      })
    }
});//By MK ... Alpha Codes