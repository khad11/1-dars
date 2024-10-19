// import clubs from "./data.js";

// const allClubs = document.querySelector("ul");
// clubs.forEach((club) => {
//   allClubs.innerHTML += `
//     <li class="all-clubs">
//         <div class="club-title-logo">
//           <img src=${club.image} width="40">
//         </div>
//         <h3 class="team">  ${club.name}</h3>
//         <p class="text"> ${club.history}</p>
//         <ul class="all-trophies">
//             ${Object.entries(club.trophies).map((trophe, count) => {
//               return `<li class="trophies">
//               ${trophe}-${count}
//                 </li>`;
//             })}
//         </ul>

//     </li>

//    `;
// });
import clubs from "./data.js";

const allClubs = document.querySelector("ul");

// Tasodifiy ranglarni yaratadigan funksiya
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}
document.body.style.backgroundColor = getRandomColor();

clubs.forEach((club) => {
  allClubs.innerHTML += `
    <li class="all-clubs">
        <div class="club-title-logo">
          <img src=${club.image} width="40">
        </div>
        <h3 class="team">${club.name}</h3> 
        <p class="text" style="color: ${getRandomColor()};">${club.history}</p>
        <ul class="all-trophies"> 
            ${Object.entries(club.trophies).map((trophe, count) => {
              return `<li class="trophies"> 
              ${trophe}-${count}
                </li>`;
            })}
        </ul>
    </li>
  `;
});
