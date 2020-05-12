module.exports={
    name: "say",
    description: "Get the bot to say what ever you want!",
    usage: "<msg>",
    category: "fun",
    run: async(bot,message,args)=>{
        let MSG = message.content.split(`${bot.prefix}say `).join(" ")
        if(!MSG)return message.channel.send(`You did not specify your message to send 🤓🤓🤓`)
        message.channel.send(MSG)
        message.delete()
    }
}