import parsesData from './parsesData.js';
import fetchCountries from './fetchCountries.js';

//   import { error, defaultModules } from 'node_modules/@pnotify/core';
//   import * as PNotifyMobile from 'node_modules/@pnotify/mobile/dist';
 
//   defaultModules.set(PNotifyMobile, {});
 
//   alert({
//     text: 'Notice me, senpai!'
//   });
import { alert, notice, info, success, error } from '@pnotify/core';


// defaults.closer = false;
// defaults.width = '250px';
// defaults.delay = 2000;

const input = document.getElementById('search');
const resultDiv = document.querySelector('.result');

const errorAlert = () => {
    // console.log(error);
   return error({
        text: "Вы ошиблись! Пожалуйста, попробуйте ещё раз.",
    });
}

input.addEventListener('blur', searchCountry);

function searchCountry(event) {

    resultDiv.innerHTML = '';

    const searchQuery = (event.currentTarget.value).toLowerCase();


    if (!(/[a-z]/.test(searchQuery))) {
        error({
            text: "Введите латинские буквы!",
            });
    return;
    }

    fetchCountries(searchQuery)
    .then(parsesData)
    .catch(errorAlert());
    
}
