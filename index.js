const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'pojaverscore.falix.gg',
  port: 24439,
  username: 'AFKKKK_BOT44444'
});

bot.on('spawn', () => {
  console.log('Bot joined!');
  
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 30000);
});
