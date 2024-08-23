import { getLatestNews } from "./LatestNews.mjs";


let outerContainer = document.querySelector('.news-container')


function displayNews(jsonData){
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
    
    function getAllNews(){
            getLatestNews().then((data)=>{
                       displayNews(data);
                 })
  
    }



    
    
    getAllNews();



