// here are the docs for more info https://botkit.ai/docs/v0/core.html
// and the Botkit Discord code which has some great examples!
// https://github.com/brh55/botkit-discord

module.exports = function(controller) {
  controller.hears(["vruce vibe check","vruce vibecheck","vibecheck","vibe check"], ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [
      `buddy, pal, vro, your vibes, rancid! 🤢`,
      `i cant read that unstable aura`,
      `cold, bosiply luccwarm`,
      `perpindicular`,
      `**Vibing**`,
      `*VIBING*`,
      `*vibing*`,
      `warm, youre getting warmer, cold cold cold oh you died of hypothermia`,
      `${sender} what are Your vibes?`,
      `blue`,
      `shit colored`,
      `shartroose`,
      `english is a colonoscopy language, get with the program.`,
      `slightly to the left and back a little bit`,
      `*failed*`,
      `j chillin`
    ];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("am i vibing", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`yes`, `no`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears(["vruce is", "vruce am"], ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`yes`, `no`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears(["isaacmeter"], ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    //randomDistrubution by itai
    const randomDistrubution = ( numValues, max) => {
        let arr = [0, max];
        for(let i = 0; i < numValues - 1; i++){
            arr.push(getRandomInt(0, max));
        }
        arr.sort((a,b) => a-b);
        let distribution = [];
        for(let i = 1; i<arr.length; i++){
            distribution.push(arr[i]-arr[i-1]);
        }
        return distribution;
    }

    const getRandomInt = (min, max) => { 
        min = Math.ceil(min); 
        max = Math.floor(max); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
    let isaacmeterValues = randomDistrubution(4, 20);
    let responses = [`${isaacmeterValues[0]} sexy, ${isaacmeterValues[1]} hot, ${isaacmeterValues[2]} cute, ${isaacmeterValues[3]} pretty`]
    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });

  controller.hears("can vruce", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`can you?`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("does vruce", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`I dont know do you?`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce give", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`here. you couldn't do it yourself?`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce I", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`I'm a bot not a magic wand.`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce should", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;

    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`only if it sparks joy`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce can", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`yes`, `no`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce do", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`yes`, `no`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce does", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`yes`, `no`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce can", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`yes`, `no`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce will", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`yes`, `possibly`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce are", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`yes`, `vaguely`, `no`];
    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce why", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [
      `because it is possible`,
      `because`,
      `because there is no other option`
    ];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce what", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();
    let responses = [`ask in a week`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears(
    ["vruce who", "vruce to whom", "vruce whomst"],
    ["ambient"],
    (bot, message) => {
      let response;
      let sender = message.user;
      let tagger = message.guild.members.random();
      let recipient = message.mentions.users
        .filter(user => user.bot === false)
        .last();
      let responses = [`${tagger}`];
      response = responses[Math.floor(Math.random() * responses.length)];
      bot.reply(message, response);
    }
  );
  controller.hears("vruce help", ["ambient"], (bot, message) => {
    const embed = new controller.RichEmbed();
    embed.setAuthor(
      "Vruce",
      "https://cdn.discordapp.com/app-icons/633401849910657024/bc3b492af46d60650391c4dd6cfe001c.png"
    );

    embed.setTitle("Call 911 or your mother I can do very little.");
    embed.addField(
      "Commands",
      `***vibe check, vibecheck, vruce vibe check or vruce vibecheck***: checks the vibes. 

***am i vibing / vruce is ___ vibing***: checks to see if they are vibing.

***isaacmeter***: checks isaacvalues

vruce can also answer most questions
`
    );
    embed.setColor("BLUE");
    bot.reply(message, embed);
  });
};
