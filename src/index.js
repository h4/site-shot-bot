const TeleBot = require('telebot');
const take_screenshot = require('./take_screenshot');
const bot = new TeleBot('575409131:AAFyltorcg5vg3e9Z7IrfH7bpcOdwBqJj6w');

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
