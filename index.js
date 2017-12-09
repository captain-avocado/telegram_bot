import TelegramBot from 'node-telegram-bot-api';
import config from 'config';

const TOKEN = config.get("token");
const bot = new TelegramBot(TOKEN, {
    webHook: {
        port: config.get("port"),
        autoOpen: false
    }
});

bot.openWebHook();
bot.setWebHook(`${config.get("url")}/bot${TOKEN}`);

bot.on('message', msg => {
    const { chat: { id }} = msg;
    bot.sendMessage(id, "Message detected");
});

bot.onText(/\/help (.+)/, (msg, [source, match]) => {
    const { chat: { id }} = msg;
    bot.sendMessage(id, match);
});
