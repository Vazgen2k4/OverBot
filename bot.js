require('dotenv').config();
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const Commands = require('./Scripts/commands');
const Functions = require('./Scripts/Function');
const botName = '@OverB0t_bot';

console.log(Functions.outPutTime());

ot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name},\n\nЯ бот созданный для всяких разных плюшек в тг\nПодробнее: /info`));

bot.help((ctx) => ctx.reply(ctx.reply(Functions.helpMessage(Commands))));

bot.on('text', (ctx) => {
    let msg = ctx.message.text.split(' ');
    let thisCommand = msg[0].toLowerCase();

    try {
        
        switch (thisCommand) {
            case Commands.help.run:
            case Commands.help.run + botName:
                ctx.reply(Functions.helpMessage(Commands));
                break;

            case Commands.go.run:
            case Commands.go.run + botName:
                ctx.reply(Functions.Go(msg));
                break;

            case Commands.love:
            case Commands.love + botName:
                ctx.reply(Functions.Love());
                break;

            case Commands.rand.run:
            case Commands.rand.run + botName:
                CommandRand(ctx, msg);
                break;

            case Commands.stat.run:
            case Commands.stat.run + botName:
                ctx.reply(Functions.getStat(ctx.message));
                break;

            case Commands.myid.run:
            case Commands.myid.run + botName:
                ctx.reply(`Ваш ID в телеграмме:\n${ctx.message.from.id}`);
                break;

            case Commands.levelUp.run:
            case Commands.levelUp.run + botName:
                ctx.reply(Functions.updateUsers(ctx.message, 'level', msg[1]));
                break;

            case Commands.pointsUp.run:
            case Commands.pointsUp.run + botName:
                ctx.reply(Functions.updateUsers(ctx.message, 'points', msg[1]));
                break;

            case Commands.levelBuy.run:
            case Commands.levelBuy.run + botName:
                ctx.reply(Functions.buyLevel(ctx.message, 100));
                break;

            case Commands.save:
            case Commands.save + botName:
                Functions.saveInfoUsersList();
                break;
        }

        console.log(thisCommand + botName);

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