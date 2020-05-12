const { formatDate } = require('../../functions')
const { MessageEmbed } = require('discord.js')
module.exports={
    name: "oldest",
    category: "info",
    description: "Get the oldest account creation date in the server!",
    run: async(bot, message, args) => {
        let mem = message.guild.members.cache.filter(m => !m.user.bot).sort( (a, b) => a.user.createdAt - b.user.createdAt).first()
        const Embed = new MessageEmbed()
        .setTitle(`The BOOMEST USER ${message.guild.name}`)
        .setColor(`RANDOM`)
        .setDescription(`${mem.user.tag} is the BOOMER user in ${message.guild.name}! Account creation date: ${formatDate(mem.user.createdAt)}`)
        message.channel.send(Embed)
    }
}