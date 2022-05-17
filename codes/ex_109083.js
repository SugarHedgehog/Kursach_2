(function () {
    'use strict';
    NAinfo.requireApiVersion(0, 2);
    let ves = sluchch(10, 100);
    let pr1, pr2, answ;
    do {
        pr1 = sluchch(4, 20);
        pr2 = sluchch(70, 90);
        answ = (ves * (100 - pr1)) / (100 - pr2);
    } while (!(answ * 100).isZ());
    let pair = sklonlxkand([
        ['абрикос', 'курага'],
        ['виноград', 'изюм'],
        [
            ['финик', 'яблоко', 'груша', 'банан', 'дыня', 'персик',
                'инжир', 'манго', 'папайя', 'хурма', 'ананас', 'кокос',
                'шиповник', 'клюква', 'барбарис', 'клубника', 'вишня'
            ].iz(),
            'сухофрукт'
        ],
    ].iz());
    NAtask.setTask({
        text: 'При сушке ' + pair[0].re + ' получается ' + pair[1].ie + '.' +
            ' Сколько килограммов ' + pair[0].re + ' потребуется для получения'
            + ves + 'килограммов ' + pair[1].re + ', ' +
            'если ' + pair[0].ie + ' содержит ${pr2}\% воды, а ' + pair[1].ie +
            'содержит' + pr1 + '\% воды?',
        answers: answ,
    });
})();
//Обзад  109083