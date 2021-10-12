import cardTemplate from '../templates/country-card.hbs';


 
//   alert({
//     text: 'Notice me, senpai!'
//   });
import { alert, notice, info, success, error } from '@pnotify/core';

const resultDiv = document.querySelector('.result');
console.log(cardTemplate);

defaults.closer = false;
defaults.width = '250px';
defaults.delay = 2000;


export default function parsesData(data) {
    const amount = data.length;
    console.log('1000');
    if (amount > 10) {
        console.log(amount);
           return error({
            text: "Найдено слишком много соответсвий. Пожалуйста, уточните запрос",
            });
    } else if (amount > 1 && amount < 10) {
        parsesItems(data);
    } else {
        parsesCard(data);
    }    
}

function parsesItems(countries) {

    const items = countries.map((country) => {

        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.textContent = country.name;
        ul.append(li);
        return li;
    });
    
    resultDiv.append(...items);
}

function parsesCard(countries) {
 
    const coutyryItems = countries.map(cardTemplate).join(' ');

    resultDiv.insertAdjacentHTML('beforeend', coutyryItems);
    
}
