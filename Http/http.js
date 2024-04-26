// window.onload = function(){

//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(res => {
//         const axiosList = document.getElementById("axios-data");
//         res.data.forEach(item => {
//             const li = document.createElement("li");
//             li.textContent = `ID: ${item.id} - title: ${item.title}`;
//             axiosList.appendChild(li);
//         })
//     })
//     .catch (err => console.log("Error catching data using Axios"), err)
// }


window.onload = function(){
    axios.get("https://restcountries.com/v3.1/name/name")
   .then(res => {(res.data[0]);
    const val = res.data[0];
    console.log(val)
    let countryList = document.getElementById("country-list");
    let country = document.getElementById("country");
    let capital = document.getElementById("capital");
    let currency = document.getElementById("currency");
    let language = document.getElementById("language");

    country.textContent = val.name.common;
    capital.textContent = val.capital;
    currency.textContent = val.currencies.SRD.name;
    language.textContent = val.languages.nld

    countryList.style.width = "100%"
    countryList.style.borderWidth = "collapse"
    countryList.style.textAlign = "center"

    let rows = document.querySelectorAll("#country-list tr")
    rows.forEach(function(row) {
        row.style.width = "100%"
        row.style.borderWidth = "collapse"
        row.style.textAlign = "center"
        row.style.backgroundColor = "lightblue"
    })
})
.catch (err => {
    alert("Error fetching code using Axios")
err})
    



}
