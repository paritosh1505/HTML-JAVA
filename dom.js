//examine the document object//
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title= 12132
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]); //not recommeneded
//document.all[10].textContent = 'Hello'; not recommended
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);
// getelementbyid//

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'hello';
//headerTitle.innerText = "goodbye";
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = "<h3>hello</h3>" 
header.style.borderBottom = 'solid 4px #000' ;
var items = document.getElementsByClassName('title1');
items[0].style.fontWeight = "bold";
items[0].style.color = 'green';
