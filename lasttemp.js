 
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// form submit event
form.addEventListener('submit',addItem);
//delete Event 
itemList.addEventListener('click', removeItem);

//Additme function
function addItem(e){
    e.preventDefault();

 //get input value
 var newItem = document.getElementById('item').value;
//create new li element
var li = document.createElement('li');
// add class
li.className =  'list-group-item'; 
// add textNode with input value
li.appendChild(document.createTextNode(newItem));

//create deletebuttonElement
var delte= document.createElement('button');
delte.className= 'btn btn-danger btn-sm float-right delete';
delte.appendChild(document.createTextNode('x'));
li.appendChild(delte);
itemList.appendChild(li);
//create edit button
var edt = document.createElement('button');
edt.className='btn btn-danger btn-sm float-right delete' ;
edt.appendChild(document.createTextNode('Edit'));
li.appendChild(edt);
itemList.appendChild(li);


}
var li = document.getElementsByClassName('list-group-item');
for(var i =0;i<li.length;i++){
var edt = document.createElement('button');
edt.className='btn btn-danger btn-sm float-right delete' ;
edt.appendChild(document.createTextNode('Edit'));

li[i].appendChild(edt);
}



function removeItem(e){
    if(e.target.classList.contains('delete')){
     if(confirm('Are You Sure')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
     }
    }
} 


