
/* ---------------------------------------- LOAD JSON -------- */

// function load(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', '../cooding/scripts/load.json', true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const loadDesciption = JSON.parse(this.responseText);
//       let output = '';
//       loadDesciption.forEach((loadDesciption) => {
//         output += `
//           <div class="column">
//         <div class="picture">
//           <a href="#"><img src=${loadDesciption.picture_url} alt="prva"></a>
//         </div>
//         <div class="textandheart overflow ">
//           <p>${loadDesciption.picture_description}</p>
//           <a class="heart" onclick="addCol()">
//             <svg height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
//               xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 25.9"
//               style="enable-background:new 0 0 30 25.9;" xml:space="preserve">

//               <path id="XMLID_1_" class="heart0"
//                 d="M15,4.3c0,0,2.5-3.7,6.3-3.9c4.8-0.2,8,3.2,8.3,7c0.2,3.8-3.4,7.6-5.8,9.8
// 	C18.9,22,16.7,23.5,15,25c-1.7-1.6-3.9-3-8.8-7.7c-2.3-2.2-6-6-5.8-9.8c0.2-3.9,3.4-7.3,8.2-7.1C12.5,0.7,15,4.3,15,4.3z" />
//             </svg>
//           </a>
//           <div class="tooltip">
//             <span class="tooltiptext">Add to collection</span>
//           </div>
//         </div>
//         <div class="starandprice">
//           <div class="star-rate tooltip">
//             <span class="tooltiptext">Rate item</span>
//             <span class="star"></span>
//             <span class="star"></span>
//             <span class="star"></span>
//             <span class="star"></span>
//             <span class="star"></span>
//           </div>
//           <div class="price">
//             <h4>${loadDesciption.price} RSD</h4>
//           </div>
//         </div>
//       </div>`
//       });
//       document.getElementById('row').innerHTML = output;
//     }
//   }
//   xhr.send();
// }
// load();

// /* ---------------------------------------- GIVE HEART COLLECTION -------- */

function addCol() {

  let click = document.querySelector('.heart');
  if (click.style.fill === 'none' || click.style.fill === '') {
    console.log('Added to Collection');
    return click.style.fill = 'red';
  }
  console.log('Removed from Collection')
  click.style.fill = 'none';
}

