const URL = 'https://restcountries.com/v2/name/';


export default function fetchCountries(searchQuery) {

    //возвращает промис с массивом стран, результат запроса к API

    return fetch(URL + searchQuery)
        .then((response) => {
            return response.json();
        });
}
