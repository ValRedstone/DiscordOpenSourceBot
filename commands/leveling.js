const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args, dbPrefixs, dbTickets, prefix, dbWelcome, dbGoodbye, dbRank) => {
    if (message.member.hasPermission("MANAGE_SERVER")) {
    	if (!args[0]) {
        	const e = new MessageEmbed()
        	.setTitle("Erreur de syntaxe")
        	.setColor("RED")
        	.setDescription(`Merci de faire \`${prefix}leveling active\` pour activer le système de niveau, ou \`${prefix}leveling desactive\` pour desactiver le système de niveau.`)

        	message.channel.send(e)
    	}
    	else if (args[0] === "active") {
            if (dbRank.get(`lvl_${message.guild.id}`) !== "on") {
                dbRank.set(`lvl_${message.guild.id}`, "on")

        		const e = new MessageEmbed()
        		.setTitle("Réussite")
        		.setColor("GREEN")
        		.setDescription(`Le système de niveau sur le serveur à été activé.`)

        		message.channel.send(e)
            }
            else {
                const e = new MessageEmbed()
        		.setTitle("Erreur")
        		.setColor("RED")
        		.setDescription(`Le système de niveau sur le serveur est déjà activé.`)

        		message.channel.send(e)
            }
    	}
    	else if (args[0] === "desactive") {
            if (dbRank.get(`lvl_${message.guild.id}`) !== "off") {
                dbRank.set(`lvl_${message.guild.id}`, "off")

        		const e = new MessageEmbed()
        		.setTitle("Réussite")
        		.setColor("GREEN")
        		.setDescription(`Le système de niveau sur le serveur à été désactivé.`)

        		message.channel.send(e)
            }
            else {
                const e = new MessageEmbed()
        		.setTitle("Erreur")
        		.setColor("RED")
        		.setDescription(`Le système de niveau sur le serveur est déjà désactivé.`)

        		message.channel.send(e)
            }
    	}
    	else if (args[0]) {
        	const e = new MessageEmbed()
        	.setTitle("Erreur de syntaxe")
        	.setColor("RED")
        	.setDescription(`Merci de faire \`${prefix}leveling active\` pour activer le système de niveau, ou \`${prefix}leveling desactive\` pour desactiver le système de niveau.`)

        	message.channel.send(e)
    	}
    }
    else {
        const e = new MessageEmbed()
        .setTitle("Permission")
        .setColor("RED")
        .setDescription("Tu n'as pas la permission `MANAGE_SERVER`")
        
        message.reply(e)
    }
}
