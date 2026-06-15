const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'pojaverscore.falix.gg',
    port: 43223,
    username: 'AFKBot'
  });

  bot.on('spawn', () => {
    console.log('Bot joined!');
  });

  bot.on('end', () => {
    console.log('Disconnected, reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log(err);
  });
}

createBot();
