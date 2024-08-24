import { getLatestNews } from "./LatestNews.mjs";
import {getNewsForCategory} from "./category.mjs"

let outerContainer = document.querySelector('.news-container')
let business = document.getElementById("business");
let sports = document.getElementById("sports");
let technology =  document.getElementById("technology")
let entertainment =  document.getElementById("entertainment")
let health = document.getElementById("health")




function displayNews(jsonData){
    outerContainer.innerHTML = '';
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


    // Get all the news on load or refresh
    function getAllNews(){
            getLatestNews().then((data)=>{
                       displayNews(data);
                 })
                  }


// get news based on a category- business
business.addEventListener('click',()=>{
    getNewsForCategory('business').then((data)=>{
        displayNews(data);
  });
});


sports.addEventListener('click',()=>{
    getNewsForCategory('sports').then((data)=>{
        displayNews(data);
  });
});


technology.addEventListener('click',()=>{
    getNewsForCategory('technology').then((data)=>{
        displayNews(data);
  });
});


entertainment.addEventListener('click',()=>{
    getNewsForCategory('entertainment').then((data)=>{
        displayNews(data);
  });
});


health.addEventListener('click',()=>{
    getNewsForCategory('health').then((data)=>{
        displayNews(data);
  });
});

    
    
    getAllNews();



