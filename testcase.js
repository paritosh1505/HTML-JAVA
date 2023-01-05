//Traversing the DOM//
var itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='lightgray'; 

//childNode
//console.log(itemList.children);
itemList.children[1].style.backgroundColor='aqua';

//firstchild
//console.log(itemList.firstChild);
//firstelementchild
//console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color = 'green';
//lastchild
//console.log(itemList.lastChild);
//lastElementChild
//console.log(itemList.lastElementChild);
itemList.lastElementChild.style.fontWeight='bold';
//console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='white';

//createElement
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id= 'hello1';
newDiv.setAttribute('title' , 'Hello Div');
var newDivText= document.createTextNode(' HEllo');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
 var h1= document.querySelector('header h1');
 container.insertBefore(newDiv , h1);
newDiv.style.fontSize='30px';


var newNode = document.createElement("li");
var textNode = document.createTextNode("HEllo");
newNode.appendChild(textNode);
var list = document.getElementById("items");
list.insertBefore(newNode, list.children[0]);
