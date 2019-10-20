// Botkit is powered by "skills". For example this one is "hears"
// Basically the bot listens to to direct mentions and mentions (of the bot)
// and if it hears the word "!thanks" then the skill is triggered
// try changing the trigger word
// here are the docs for more info https://botkit.ai/docs/v0/core.html
// and the Botkit Discord code which has some great examples!
// https://github.com/brh55/botkit-discord

module.exports = function(controller) {
  controller.hears("vruce vibe check", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;

    // Many bots use the this method but sometimes it doesn't work, for example if you mention more than one person
    //let recipient = message.mentions.users.last();

    // this method filters out any users that aren't bots
    // if you have a bot that does more administrative things like blocking people, you might want to filter even more
    // like filter out admins or the person sending the message
    // it's using Discord.js for all this, yep that's right you have access to everything in Botkit AND Discord.js
    // https://discord.js.org/#/docs/main/master/class/User
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();

    // this is a list of potential responses, it chooses from them randomly.
    // Try changing them or adding your own.
    let responses = [
      `buddy, pal, vro, your vibes, rancid! 🤢`,
      `i cant read ${recipient}s unstable aura`,
      `cold, bosiply luccwarm`,
      `perpindicular`,
      `**Vibing**`,
      `*VIBING*`,
      `*vibing*`,
      `warm, youre getting warmer, cold cold cold oh you died of hypothermia`,
      `${sender} what are Your vibes?`,
      `blue`
    ];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("am i vibing", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;

    // Many bots use the this method but sometimes it doesn't work, for example if you mention more than one person
    //let recipient = message.mentions.users.last();

    // this method filters out any users that aren't bots
    // if you have a bot that does more administrative things like blocking people, you might want to filter even more
    // like filter out admins or the person sending the message
    // it's using Discord.js for all this, yep that's right you have access to everything in Botkit AND Discord.js
    // https://discord.js.org/#/docs/main/master/class/User
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();

    // this is a list of potential responses, it chooses from them randomly.
    // Try changing them or adding your own.
    let responses = [`yes`, `no`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce is", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;

    // Many bots use the this method but sometimes it doesn't work, for example if you mention more than one person
    //let recipient = message.mentions.users.last();

    // this method filters out any users that aren't bots
    // if you have a bot that does more administrative things like blocking people, you might want to filter even more
    // like filter out admins or the person sending the message
    // it's using Discord.js for all this, yep that's right you have access to everything in Botkit AND Discord.js
    // https://discord.js.org/#/docs/main/master/class/User
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();

    // this is a list of potential responses, it chooses from them randomly.
    // Try changing them or adding your own.
    let responses = [`yes`, `no`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vibe check", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;

    // Many bots use the this method but sometimes it doesn't work, for example if you mention more than one person
    //let recipient = message.mentions.users.last();

    // this method filters out any users that aren't bots
    // if you have a bot that does more administrative things like blocking people, you might want to filter even more
    // like filter out admins or the person sending the message
    // it's using Discord.js for all this, yep that's right you have access to everything in Botkit AND Discord.js
    // https://discord.js.org/#/docs/main/master/class/User
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();

    // this is a list of potential responses, it chooses from them randomly.
    // Try changing them or adding your own.
    let responses = [
      `buddy, pal, vro, your vibes, rancid! 🤢`,
      `i cant read ${recipient}s unstable aura`,
      `cold, bosiply luccwarm`,
      `perpindicular`,
      `**Vibing**`,
      `*VIBING*`,
      `*vibing*`,
      `warm, youre getting warmer, cold cold cold oh you died of hypothermia`,
      `${sender} what are Your vibes?`,
      `blue`
    ];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("can vruce", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;

    // Many bots use the this method but sometimes it doesn't work, for example if you mention more than one person
    //let recipient = message.mentions.users.last();

    // this method filters out any users that aren't bots
    // if you have a bot that does more administrative things like blocking people, you might want to filter even more
    // like filter out admins or the person sending the message
    // it's using Discord.js for all this, yep that's right you have access to everything in Botkit AND Discord.js
    // https://discord.js.org/#/docs/main/master/class/User
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();

    // this is a list of potential responses, it chooses from them randomly.
    // Try changing them or adding your own.
    let responses = [`can you?`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("does vruce", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;

    // Many bots use the this method but sometimes it doesn't work, for example if you mention more than one person
    //let recipient = message.mentions.users.last();

    // this method filters out any users that aren't bots
    // if you have a bot that does more administrative things like blocking people, you might want to filter even more
    // like filter out admins or the person sending the message
    // it's using Discord.js for all this, yep that's right you have access to everything in Botkit AND Discord.js
    // https://discord.js.org/#/docs/main/master/class/User
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();

    // this is a list of potential responses, it chooses from them randomly.
    // Try changing them or adding your own.
    let responses = [`I dont know do you?`];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
  controller.hears("vruce help", ["ambient"], (bot, message) => {
    let response;
    let sender = message.user;

    // Many bots use the this method but sometimes it doesn't work, for example if you mention more than one person
    //let recipient = message.mentions.users.last();

    // this method filters out any users that aren't bots
    // if you have a bot that does more administrative things like blocking people, you might want to filter even more
    // like filter out admins or the person sending the message
    // it's using Discord.js for all this, yep that's right you have access to everything in Botkit AND Discord.js
    // https://discord.js.org/#/docs/main/master/class/User
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();

    // this is a list of potential responses, it chooses from them randomly.
    // Try changing them or adding your own.
    let responses = [
      `>>> Call 911 or your mother I can do very little. 
vibe check or vruce vibe check checks the vibes.
am i vibing/ is ___ vibing checks to see if they are vibing`
    ];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
};
