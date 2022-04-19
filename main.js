const target = document.getElementById('ST');

function jsfunc1() {
  target.innerText = "Hello Pat";  
}

// window.onload = function(){ 
//   console.log("onload");
//   target.innerText = "onload text for Pat";  
// }

window.addEventListener('load', function() {
  target.innerText = "onload text for Pat";  
  console.log("onload");
})

var myFunc = ()=>{
  var Now = new Date();
  var result = '' + Now;
  return result;  
};
myFunc();