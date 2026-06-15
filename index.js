const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'pojaverscore.falix.gg',
  port: 43223,
  username: 'AFK_Player',
  version: '1.21.1'
})

bot.on('spawn', () => {
  console.log('Bot joined!')

  setTimeout(() => {
    bot.chat('/register Password5758947 Password5758947')
  }, 3000)

  setTimeout(() => {
    bot.chat('/login Password5758947')
  }, 6000)
})
const http = require('http');

http.createServer((req, res) => {
  res.end('Bot Online');
}).listen(process.env.PORT || 3000);
