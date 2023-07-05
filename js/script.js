

const API_KEY = 'f39cd624d93c451fbf1668468abc0d11';
const BASE_URL = 'https://newsapi.org/v2/everything?q=';

let userInput;

const $input = $('input[type="text"]');
const $form = $('form');

$('form').on('submit',handleGetData)

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax(BASE_URL + userInput + '&apiKey=' + API_KEY)
    .then((data) => {
        console.log(data.articles[0]);
    });


}
