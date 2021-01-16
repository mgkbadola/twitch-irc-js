❃❃TWITCH IRC IMPLEMENTATION❃❃

This project has two components to it: BOT and USER

The USER code is designed so as to greet their friends in selected channels via the Twitch chat box, after they have been inactive for more than 6 hours.
Also, it will auto-join a raffle whenever it is started by a moderator of a channel.

The BOT code is designed so as to alert the USER's friends whether USER is actually present in the chat or not.
So if USER typed !off in the chat, that would mean they are ACTIVE and hence BOT will NOT alert others.
Upon typing !on by the USER, it would imply that they are leaving and hence all the messages sent by the USER are actually automated. Hence if someone mentions USER, the BOT will alert the mentioner.
Lastly, the BOT also spams the same emotes with the USER. If a USER's message involves emotes from the list given in code, the BOT will send an emote only message with emote count ranging from 1 to 5.
