const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'pojaverscore.falix.gg',
  port: 43223,
  username: 'PojaverAFFFFfK',
  version: '1.21.1'
})

bot.on('spawn', () => {
  console.log('Bot joined!')

  // Register
  setTimeout(() => {
    bot.chat('/register 4674877 4674877')
  }, 3000)

  // Login
  setTimeout(() => {
    bot.chat('/login 4674877')
  }, 7000)
})

bot.on('error', console.log)
bot.on('kicked', console.log)

const http = require('http')

http.createServer((req, res) => {
  res.end('Bot Online')
}).listen(process.env.PORT || 3000)
