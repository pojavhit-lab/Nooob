const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'pojaverscore.falix.gg',
  port: 43223,
  username: 'PojaverAFK',
  version: '1.21.1'
})

bot.on('spawn', () => {
  console.log('Bot joined!')

  setTimeout(() => {
    bot.chat('/login 5758947')
  }, 5000)
})

bot.on('kicked', console.log)
bot.on('error', console.log)

const http = require('http');

http.createServer((req, res) => {
  res.end('Bot Online');
}).listen(process.env.PORT || 3000);
