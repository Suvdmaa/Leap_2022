let userProfileURL = [];
const container = document.querySelector('#profile-container')

async function callProfile(){
    const fetchedData = await fetch('https://randomuser.me/api')
    const fetchedJSON = await fetchedData.json();
    userProfileURL = fetchedJSON.results;

    console.log(userProfileURL)
    container.innerHTML = "";
    userProfileURL.map((element) =>{
        container.innerHTML += getProfile(element)
    })
}

callProfile()

function getProfile(data){
    return `
    <div class="inside-container">
      <div id="first-part">
        <img id="image" src=${data.picture.large} >
        <div id="profile-text">
           <p id="name">${data.name.title} ${data.name.first} ${data.name.last}</p>
           <div class="contacts">
              <p id="email">${data.email}</p>
              <p id="phone">+ ${data.phone}</p>
           </div>
        </div>
      </div>
      <div id="second-part">
         <p> Gender : ${data.gender}<p>
         <p> Birth Date: ${data.dob.date.slice(0, 10)}<p>
         <p> Location: ${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.country} <p>
         <p>TimeZone: ${data.location.timezone.offset}  ${data.location.timezone.description}</p>
         <p class="url-js"><a href="./js/main.js">JS Page</a></p>
      </div>
    </div>  `
}