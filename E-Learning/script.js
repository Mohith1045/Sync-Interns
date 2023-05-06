var users = [];
const closeModalButton = document.querySelector('.close-button');
const closeModalButton1 = document.querySelector('.close-button1');

function openSignupModal() {
  document.getElementById('signup-modal').style.display = 'block';
}

function openLoginModal() {
    document.getElementById('login-modal').style.display = 'block';
}

function openLogoutModal() {
    window.location.href = '../index.html';
}

closeModalButton.addEventListener('click', () => {
    document.getElementById('signup-modal').style.display = 'none';
});

closeModalButton1.addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'none';
});

function saveUser() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var file = document.getElementById('file').files[0];

  if (name === "" || email === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  var mp = new Map();
  mp.set(name,password);
  var user = { details: mp, password:password,email: email,file: file };
  users.push(user);
  console.log(users)
  document.getElementById('signup-modal').style.display = 'none'
  alert('Thank you for signing up and uploading your file!');
  window.location.href = 'studentdashboard/studentdashboard.html';
}

function verifyUser(){
    var name = document.getElementById('name1').value;
    var password = document.getElementById('password1').value;
    if(name === "admin" && password === "admin123"){
        window.location.href = 'admin/admindashboard.html';
    }
    else if (name === "student" && password === "student123"){
      window.location.href = 'studentdashboard/studentdashboard.html';
    }
    else{
      alert("Enter correct username and password");
    }
}

function isValidEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }