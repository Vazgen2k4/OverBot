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
        
        switch (thisCommand) {
            case Commands.help.run:
                ctx.reply(Functions.helpMessage(Commands));
                break;

            case Commands.go.run:
                ctx.reply(Functions.Go(msg));
                break;

            case Commands.love:
                ctx.reply(Functions.Love());
                break;

            case Commands.rand.run:
                CommandRand(ctx, msg);
                break;

            case Commands.stat.run:
                ctx.reply(Functions.getStat(ctx.message));
                break;

            case Commands.myid.run:
                ctx.reply(`Ваш ID в телеграмме:\n${ctx.message.from.id}`);
                break;

            case Commands.levelUp.run:
                ctx.reply(Functions.updateUsers(ctx.message, 'level', msg[1]));
                break;

            case Commands.pointsUp.run:
                ctx.reply(Functions.updateUsers(ctx.message, 'points', msg[1]));
                break;

            case Commands.levelBuy.run:
                ctx.reply(Functions.buyLevel(ctx.message, 100));
                break;

            case Commands.save:
                Functions.saveInfoUsersList();
                break;
        }

    } catch (error) {
        console.log("Произошла ошибка типа:" + error);
        ctx.reply('Произошла ошибка\n/info - список команд');
    }

});

bot.launch()



/* if (thisCommand == Commands.help.run) {
        }
        else if (thisCommand == Commands.go.run) {
        }
        else if (thisCommand == Commands.love) {
        }
        else if (thisCommand == Commands.rand.run) {
        }
        else if (thisCommand == Commands.stat.run) {
        }
        else if (thisCommand == Commands.myid.run) {
        }
        else if (thisCommand == Commands.levelUp.run) {
        }
        else if (thisCommand == Commands.pointsUp.run) {
        }
        else if (thisCommand == Commands.levelBuy.run) {
        }
        else if (thisCommand == Commands.save) {
        }
 */