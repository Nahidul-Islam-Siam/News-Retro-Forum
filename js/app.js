const loadCategory =async (searchText) =>{
const respons = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
const data =await respons.json()
const news = document.getElementById('all-posts-container')
news.textContent =''
// console.log(data.posts);
// delete item before search

setTimeout(()=>{

    data.posts.forEach(items => {
        const div = document.createElement('div')
        const getColor = document.getElementById('avatar-color')
      

        div.innerHTML = `
        <div id="news-task" class="">
                     <div class="flex flex-col gap-8 lg:flex-row bg-[#797dfc1a] rounded-[24px]">
                         <div class="flex flex-col lg:flex-row gap-6 p-6">
                            
                             <div class=" relative ">
                             <div class="indicator">
                             <span class="indicator-item  badge ${items.isActive? 'bg-green-500' : 'bg-red-500'} badge-secondary"></span> 
                             <div class="grid w-auto h-auto  place-items-center rounded-full">
                             
                             <img src="${items.image}" alt=""  class="rounded-ful w-full h-[72px]"/>
                             
                             </div>
                           </div>
                               </div>
                               
     
     
     
                               <div>
     
                                 <div class="flex  gap-6 mb-2">
                                     <p>${items.category}</p>
                                     <p>Author : ${items.author.name}</p>
                                 </div>
                                 <h5 class="text-[20px] text-left font-mulish font-bold">${items.title}</h5>
                                 <p class="py-2 text-[#12132d99] text-left">${items?.description || 'No Description Found'}</p>
     
     
                                 <hr class="my-5 border-dotted bg-[#12132d40] ">
     
     
                                 <div class="flex justify-between">
                                     <div class="flex gap-3 lg:gap-5">
                                         <div class="flex justify-center items-center gap-1 lg:gap-3">
                                             <img src="images/msg.png" alt="">
                                             <p>${items.comment_count}</p>
                                         </div>
                                         <div class="flex justify-center items-center gap-1 lg:gap-3">
                                             <img src="images/eye.png" alt="">
                                             <p>${items.view_count}</p>
                                         </div>
                                         <div class="flex justify-center items-center  lg:gap-3">
                                             <img src="images/clock.png" alt="">
                                             <p>${items.posted_time}</p>
                                         </div>
                                     </div>
         
                                     <button onclick="clickMsg('${items.title.replace("'"," ")}',${items.view_count})" class="btn btn-circle" type="button">
                                         <img src="images/inbox.png" alt="">
                                     </button>
                                 </div>
     
                               </div>    
                         </div>
                     </div>
                   </div>
        `
        news.appendChild(div)
        
     },);
    
  
     spinner1(false)
},2000)
// hide loading spinner

}

  let count = 1
const divCard = document.getElementById('rightDiv')
const clickMsg =(title,view)=>{
   const rightDivCard = document.createElement('div')
    rightDivCard.innerHTML=`
    <div class="bg-white flex p-4 rounded-2xl justify-between my-4">
                    <div>     
                        <h5 class="text-[#12132D] font-medium font-mulish">${title}</h5>
                    </div>
                    <div class="flex justify-center items-center gap-1">
                        <img src="images/eye.png" alt="">
                        <p>${view}</p>
                    </div>
                </div>
    `
    divCard.appendChild(rightDivCard)

    const countNum = document.getElementById('counNum')
    countNum.innerText = count
    count++
 
    }


const loadNews = async () =>{
    const  respons = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await respons.json()
    const postnews = document.getElementById('card-container')

data.forEach(items =>{
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card bg-base-100 shadow-xl">
        <div class="box-border w-auto h-auto text-left">
            <div>
              <div class="w-auto lg:w-auto h-auto bg-[#12132D0d] m-6 mt-2">
              <img  src="${items.cover_image}" alt="" srcset="">
              </div>
              <div class="m-4 gap-8">
                  <div class="flex flex-row lg:flex-rows-3 gap-2 mb-3">
      <img class="w-[24px]" src="images/cal.png" alt="" srcset="">
      <h1 class="text-base text-[#12132D99]">${items?.author?.posted_date || 'No publish date'}</h1>
                  </div>
                  <h1 class="text-lg font-extrabold mb-3">${items.title}</h1>
                  <p class="text-[#12132D99] mb-3">${items.description}</p>
                      <div class="flex flex-row gap-3 pt-3">
                          <img class="w-[44px] rounded-full" src="${items.profile_image}" alt="" srcset="">
                          <div class="flex flex-col">
                              <h1 class="text-base font-bold ">${items.author.name}</h1>
                              <p class="text-sm font-normal">${items?.author?.designation || 'Unknown'}</p>
                          </div>
                      </div>
              </div>
            </div>
            </div>
      </div>
    `
    postnews.appendChild(div)
})
}



const handleSearch = () =>{
    spinner1(true)
const searchField = document.getElementById('search-box')
const searchText = searchField.value

loadCategory(searchText)


}







const spinner1 = (isLoading)=>{
    const loadingSpinner = document.getElementById('loading-spinner') 
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }else{
        loadingSpinner.classList.add('hidden')
    }
}
loadNews()
loadCategory()
