const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'pojaverscore.falix.gg',
    port: 43223,
    username: 'AFK_Player',
    version: '1.21.1'
  })

  bot.on('spawn', () => {
    console.log('Bot joined!')
  })

  bot.on('end', () => {
    console.log('Disconnected, reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', console.log)
}

createBot()
const http = require('http');

http.createServer((req, res) => {
  res.end('Bot Online');
}).listen(process.env.PORT || 3000);
