

const API_KEY = 'f39cd624d93c451fbf1668468abc0d11';
const BASE_URL = 'https://newsapi.org/v2/everything?q=';

let userInput;

const $input = $('input[type="text"]');
const $form = $('form');
const $article = $('#article');
const $title = $('#title');
const $source = $('#source');
const $articletwo = $('#articletwo');
const $titletwo = $('#titletwo');
const $sourcetwo = $('#sourcetwo');
const $articlethree = $('#articlethree');
const $titlethree = $('#titlethree');
const $sourcethree = $('#sourcethree');

$('form').on('submit',handleGetData)

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax(BASE_URL + userInput + ' celebrity ' + ' celebrity news ' + '&apiKey=' + API_KEY)
    .then((data) => {
        let celebDataOne = data.articles[0];
        $article.text(celebDataOne.description)
        $title.text(celebDataOne.title)
        $source.text(celebDataOne.source.name + ':')

        let celebDataTwo = data.articles[1];
        $articletwo.text(celebDataTwo.description)
        $titletwo.text(celebDataTwo.title)
        $sourcetwo.text(celebDataTwo.source.name + ':')

        let celebDataThree = data.articles[2];
        $articlethree.text(celebDataThree.description)
        $titlethree.text(celebDataThree.title)
        $sourcethree.text(celebDataThree.source.name + ':')
    });


}



const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});