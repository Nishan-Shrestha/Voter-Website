let label = document.getElementById('label');
let voteResult = document.getElementById('vote-result');
let voteResultHeading = document.getElementById('voter-result-heading');
let basket = JSON.parse(localStorage.getItem("data")) ||[];
// console.log(basket)

let generateVoterId= ()=> {
   basket.sort((a,b)=> b.item - a.item);
     return voteResult.innerHTML = basket.map((x) => {
    
      let {id,item} = x;
      let search = votersData.find((y) =>y.id === id) || [];
      
      return `
      
      <div id="" class="item-1 items ordered-items">
      <div class="image">
      <img  src="${search.img}" alt="">
      </div>
      <div class="img-desc">
          <h2 class="items-name">${search.name}</h2>
          <h2  id=${id} class="numbers">${item}</h2>
        
      </div>
      </div>
      `;
     }).join("");
    }
  
generateVoterId();