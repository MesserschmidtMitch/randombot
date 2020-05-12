const {MessageEmbed} = require('discord.js')
module.exports={
    name: "8ball",
    description: "There is a big chance I insult you!",
    category: "fun",
    run: async(bot,message,args)=>{
        let question = message.content.slice(bot.prefix.length+6)
        if(!question)return message.channel.send(`You did not specify your question!`)
        else{
            let responses=[
                "YES!!!",
                "No bruh",
                "Definetly :|",
                "Absoloutely !!!!",
                "Not in a million years!",
                "VERY DOubTful",
                "Reply hazy, try again",
                "You may rely on it",
                "😂👌👌",
                "Most likely",
                "As i see it, yes",
                "Cannot predict now 😔",
                "Better not yo tell u now 😳😳",
                "Don't count on it",
                "Outlook not so good"
            ]
            let response = responses[Math.floor(Math.random()*(responses.length)-1)]
            let Embed = new MessageEmbed()
            .setTitle(`8 BALLLS`)
            .setDescription(`Your question: ${question}\nMy reply: ${response}`)
            .setColor(`RANDOM`)
            message.channel.send(Embed)
        }
    }
}