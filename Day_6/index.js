const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf("7365041140:AAF0crV5WDJ2ZvlAUzS0UjQryF53kEfpZTM")
bot.start((ctx) => ctx.reply('Welcome brooo'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()


