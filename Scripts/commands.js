
module.exports = {
    help: {
        run:'/info',
        descr:'Показать все комманды'
    },
    go: {
        run: '/go',
        descr: 'Подщет гласных букв в предложении\nФормат ввода - /go <предложение>'
    },
    stat: {
        run:'/status',
        descr: 'Показать статистику'
    },
    rand: {
        run:'/rand',
        descr:`Генерирует случайное число\nФормат ввода - /rand <min>, <max>\nИли же - /rand <max>`
    },
    myid: {
        run:'/myid',
        descr:`Показывает ва Телеграм ID`,
    },
    levelUp: {
        run:'/levelup',
        descr:`Возможность обновить уровень (Если есть доступ)`,
    },
    pointsUp: {
        run:'/point',
        descr:`Возможность обновить баллы (Если есть доступ)`,
    },
    levelBuy: {
        run:'/blevel',
        descr:`Возможность купить 1 уровень за 100 баллов`,
    },
    allUsers: {
      run: '/allUsers',
      descr: 'Отметить сразу всех пользователей в чате', 
    },
    save: '/s',
    love: '/l',
};

