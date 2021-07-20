
module.exports = {
    help: {
        run:'/info',
        descr:'Показать все комманды'
    },
    go: {
        run: '/go',
        descr: 'Подщет гласных букв в предложении\nФормат ввода - /go <предложение>'
    },
    money: {
        run:'/coins',
        descr: 'Показать кол-во монет'
    },
    rand: {
        run:'/rand',
        descr:`Генерирует случайное число\nФормат ввода - /rand <min>, <max>\nИли же - /rand <max>`
    },
    myid: {
        run:'/myid',
        descr:`Показывает ва Телеграм ID`,
    },
    love: '/l',
};

