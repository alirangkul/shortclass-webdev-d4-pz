const countries = ['Indonesia', 'Malaysia', 'Singapura', 'Brunei', 'Filipina', 'Kamboja', 'Amerika Serikat', 'Inggris', 'Timor Leste'];

function findCountry(query) {
    const foundCountry = countries.find(country => country.toLowerCase().includes(query.toLowerCase()));
    return foundCountry ? 'Ada' : 'Tidak Ada';
}

console.log(findCountry('Indonesia')); // Output: Ada
console.log(findCountry('Indo')); // Output: Ada
console.log(findCountry('timor')); // Output: Ada
console.log(findCountry('Japan')); // Output: Tidak Ada
