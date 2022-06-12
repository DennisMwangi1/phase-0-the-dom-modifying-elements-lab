// Write your code here!

document.getElementById("main").remove();
const newHeader = document.getElementById("victory");
// newHeader.innerText = "YOUR-NAME is the champion";
const userName = (name)=>newHeader.innerText = `${name} is the champion`
userName('Dennis')