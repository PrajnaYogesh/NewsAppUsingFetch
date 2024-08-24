

async function getNewsForSearch(info) {
    let response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_51547876bdf2e18cfc7dc5ce01b9cbe93b59d&language=en&q=${info}`)
let jsonData = await response.json();
return jsonData;
    
}

export {getNewsForSearch}