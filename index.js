function showpassword(){
    const eye = document.getElementById('eye');
    const eyeslash=document.getElementById('eye-slash');
    const fieldpass=document.getElementById('field-pass');

    if(eye.style.display==='none'){
        eye.style.display='block';
        eyeslash.style.display='none';
        fieldpass.type='text';


    }
    else{
        eye.style.display='none';
        eyeslash.style.display='block';
        fieldpass.type='password';

    }
}
document.getElementById('button-login').addEventListener('click',function(e){
    e.preventDefault()
    alert("você está logado!!")

});
