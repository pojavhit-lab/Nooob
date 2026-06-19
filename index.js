const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'pojaverscore.falix.gg',
  port: 24439,
  username: 'AFK KING5U'
})

bot.on('spawn', () => {
  console.log('Bot joined server')
  bot.chat('AFK bot online!')
})

// auto reconnect
bot.on('end', () => {
  console.log('Disconnected, reconnecting...')
  setTimeout(() => {
    process.exit(1)
  }, 5000)
})
