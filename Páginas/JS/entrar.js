// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBsrTSoG2Xo5sNdlT9af9ePZwE7h51ZvWA",
//     authDomain: "login-manas.firebaseapp.com",
//     projectId: "login-manas",
//     storageBucket: "login-manas.appspot.com",
//     messagingSenderId: "639166799757",
//     appId: "1:639166799757:web:eb2001d2e9f951d90367c4",
//     measurementId: "G-YHH9PSV4TT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// //Initalize variables
// const auth = firebase.auth();
// const database = firebase.database();

// //set up our register function
// function register() {
//     nome = document.getElementById('name').value 
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value
// }

// //validar os inputs
// if(validade_email(email) == false || validate_password(password) == false){
//     alert('Email ou senha incorretos.');
//     return
// }
// if(validate_field(nome) == false){
//     alert('Um ou mais campos estão incorretos');
//     return
// }

// //Move on with auth
// auth.createUserWithEmailAndPassword(email, password)
// .then(function(){
//     var user = auth.currentUser

//     //adicionar usuario ao database do firebase
//     var database_ref = database.ref();

//     //create user data
//     var user_data = {
//         email: email,
//         nome: nome,
//         password: password,
//         last_login: Date.now()

//     }

//     database_ref.child('users/' + user.uid).set(user_data)




//     alert('Usuario criado!')
// })
// .catch(function(error){
//     var error_code = error.code;
//     var error_message = error.message;
//     alert(error_message)
// })



// function validate(email){
//     expression = /^[^@]+@\w+(\.\w+)+\w$/;
//     if(expression.test(email) == true){
//         //Email is good
//         return true;
//     } else {
//         //email is not good
//         return false;
//     }
// }

// function validate_password(password){
//     if(password < 6){
//         return false;
//     }else{
//         return true;
//     }
// }

// function validate_field(field){
//     if(field == null){
//         return false
//     }
//     if(field.length <= 0){
//         return false;
//     } else{
//         return true
//     }
// }