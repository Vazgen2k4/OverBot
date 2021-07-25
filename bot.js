require('dotenv').config();
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const Commands = require('./Scripts/commands');
const Functions = require('./Scripts/Function');

console.log(Functions.outPutTime());

bot.start((ctx) => ctx.reply(`
Привет ${ctx.message.from.first_name}, 
\nЯ бот созданный для всяких разных плюшек в тг
Подробнее: /info`
));

bot.help((ctx) => ctx.reply(ctx.reply(Functions.helpMessage(Commands))));

bot.on('text', (ctx) => {
    let msg = ctx.message.text.split(' ');
    let thisCommand = msg[0].toLowerCase();

    try {
        if (thisCommand == Commands.help.run) ctx.reply(Functions.helpMessage(Commands));
        else if (thisCommand == Commands.go.run) ctx.reply(Functions.Go(msg));
        else if (thisCommand == Commands.love) ctx.reply(Functions.Love());
        else if (thisCommand == Commands.rand.run) CommandRand(ctx, msg);
        else if (thisCommand == Commands.stat.run) ctx.reply(Functions.getStat(ctx.message));
        else if (thisCommand == Commands.myid.run) ctx.reply(`Ваш ID в телеграмме:\n${ctx.message.from.id}`);
        else if (thisCommand == Commands.levelUp.run) ctx.reply(Functions.updateUsers(ctx.message, 'level', msg[1]));
        else if (thisCommand == Commands.pointsUp.run) ctx.reply(Functions.updateUsers(ctx.message, 'points', msg[1]));
        else if (thisCommand == Commands.levelBuy.run) ctx.reply(Functions.buyLevel(ctx.message, 100));
        else if (thisCommand == Commands.save) Functions.saveInfoUsersList();

    } catch (error) {
        console.log("Произошла ошибка типа:" + error);
        ctx.reply('Произошла ошибка\n/info - список команд');
    }

});

bot.launch()
