const Discord = require("discord.js");
const Database = require("easy-json-database");

const dbGoodbye = new Database("./goodbye.json");
const dbMCount = new Database("./memberCount.json");

module.exports = async (client, member) => {
        const ch = member.guild.channels.cache.find(c => c.id === dbGoodbye.get(`gb_${member.guild.id}`));

        if (!ch) return

        const membersCh = member.guild.channels.cache.find(c => c.id === dbMCount.get(`members_${member.guild.id}`));
        const botsCh = member.guild.channels.cache.find(c => c.id === dbMCount.get(`bots_${member.guild.id}`));
        const allMbrsCh = member.guild.channels.cache.find(c => c.id === dbMCount.get(`allMembers_${member.guild.id}`));

        const e = new Discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        .setTitle("<a:blob_left:828559672298176542> Membre Perdu")
        .setColor("#2F3136")
        .addField("Nom", member.user.username)
        .addField("Tag", member.user.tag)
        .addField("ID", member.user.id)

        ch.send(e)
        .catch(_err => {
            console.log(_err)
        })

        if (membersCh) {
            membersCh.setName(`Members: ${member.guild.members.cache.filter(mbr => !mbr.user.bot).size}`);
        }
        if (botsCh) {
            botsCh.setName(`Bots: ${member.guild.members.cache.filter(mbr => mbr.user.bot).size}`);
        }
        if (!allMbrsCh) {
            allMbrsCh.setName(`All Members: ${member.guild.memberCount}`);
        }
}