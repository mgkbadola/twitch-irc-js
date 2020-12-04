const tmi = require('tmi.js');
const time = []
const persons = process.env.persons.split(' ')
const streamers = process.env.streamers.split(' ')
for(let x of persons){
    time[x] = 0
}
const opts = {
    identity: {
        username: process.env.user,
        password: process.env.oauth
    },
    channels: streamers
};
const client = new tmi.client(opts);

client.on('message', onMessageHandler);

client.connect().then(r => console.log(`User-side connected on ${r}`));

function onMessageHandler(target, context, msg, self) {
    if (self) {
        return;
    }
    for (let person of persons) {
        if(person.toLowerCase() === context.username){
            if (new Date().getTime() - time[context.username] >= 2.16e+7) {
                    client.say(target, `${person}, hello! :)`)
                    console.log(`Greeted ${person} at ${target} on ${new Date().getHours()}:${new Date().getMinutes()}`)
            }
            time[context.username] = new Date().getTime()
        }
    }
    if(msg.match(/!raffle \d+/))
        client.say(target, '!join')
}