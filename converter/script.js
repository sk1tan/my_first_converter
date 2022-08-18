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
}

// Создаём элемент до фунции, что-бы не было ошибок
print_num = document.createElement('p');

// Функция, которая будет выводить результат
function send_sum() {

    // Выводим результат конвертации с евро
    if (select.value == 'EUR') {
        print_num = document.createElement('p');
        print_num.innerHTML = sum.value + ' RUB = ' + sum.value / rates.EUR + ' ' + select.value;
        document.body.append(print_num);

        // Показываем, что мы использовали конвертацию с евро
        let eur_yes = 1
    }

    // Выводим результат конвертации с долларом
    if (select.value == 'USD') {
        print_num = document.createElement('p');
        print_num.innerHTML = sum.value + ' RUB = ' + sum.value / rates.USD + ' ' + select.value;
        document.body.append(print_num);

        // Показываем, что мы использовали конвертацию с евро
        let usd_yes = 1
    }

    // Выводим результат конвертации с белорусским рублём
    if (select.value == 'BYN') {
        print_num = document.createElement('p');
        print_num.innerHTML = sum.value + ' RUB = ' + sum.value / rates.BYN + ' ' + select.value;
        document.body.append(print_num);

        // Показываем, что мы использовали конвертацию с евро
        let byn_yes = 1
    }
}

// Создаём элементы до фунции, что-бы не было ошибок
rate_eur = document.createElement('p');
rate_usd = document.createElement('p');
rate_byn = document.createElement('p');

// Сама функция, которая при нажатии на кнопку выводит актуальный курс валют
function show() {

    // Выводим курс евро
    rate_eur = document.createElement('p');
    rate_eur.innerHTML = '1 EUR = ' + rates.EUR.toFixed(2) + ' RUB';
    document.body.append(rate_eur);

    // Выводим курс доллара
    rate_usd = document.createElement('p');
    rate_usd.innerHTML = '1 USD = ' + rates.USD.toFixed(2) + ' RUB';
    document.body.append(rate_usd);

    // Выводим курс белорусского рубля
    rate_byn = document.createElement('p');
    rate_byn.innerHTML = '1 BYN = ' + rates.BYN.toFixed(2) + ' RUB';
    document.body.append(rate_byn);

    // Удаляем подписку на событие (Клик мыши по кнопке), что-бы пользователь не мог бесконечно нажимать не кнопку
    show_rates.removeEventListener('click', show)

    // Показываем, что мы использовали кнопку, которая показывает курс валют
    let num_yes = 1
}

// Функция, которая проверяет была ли использована функция, и если она была использована, то удаляет написанное
function remove_text() {

    // Если мы использовани конвертацию с евро, то удаляем текст с евро со страницы
    if (eur_yes = 1) {
        rate_eur.hidden = true;
    }

    // Если мы использовани конвертацию с долларом, то удаляем текст с долларом со страницы
    if (usd_yes = 1) {
        rate_usd.hidden = true;
    }

    // Если мы использовани конвертацию с белорусским рублём, то удаляем текст с белорусским рублём со страницы
    if (byn_yes = 1) {
        rate_byn.hidden = true;
    }

    // Если мы использовани функцию, которая показывает курс, то удаляем текст с курсом со страницы
    if (num_yes = 1) {
        print_num.hidden = true;
    }
}

// Подписываемся на события (Клик мыши по кнопке)
send.addEventListener('click', send_sum);
show_rates.addEventListener('click', show);
del_p.addEventListener('click', remove_text);

// Вызываем функцию, которая даёт нам курс валют
get_rate();