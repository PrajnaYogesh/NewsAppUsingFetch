export {getLatestNews};

// const API_KEY =  "pub_51547876bdf2e18cfc7dc5ce01b9cbe93b59d";
async function getLatestNews(){
    //  let response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_51547876bdf2e18cfc7dc5ce01b9cbe93b59d&prioritydomain=top&country=in&language=en');
    let jsonData = await response.json();
return jsonData;
    // console.log(jsonData);
    // console.log(jsonData.results[0].url)

    
    }
    


