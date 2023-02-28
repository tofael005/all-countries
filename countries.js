// API section  start 
const loadCountries = () => {
    const URL = 'https://restcountries.com/v3.1/all';
    fetch(URL)
        .then(response => response.json())
        .then(data => showCountries(data.slice(0, 9)))
};

const showCountries = (country) => {
    const container = document.getElementById('country-section')
        container.innerHTML = " ";
        country.forEach((countries) => {
        // console.log(countries.cca2);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-full h-96 bg-base-100 shadow-2xl">
  <figure class="px-10 pt-10">
    <img src="${countries.flags.png}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${countries.name.common}</h2>
    <p>Population: ${countries.population}</p>
    <div class="card-actions">
      <button onClick="showDetails('${countries.cca2}')" class="btn btn-primary">Details: </button>
    </div>
  </div>
</div>
        `;
        container.appendChild(div)   
    });
};

// const showDetails = (id) => {
//     const URL = `https://restcountries.com/v3.1/alpha/${id}`
//         fetch(URL)
//             .then(response => response.json())
//             .then(data => console.log(data))
//     // console.log(URL)
// }
// showDetails();

const showAllCountries = () => {
    const URL = 'https://restcountries.com/v3.1/all';
    fetch(URL)
        .then(response => response.json())
        .then(data => showCountries(data))
}

// Function call this 
loadCountries();