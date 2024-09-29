const Form  = document.querySelector('.form');
Form.addEventListener ('submit', event =>{
event.preventDefault();

const formData = new FormData(Form);
const data = Object.fromEntries(formData);
console.log(data);
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'content-type':'application/json'
    },
    body:JSON.stringify(data)

}).then(res =>res.json())
.then(data =>console.log(data))
.catch(error => console.log(error));

});