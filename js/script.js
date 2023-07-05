

let userInput;

const $input = $('input[type="text"]');
const $form = $('form');

$('form').on('submit',handleGetData)

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    console.log($input.val());
}
