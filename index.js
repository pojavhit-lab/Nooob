const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'pojaverscore.falix.gg',
  port: 25565,
  username: 'AFKKKK_BOT44444'
});

bot.on('spawn', () => {
  setTimeout(() => {
    bot.chat('/register tyryjfyj688tr tyryjfyj688tr');
  }, 3000);

  setTimeout(() => {
    bot.chat('/login tyryjfyj688tr');
  }, 8000);
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
