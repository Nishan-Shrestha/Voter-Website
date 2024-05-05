
  let basket = JSON.parse(localStorage.getItem("data")) ||[];
var VotingCandiate = document.getElementById('voter-main-container');

let Candidate = () =>{
    votersData.sort((a,b)=> 0.5 - Math.random());
 return (VotingCandiate.innerHTML = votersData.map((x) =>{
    let {id,name,img} =x;
    let search = basket.find((x)=> x.id === id) || [];
    return `  <div class="voterContainer">
    <div class="candidate-1 candidate" id="">
        
        <h1 class="candidate-name">${name}</h1>
        <img src="${img}" alt="">
    </div>
 <button class="vote-now" onclick="increment(${id})" id="vote-now">Vote Now</button>
 <h2 class="hide" id=${id}>${search.item===undefined?0:search.item}</h2>
 </div>`;
 }).join(""));
};
Candidate();

let increment = (id) =>{
    alert("Are you sure you want to vote ");
    let selectedItems = id;

let search = basket.find((x)=> x.id === selectedItems.id);

if(search === undefined){
    basket.push({
        id:selectedItems.id,
        item:1,
    });

}
else{
    search.item +=1;
}
localStorage.setItem("data",JSON.stringify(basket));
update(selectedItems.id);
 window.location.href = "index.html";
// console.log(basket);
};

let update = (id) =>{
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
};


// function voteSure (){
//     alert("Are You sure you want to vote `${name}` " )
// }
