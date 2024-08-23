const API_KEY =  "pub_51547876bdf2e18cfc7dc5ce01b9cbe93b59d";
let outerContainer = document.querySelector('.news-container')




async function getLatestNews(){
     let response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_51547876bdf2e18cfc7dc5ce01b9cbe93b59d&country=in&language=en');
    let jsonData = await response.json();

    console.log(jsonData);
    console.log(jsonData.results[0].url)

    jsonData.results.forEach((item)=>{

let oneContainer = document.createElement('div')
oneContainer.classList.add('box-style')

let newsImage = document.createElement('img');
newsImage.classList.add('news-img')
newsImage.setAttribute('src',`${item.image_url}`);

let title = document.createElement('p');
title.classList.add('title-style')
title.textContent = `${item.title}`

let bottomDiv = document.createElement('div');
bottomDiv.classList.add('style-bottom')
let left = document.createElement('p');
left.textContent=`${item.source_name}`;

let right = document.createElement('a');
right.textContent = "see more"
right.setAttribute('href',`${item.source_url}`);

bottomDiv.appendChild(left)
bottomDiv.appendChild(right)

oneContainer.appendChild(newsImage)
oneContainer.appendChild(title);
oneContainer.appendChild(bottomDiv);
outerContainer.appendChild(oneContainer);


    })
    
    }
    
    
    
    
    getLatestNews();



