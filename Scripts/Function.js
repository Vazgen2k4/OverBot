const { levelUp } = require('./commands');
let Users = require('./Users');
let UsersList = JSON.parse(process.env.Puples);
let AdminsID = [389495959];

module.exports = {
    // Функция вывода всех комманд
    //===============================================================================================
    helpMessage(obj) {
        let txt = 'Список текущих комманд:';
        for (const key in obj) {
            if (typeof obj[key] == 'object') {
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
        let monthArr = ['Январь', 'Февраль', 'Март', 'Апреля', 'Может', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        let month = monthArr[monthIndex];
        let day = time.getDay();
        let hor = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();


        return `=============================================================================\nБот запущен:\nДата запуска: ${day}/${month}/${year} ${hor}:${min}:${sec}`;
    },
    // Функция для показа статистики чел-ка
    //===============================================================================================
    getStat(UserInfo) {
        let message = "Протокол пиздыкнулся";
        let index = -1;
        let name = UserInfo.from.username;
        let id = UserInfo.from.id;

        UsersList.forEach((item, i) => {
            if (item.id === id) {
                index = i;
            }
        });

        if (UsersList.length === 0 || index === -1) {
            addUsers({ name, id });
            index = UsersList.length - 1;
        }

        message = `Профиль: ${UsersList[index].name}\n\nСтатус: ${UsersList[index].info.status}\nУровень: ${UsersList[index].info.level}\nКоличество баллов: ${UsersList[index].info.points}`;
        return message;
    }, 
    // Функция для покупки уровня
    //==============================================================================================
    buyLevel(msg, price = 100) {
        let id = msg.from.id;
        let name = msg.from.username;
        let suc = false;
        let answer = '';

        UsersList.forEach((item) => {
            if (item.id === id && item.info.points >= price) {
                item.info.points -= price;
                item.info.level++;
                suc = true;
            } 
        });

        answer = suc ? `${name}: Успешно преобрел 1 уровень за 100 Баллов`: `${name}: Проверьте свой баланс /status и повторите попытку`;

        return answer;
    },
    // Функция для обновления параметров пользователя
    //==============================================================================================
    updateUsers(msg, UpdateTo, newNum = 1) {
        if (msg.reply_to_message) {
            let id = msg.from.id;
            let Update = false;
            AdminsID.forEach((item) => Update = item === id ? true : Update);

            if (Update) {
                let idForUdate = msg.reply_to_message.from.id;
                let userName = msg.reply_to_message.from.username;
                let isFound = false;

                UsersList.forEach((item, index) => {
                    if (item.id === idForUdate) {
                        isFound = true;
                        UsersList[index].info[UpdateTo] += +newNum;
                    }
                })

                if (!isFound) {
                    addUsers({ name: userName, id: idForUdate });
                    UsersList[UsersList.length-1].info[UpdateTo] += +newNum;
                };

                return `Профиль ползователя: ${userName} обновлен\n/status - чтобы посмотреть информацию`;
            } else {
                return `Увас нет прав доступа для данной команды`;
            }
        }

    },
    // Функция для Вывода в консоль списка пользователей в json
    //===============================================================================================
    saveInfoUsersList() {
        console.log(JSON.stringify(UsersList));
    },
}
// Вспомогательные функции
//===================================================================================================
function rand(min = 0, max = 100) {
    return ~~((Math.random() * (max + 1 - min)) + min);
}

// Функция для Добавления пользователя
//==============================================================================================
function addUsers({ name, id, level = 1, status = "Beginer", points = 0 }) {
    let newUser = new Users({
        name,
        id,
        level,
        status,
        points
    });
    UsersList.push(newUser);
}
// Функция для обновления статуса
//==============================================================================================
function addUsers(index) {
    let level = UsersList[index].info.level;
    let StatusList = [
        'Beginer', 'Elementary', 'Pre-Intermediate', 
        'Intermediate', 'Upper-Intermediate', 'Advanced',
        'Proficiency'
    ];

    UsersList[index].info.status = StatusList[Math.round(level/10)];
}

