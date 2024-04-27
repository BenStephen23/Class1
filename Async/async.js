//my logic
// async function fetchData (){
//     try {
//         const response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data = await response.json()
//         console.log(data);
//         const dataDisplay = document.getElementById("dataDisplay")
//         dataDisplay.innerHTML = `<h1> <strong>body:</strong> ${data.body}
//         <br> <strong>title:</strong> ${data.title}`
//     }catch(err) {
//         throw new Error ("Failed to fetch data")
//     }



    
// } 
// const button = document.getElementById("fetchButton")
// button.addEventListener("click", fetchData)





// Mr. Dan's
async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await res.json()
        return data
    }catch(err){
        throw new Error("Failed to fetch data")
    }
}

//Function to display data
function displayData(data){
    const dataDisplay = document.getElementById("dataDisplay")
    dataDisplay.innerHTML = `<h1> Fetched Data</h1>
    <p> <strong>body: <strong>${data.body} </p><br>
    <p> <strong>title: <strong>${data.title} </p><br>`
    
}

// function to catch error 
function catchError(err){
    console.error(Error, err.message)
}

// async fucntion to initiate all 
async function mainLoad(){
    try {
        console.log("fetching data");
        const data = await fetchData()
        displayData(data)
        console.log("Data fetched successfully");
    }catch (err){
        catchError(err)
    }

}
const button = document.getElementById("fetchButton")
button.addEventListener("click", mainLoad)