const TeleBot = require('telebot');
const take_screenshot = require('./take_screenshot');
const token = process.env.BOT_TOKEN;
const bot = new TeleBot(token);

bot.on('text', msg => {
    let id = msg.from.id;
    let text = msg.text;

    if (text.startsWith("http")) {
        take_screenshot(text)
            .then(bytes => bot.sendPhoto(id, bytes));
    } else {
        bot.sendMessage(id, 'Give me link, please!');
    }
});

bot.connect();
