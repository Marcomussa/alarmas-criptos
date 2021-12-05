module.exports = {
  index: (req, res) => {
    const Discord = require("discord.js");
    const client = new Discord.Client();

    client.on("ready", () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on("message", (msg) => {
      if (msg.content === "ping") {
        msg.reply("pong");
      }
    });

    const botToken = 'OTE2NzM3OTY5MTk5NjYxMDY4.YaugxA.1XARKo1Zk1cywcDv7_DCSUuUth8'
    client.login(botToken);

    res.render("index");
  },
};
