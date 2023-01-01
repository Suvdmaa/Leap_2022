// let userProfileData = [];

// async function callUserProfile(){
//     const userProfileURL = await fetch(`https://randomuser.me/api`);
//     const fetchedJSON = await userProfileURL.json();
//     userProfileData = fetchedJSON.data;
//     console.log(userProfileData)

//     const container = document.getElementById('profile-container')

//     container.innerHTML = '';
//     userProfileData.map((element) => {
//         container.innerHTML += getProfiles(element)
//     })

// }
// callUserProfile()

// function getProfiles(data){
//     return `
//     <div id="first-part">
//       <div id="img">
//        <img id="image-id" src=${data.result.picture.large}>
//       </div>
//       <div id="profile-text"></div>
//     </div>
//     <div id="second-part">
//       <div id="text"></div>
//       <div id="amount-spend"></div>
//     </div>`
// }

const userProfileURL = `https://randomuser.me/api`;
fetch(userProfileURL)
.then(result => result.json())
.then(data => {
    console.log(data.results[0].picture.large)
    const img = document.getElementById('image')
    img.src = data.results[0].picture.large;

    const profileName = document.getElementById('name');
    profileName.innerHTML = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;

    document.getElementById('email').innerHTML = data.results[0].email;

    document.getElementById('phone').innerHTML = data.results[0].phone;





    

    



})