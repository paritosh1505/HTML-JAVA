const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email');
const phone_number=document.querySelector('#phnumber');
const msg= document.querySelector('.msg');
const userList = document.querySelector('#users');
var i=0;
var deleteArray=[];    
myform.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value ==='' || emailInput.value ==='' || phone_number.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML='PLEASE ENTER ALL FIELDS';
        setTimeout(()=>msg.remove() , 3000);

    }
    else{
        const li = document.createElement('li');
        console.log("##");
        let myObj = {
            nameInput : nameInput.value,
            emailInput : emailInput.value,
            phone_number : phone_number.value 

        };
        let myObj_serialized = JSON.stringify(myObj);
        localStorage.setItem(nameInput.value, myObj_serialized);
        let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
      
        var createEle = document.createElement('input');
        createEle.type = 'button';
        createEle.value = "DeleteButton"
        createEle.id ="buttonid"+i;
        var createDeletenode = document.createTextNode('Delete');
        createEle.appendChild(createDeletenode);
        
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${phone_number.value}`));
    li.appendChild(createEle);
    li.id = "listvalue"+i;
     
    userList.appendChild(li);
    var buttonid = document.getElementById("buttonid"+i);
    var listid = document.getElementById("listvalue"+i);
      buttonid.addEventListener("click",deleteFunction);
      function deleteFunction(e){
          localStorage.removeItem(listid.innerHTML.split(' ')[0].replace(":",""));
          //console.log(listid.innerHTML.split(' ')[0].replace(":",""));
          listid.remove();
          //console.log(emailInput);
          

          //localStorage.clear();
      }
    i=i+1;
  }
 
    nameInput.value = '';
    emailInput.value = '';
    phone_number.value = '';
}
