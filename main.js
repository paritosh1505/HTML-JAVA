const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email');
const phone_number=document.querySelector('#phnumber');
const msg= document.querySelector('.msg');
const userList = document.querySelector('#users');
myform.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value ==='' || emailInput.value ==='' || phone_number.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML='PLEASE ENTER ALL FIELDS';
        setTimeout(()=>msg.remove() , 300);

    }
    else{
        const li = document.createElement('li');
        localStorage.setItem('nameInput', nameInput.value);
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('phone number',phone_number.value);

    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${phone_number.value}`));
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
    phone_number.value = '';
  }
}
