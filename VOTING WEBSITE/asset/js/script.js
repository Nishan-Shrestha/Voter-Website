
const users = [
    {  username:'user1',password: '1234'},
    {  username:'user2',password: '2424'},
    {  username:'user3',password: '1212'},
];
const admin = [
    { username:'admin',password: '1234'},
    {  username:'admin',password: '1234'},
];
// FUNCTION TO CHECK IF USERNAME AND PASSWORD MATCH
function passwordChecker(username,password){
return users.find(user => user.username === username && user.password === password);
}
function adminPasswordChecker(username,password){
    return admin.find(admin => admin.username=== username && admin.password === password);
}
document.getElementById('form').addEventListener('submit' , (e)=>{
    const username = document.getElementById('username').value;
    const password = document.getElementById('passsword').value;
    e.preventDefault();
    const user = passwordChecker(username,password);
    const admin = adminPasswordChecker(username,password);
    if(user){
        
        window.location.href = "votingPage.html";
    }
  else if(admin){
    window.location.href = "result.html";
  }
    else{
       alert("Please Enter a Valid password")
    }
    
}

);






let votersData = [
    {
        id:"cand-1",
        name:"Nishan Shresth",
        img:"/img/nishan.jpg",
    
    },
      {
        id:"cand-1",
        name:"Subkhsya  Shresth",
        img:"/img/virate.jpg",
    },
    ];
var VotingCandiate = document.getElementById('voter-main-container');

let Candidate = () =>{
 return (VotingCandiate.innerHTML = votersData.map((x) =>{
    return `  <div class="voterContainer">
    <div class="candidate-1 candidate">
        
        <h1 class="candidate-name">Kiran Nagarkoti</h1>
        <img src="/img/nagarkoti.jpg" alt="">
    </div>
 <button class="vote-now">Vote Now</button>
 
 </div>`;
 })
 )
};
Candidate();