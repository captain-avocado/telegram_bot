import TelegramBot from 'node-telegram-bot-api';
import config from 'config';

const TOKEN = config.get("token");
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', msg => {
    const { chat: { id }} = msg;
    bot.sendMessage(id, "Message detected");
});

bot.onText(/\/help (.+)/, (msg, [source, match]) => {
    const { chat: { id }} = msg;
    bot.sendMessage(id, match);
});


//cmd + d              ->        дубликат текущей строки
//cmd + backSpace      ->        удаляет всю строку
//alt + arrow-up       ->        выделяет следующий по размеру блок кода
//alt + ЛКМ            ->        мультикурсор

