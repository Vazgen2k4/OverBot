module.exports = {
    // Функция вывода всех комманд
    //===============================================================================================
    helpMessage(obj) {
        let txt = 'Список текущих комманд:';
        for (const key in obj) {
            if(typeof obj[key] == 'object') {
                txt += `\n\n${obj[key].run} ${obj[key].descr}`; 
            }
        }
        return txt;
    },
    // Функция вывода всех подщета гластных букв
    //===============================================================================================
    Go(msg) {
        let Letters = 'аеёиоуыэюяaeiouy'.split('');
        let num = 0;
        let NewStr = [];
    
        msg[1].split('').forEach((item) => {
            NewStr.push(item);
            Letters.forEach(e => {
                if (item.toLowerCase() === e) {
                    NewStr.pop();
                    NewStr.push('[', item, ']');
                    num++;
                }
            });
        });
        return `В вашем предложении ${num} гласных букв(ы):\t\t${NewStr.join('')}`;
    },
    // Функция для моей девушки
    //===============================================================================================
    Love() {
        let stikers = ['❤', '💋', '😍', '😘', '🥰', '😜'];
        return stikers[rand(0, stikers.length - 1)];
    },
    // Функция вывода рандомных чисел
    //===============================================================================================
    CommandRand(ctx, msg) {
        let num1 = '';
        let num2 = '';
        
    },
    // Функция вывода времени запуска в консоль
    //===============================================================================================
    outPutTime() {
        let time = new Date();
        let year = time.getFullYear();
        let monthIndex = time.getMonth();
        let monthArr = ['Январь','Февраль','Март','Апреля','Может','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь' ];
        let month = monthArr[monthIndex];
        let day = time.getDay();
        let hor = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();


        return console.log(`Бот запущен:\nДата запуска: ${day}/${month}/${year} ${hor}:${min}:${sec}`);
    },
}


// Вспомогательные функции
//===================================================================================================
function rand(min = 0, max = 100) {
    return Math.floor((Math.random()*(max + 1 - min)) + min);
}