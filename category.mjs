

async function getNewsForCategory(categoryValue){
let response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_51547876bdf2e18cfc7dc5ce01b9cbe93b59d&prioritydomain=top&language=en&category=${categoryValue}`)
let jsonData = await response.json();
return jsonData;

}

export {getNewsForCategory};