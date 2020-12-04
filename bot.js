const tmi = require('tmi.js');
let isactive = false
const spam = ['KEKL', 'KEKW', 'LULW', 'OMEGALUL', 'pepeLaugh', 'PepeLaugh']
const streamers = process.env.streamers.split(' ')
const opts = {
    identity: {
        username: process.env.bot,
        password: process.env.oauth
    },
    channels: streamers
};
const client = new tmi.client(opts);

client.on('message', onMessageHandler);

client.connect().then(r => console.log(`Bot-side connected on ${r}`))

function onMessageHandler(target, context, msg, self) {
    if (self) {
        return;
    }
    if(context.username === process.env.user){
        if (msg === '!off'){
            isactive = true
            console.log('Your presence set to active')
        }
        else if (msg === '!on'){
            isactive = false
            console.log('Your presence set to inactive')
        }
        for(let emote in spam){
            if (msg.includes(emote)){
                let message = ''
                const i = Math.floor(Math.random()*5) + 1
                for(let j=0; j<=i; j++)
                    message += `${emote} `
                client.say(target, message)
            }
        }
    }
    if (msg.includes(process.env.user)){
        if (!isactive)
            client.say(target, `${context.username}, ${process.env.user} is not available at the moment.`)
    }
}
