// Автор - https://vk.com/sk1tan aka Алексей Рашевский

// Создание переменных, для подписки на событие (Клик мыши на кнопку)
let send = document.querySelector('.calculate');
let sum = document.querySelector('.sum_num');
let show_rates = document.querySelector('.show_rate');
let del_p = document.querySelector('.delete_all');
let select = document.querySelector('select');

// Создаём пустой объект
const rates = {};

// Функция, которая получает актуальный курс добавленных мной валют
async function get_rate() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;

    // Записываем курс каждой валюты в объект
    rates.USD = result.Valute.USD.Value
    rates.EUR = result.Valute.EUR.Value
    rates.BYN = result.Valute.BYN.Value
    rates.KZT = result.Valute.KZT.Value
    rates.UAH = result.Valute.UAH.Value
    rates.JPY = result.Valute.JPY.Value
}

// Создаём элемент вне фунции, что-бы не было ошибок
print_num = document.createElement('p');
print_error = document.createElement('p');

// Функция, которая будет выводить результат
function send_sum() {

    // Удаляем текст, который нам не нужен
    remove_text()

    // Проверка на пустое значение в инпуте и вывод информации про ошибку
    if (sum.value.length <= 0) {
        print_error = document.createElement('p');
        print_error.innerHTML = 'Вы забыли написать число!';
        document.body.append(print_error);
        print_date()
        console.log('Пользователь забыл написать число, ошибка отправлена')

        // Не даём запустить другие функции
        var stop_work = true;
    }

    // Выводим результат конвертации с евро
    if (select.value == 'EUR' && stop_work != true) {
        print_num = document.createElement('p');
        print_num.innerHTML = sum.value + ' RUB = ' + sum.value / rates.EUR + ' ' + select.value;
        document.body.append(print_num);
        print_date()
        console.log('Пользователь получил информацию о ЕВРО')
    }

    // Выводим результат конвертации с долларом
    if (select.value == 'USD' && stop_work != true) {
        print_num = document.createElement('p');
        print_num.innerHTML = sum.value + ' RUB = ' + sum.value / rates.USD + ' ' + select.value;
        document.body.append(print_num);
        print_date()
        console.log('Пользователь получил информацию о ДОЛЛАРЕ')
    }

    // Выводим результат конвертации с белорусским рублём
    if (select.value == 'BYN' && stop_work != true) {
        print_num = document.createElement('p');
        print_num.innerHTML = sum.value + ' RUB = ' + sum.value / rates.BYN + ' ' + select.value;
        document.body.append(print_num);
        print_date()
        console.log('Пользователь получил информацию о БЕЛОРУССКОМУ РУБЛЕ')
    }

    // Выводим результат конвертации с тенге
    if (select.value == 'KZT' && stop_work != true) {
        print_num = document.createElement('p');
        print_num.innerHTML = sum.value + ' RUB = ' + sum.value / rates.KZT + ' ' + select.value;
        document.body.append(print_num);
        print_date()
        console.log('Пользователь получил информацию о ТЕНГЕ')
    }

    // Выводим результат конвертации с иеной
    if (select.value == 'JPY' && stop_work != true) {
        print_num = document.createElement('p');
        print_num.innerHTML = sum.value + ' RUB = ' + sum.value / rates.JPY + ' ' + select.value;
        document.body.append(print_num);
        print_date()
        console.log('Пользователь получил информацию о ИЕНЕ')
    }

    // Выводим результат конвертации с гривной
    if (select.value == 'UAH' && stop_work != true) {
        print_num = document.createElement('p');
        print_num.innerHTML = sum.value + ' RUB = ' + sum.value / rates.UAH + ' ' + select.value;
        document.body.append(print_num);
        print_date()
        console.log('Пользователь получил информацию о ГРИВНЕ')
    }

}

// Создаём элементы вне фунции, что-бы не было ошибок
rate_eur = document.createElement('p');
rate_usd = document.createElement('p');
rate_byn = document.createElement('p');
rate_kzt = document.createElement('p');
rate_uah = document.createElement('p');
rate_jpy = document.createElement('p');
rate_info = document.createElement('p');

// Сама функция, которая при нажатии на кнопку выводит актуальный курс валют
function show() {

    // Удаляем текст, который нам не нужен
    remove_text()

    // Выводим курс евро
    rate_eur = document.createElement('p');
    rate_eur.innerHTML = '1 EUR = ' + rates.EUR.toFixed(2) + ' RUB';
    document.body.append(rate_eur);
    print_date()
    console.log('Пользователь получил курс ЕВРО')

    // Выводим курс доллара
    rate_usd = document.createElement('p');
    rate_usd.innerHTML = '1 USD = ' + rates.USD.toFixed(2) + ' RUB';
    document.body.append(rate_usd);
    print_date()
    console.log('Пользователь получил курс ДОЛЛАРА')

    // Выводим курс белорусского рубля
    rate_byn = document.createElement('p');
    rate_byn.innerHTML = '1 BYN = ' + rates.BYN.toFixed(2) + ' RUB';
    document.body.append(rate_byn);
    print_date()
    console.log('Пользователь получил курс БЕЛОРУССКОГО РУБЛЯ')

    // Выводим курс тенге
    rate_kzt = document.createElement('p');
    rate_kzt.innerHTML = '1 KZT = ' + rates.KZT.toFixed(2) + ' RUB';
    document.body.append(rate_kzt);
    print_date()
    console.log('Пользователь получил курс ТЕНГЕ')

    // Выводим курс гривны
    rate_uah = document.createElement('p');
    rate_uah.innerHTML = '1 UAH = ' + rates.UAH.toFixed(2) + ' RUB';
    document.body.append(rate_uah);
    print_date()
    console.log('Пользователь получил курс ГРИВНЫ')

    // Выводим курс иены
    rate_jpy = document.createElement('p');
    rate_jpy.innerHTML = '1 JPY = ' + rates.JPY.toFixed(2) + ' RUB';
    document.body.append(rate_jpy);
    print_date()
    console.log('Пользователь получил курс ИЕНЫ')

    // Получаем текущую дату и текуще время
    const today = new Date();
    const now = today.toLocaleString();

    // Выводим информацию о последнем обновлении курса
    rate_info = document.createElement('p');
    rate_info.innerHTML = 'Последнее обновление данных: ' + now;
    document.body.append(rate_info);
}

// Функция, которая удаляет написанное
function remove_text() {
    rate_eur.hidden = true;
    rate_usd.hidden = true;
    rate_byn.hidden = true;
    rate_kzt.hidden = true;
    rate_uah.hidden = true;
    rate_jpy.hidden = true;
    print_num.hidden = true;
    print_error.hidden = true;
    rate_info.hidden = true;
    print_date()
    console.log('Все надписи удалены!')
}

// Функция, которая получает текущую дату и время, после выводит данные в консоль
function print_date() {
    const today = new Date();
    const now = today.toLocaleString();
    console.log(now);
}

// Подписываемся на события (Клик мыши по кнопке)
send.addEventListener('click', send_sum);
show_rates.addEventListener('click', show);
del_p.addEventListener('click', remove_text);

// Вызываем функцию, которая даёт нам курс валют
get_rate();
