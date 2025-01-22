async function getusers (){
const response= await fetch(`https://jsonplaceholder.typicode.com/users`);
const users = await response.json();
const result = users.map (function(user){
return`
   <div class="card">
                <div class="card-header">
                    <h2>${user.name}</h2>
                    <h3>${user.username}</h3>
                </div>
                <div class="card-content">
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong>${user.phone}</p>
                    <p><strong>Website:</strong> <a href="${user.website}" target="_blank">${user.website}</a></p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p class="geo">(Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng})</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                    <p><em>"${user.company.catchPhrase}"</em></p>
                    <p><strong>Business Strategy:</strong>${user.company.bs}</p>
                </div>
                <div class="card-footer">
                    <a href="mailto: ${user.email}">Contact Me</a>
                </div>
     </div>
`;
}).join ('');

document.querySelector(".row").innerHTML=result

}

getusers();