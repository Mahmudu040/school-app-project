// //virtual data base.
// let users = JSON.parse(localStorage.getItem('users')) || [] 

// //registration page;
// document.getElementById("registerForm")?.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let name = document.getElementById('name').value
//     let email = document.getElementById('email').value
//     let password = document.getElementById('password').value;

//     const user = { name, email, password };

//     users.push(user);
//     localStorage.setItem('users', JSON.stringify(users));        

//     alert('Account created successfully!');
//     window.location.href = 'home.html';
// });
//     //login page;
//     document.getElementById('loginForm')?.addEventListener('submit', function (event) {
//         event.preventDefault();
//         const email = document.getElementById('login-email').value;
//         const password = document.getElementById('login-password').value;

//        const user = users.find(user => user.email === email && user.password === password);

//        if(user) {
//             localStorage.setItem('loggedInUser', JSON.stringify(user));
//             alert("login successful!");
//             window.location.href = 'home.html';
//        } else {
//         alert('invalid email or password')
//        }
//     });
    
//     // logout functionality;
//     document.getElementById('logout')?.addEventListener('click', function () {
//         localStorage.removeItem('loggedInUser')
//         alert('logged out successfully');
//         window.location.href = 'index.html'
//     });

//     // home page;
//     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     document.getElementById('js-greet-user')
//     .innerHTML = `welcome ${loggedInUser.name} to the school portal`






    // Virtual database
let users = JSON.parse(localStorage.getItem('users')) || [];

// Registration page
document.getElementById("registerForm")?.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const user = { name, email, password };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully!');
    window.location.href = 'home.html';
});

// Login page
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert("Login successful!");
        window.location.href = 'home.html';
    } else {
        alert('Invalid email or password');
    }
});

// Logout functionality
document.getElementById('logout')?.addEventListener('click', function () {
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully');
    window.location.href = 'index.html';
});

// Home page
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (loggedInUser) {
    document.getElementById('js-greet-user').innerHTML = `Welcome ${loggedInUser.name} to the school portal`;
} else {
    document.getElementById('js-greet-user').innerHTML = 'Please log in to access the portal';
}

