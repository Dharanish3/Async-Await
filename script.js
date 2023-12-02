// Promise and Fech
/* const url = "https://restcountries.com/v3.1/all";
const fun = fetch(url);

fun
  .then((data) => data.json())
  .then((datas) => {
    console.log(datas);
  })
  .catch((err) => console.log(err)); */



//   Async and Await
/* const foo = async () =>{
    try {
    const data = await fetch("https://restcountries.com/v3.1/all")
    const dat = await data.json()
    console.log(dat)
        
    } catch (error) {
        console.log(error)
    }
}
foo() */


const ele = document.getElementById("input")
const button = document.getElementById('get')
const profile = document.getElementById("profile")
const repoInfo = document.getElementById("rep");
button.addEventListener('click' ,async ()=> {
    const input = ele.value
    // console.log(input)
    // Fetch Method
    const res = await fetch (`https://api.github.com/users/${input}`)
    const data = await res.json();
    // console.log(data)

    getProfile(data)
    getRepo(input)
    
})


function getProfile(data){
    console.log(data)
    profile.innerHTML = `<div  class="card" style="width: 18rem;">
    <div class="card-img">
    <img src="${data.avatar_url}" class="card-img-top" alt="${data.name}">
    </div>
    <div class="card-body">
      <h5  class="card-title">${data.name}</h5>
      <p class="card-subHeading">${data.bio}</p>
      <p><i class="fa-solid fa-user-group"></i> ${data.followers} Followers ${data.following} Following </p>
      <p><i class="fa-solid fa-location-dot"></i> ${data.location}</p>
      <button>
   <a href=${data.html_url} target="_blank">Visit Profile</a>
   </button>
    </div>
    
   
  </div>`
}


async function getRepo(input) {
    const res = await fetch(`https://api.github.com/users/${input}/repos`);
    const projects = await res.json();
    for (let i = 0; i < projects.length; i++) {
      repoInfo.innerHTML += `<div class="card">
          <div class="card-body">
          <div class="card-title">${projects[i].name}</div>
     <div class="card-subHeading">${projects[i].language}</div>
     <div class="card-text">
  <button>
     <a href=${projects[i].html_url} target="_blank">Visit Projects</a>
     </button>
     </div>
     </div>
     </div>
     `;
    }
  }


