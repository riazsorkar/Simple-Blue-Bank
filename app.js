document.getElementById('submit').addEventListener('click', function(){


    const emailfield = document.getElementById('userEmail');
    const email = emailfield.value;

    const passfield = document.getElementById('userPassword');
    const password = passfield.value;


    if(email === "User" && password === "1234"){
        window.location.href = 'bank.html';
    }else{
        alert("Invalid User");
        
    }


})