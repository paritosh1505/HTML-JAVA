var header= document.querySelector('#main-header');
header.style.borderBottom= 'solid 4px gray';

var input= document.querySelector('input');
input.value= 'Hello World';
var input= document.querySelector('input[type="submit"]');
input.value="Enter";
var items = document.querySelector('.list-group-item:nth-child(2)');
items.style.backgroundColor = 'lightgreen';
// to make item3 invisible 
// var item= document.querySelector('.list-group-item:nth-child(3)');
// item.style.display= 'none';
var fonItem = document.querySelectorAll('.list-group-item');
fonItem[1].style.color='green';
fonItem[1].style.fontWeight='bold';
console.log(fonItem[2]);
var odd= document.querySelectorAll('li:nth-child(odd)');
console.log(odd);
for(var i=0;i<odd.length;i++)
{
odd[i].style.backgroundColor="coral";
}
