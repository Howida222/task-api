//First  
function getApi(){
var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange = function(){
if(this.readyState == 4 && this.status == 200){
document.getElementById('demo').innerHTML = this.responseText;
}
 }
 xhttp.open("GET",'https://jsonplaceholder.typicode.com/photos',true);
 xhttp.send();
}



// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(function (item){
//  return item.json();
// })
// .then (function (element){
// console.log(element);
// document.querySelector(".test img").src = element[0].url;
// document.querySelector(".test h2").innerHTML = element[0].title;
// document.querySelector(".test h5").innerHTML = element[0].id;
// })



// (async function getApi() {
//  var item = await fetch('https://jsonplaceholder.typicode.com/photos');
//  var element = await item.json();
//  document .querySelector(".test img").src = element[0].url;
//  document.querySelector(".test h2").innerHTML = element[0].title;
//  document.querySelector(".test h5").innerHTML = element[0].id;

// })();




//fourth way

// (async function getApi(){
//  var item = await fetch('https://jsonplaceholder.typicode.com/photos');
//  var element = await item.json();
// var mytext = "";
//  for ( var i = 0 ; i < element.length ; i++){
// var cartoona = `
// <div class ="col-md-4 text-center mb-4">
// <img src = "${element[i].url}" class="img-fluid">
// <h2 "${element[i].title}"></h2>
// <h5 "${element[i].id}"></h5>
// </div>
// `;
// mytext = mytext + cartoona;
// }
// document.querySelector('.test').innerHTML = mytext;

// })();

