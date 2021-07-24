require('dotenv').config();
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const Commands = require('./Scripts/commands');
const Functions = require('./Scripts/Function');

console.log(Functions.outPutTime());

ot.start((ctx) => ctx.reply(`
Привет ${ctx.message.from.first_name}, 
\nЯ бот созданный для всяких разных плюшек в тг
Подробнее: /info`
));

bot.help((ctx) => ctx.reply(ctx.reply(Functions.helpMessage(Commands))));

bot.on('text', (ctx) => {
    // console.log(ctx.message);
    let msg = ctx.message.text.split(' ');
    // Отловка ошибок, для избежания краша бота
    let thisCommand = msg[0].toLowerCase();
    // console.log(Commands);
    try {
        if (thisCommand == Commands.help.run) ctx.reply(Functions.helpMessage(Commands));
        else if (thisCommand == Commands.go.run) ctx.reply(Functions.Go(msg));
        else if (thisCommand == Commands.love) ctx.reply(Functions.Love());
        else if (thisCommand == Commands.rand.run) CommandRand(ctx, msg);
        else if (thisCommand == Commands.stat.run) ctx.reply(Functions.getStat(ctx.message)); 
        else if (thisCommand == Commands.myid.run) ctx.reply(`Ваш ID в телеграмме:\n${ctx.message.from.id}`);
        else if (thisCommand == Commands.levelUp.run) ctx.reply(Functions.levelUp(ctx.message, msg[1]));
        else if (thisCommand == Commands.pointsUp.run) ctx.reply(Functions.pointUp(ctx.message, msg[1]));
        else if (thisCommand == Commands.save) Functions.saveInfoUsersList();

        // console.log(ctx.message);
    } catch (error) {
        console.log("Произошла ошибка типа:" + error);
        ctx.reply('Произошла ошибка\n/info - список команд');
    }

});

bot.launch()
/* Functions
===================================================================================== */
function Coins(ctx) {
    try {

        let ArrMoney = process.env.Puples.split('@');
        ArrMoney.forEach((item, i) => { ArrMoney[i] = item.split(',')});
        let PupleId = ctx.message.from.id;
        let PupleName = ctx.message.from.username;
        let AddPuple = true;
        let PupleIndex;

        if (ArrMoney.length != 0) {
            ArrMoney.forEach(item => {
                if (item[0] == PupleName) {
                    AddPuple = false;
                }
            });
        }

        if (AddPuple) {
            let arr = [PupleName, PupleId, rand(50, 369)];
            ArrMoney.push(arr);
        }

        ArrMoney.forEach((item, index) => {
            if (item[0] == PupleName) {
                PupleIndex = index;
            }
        });
        ctx.reply(`${PupleName}\n\nНа вашем счету: ${ArrMoney[PupleIndex][2]}`)
        
        ArrMoney.forEach((item, i) => { ArrMoney[i] = item.join(',')});
        ArrMoney = ArrMoney.join('@');
        process.env.Puples = ArrMoney;
      

    } catch (error) {
        ctx.reply(`У вас непредвиденная ошибка:\n${error}`);
    }
}