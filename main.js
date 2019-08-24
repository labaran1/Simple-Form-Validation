//Login Field

const logInBtn = document.getElementById('logInBtn');
const loginField = document.getElementById('login');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('error');
//to check error
const loginName = document.getElementById('loginName');
const loginPassword = document.getElementById('loginPassword')


// SignUp fields
const signUpBtn = document.getElementById('signUpBtn');
const signUpField = document.getElementById('signUp');
const signUpForm = document.getElementById('signUpForm');
// check signUp errors
const signUpName = document.getElementById('signUpName');
const signUpPassword = document.getElementById('signUpPassword');
const signUpConfirmPassword = document.getElementById('signUpPassword2');
const signUpEmail = document.getElementById('signUpEmail');





//show fields
function showLogIn(){
    signUpField.style.display = 'none';
loginField.style.display= 'block';


}

function showSignUp(){
    loginField.style.display='none';
    signUpField.style.display='block';
}

//loginArea Validation 

 function logInSubmit(e){
e.preventDefault();
// name validation
if(loginName.value== ''){
    // loginError.classList.add('error')
    // loginError.innerHTML= 'please fill out this';
loginName.setAttribute('placeholder', "Name can't be empty");
loginName.style.border='2px solid red';
// loginName.focus();
setTimeout(()=>{loginName.style.border=''}, 2000);



}
     if (loginPassword.value == ''){
        loginPassword.setAttribute('placeholder', "password can't be empty")
        loginPassword.style.border = '2px solid red';
         setTimeout(() => { loginPassword.style.border = '' }, 2000);



     }


  
 }



//  check SignUp Errors 

const signUpSubmit = (e)=>{
    e.preventDefault();
  //name errors 
  if(signUpName.value==''){

      signUpName.setAttribute('placeholder', "Name can't be empty");
      signUpName.style.border = '2px solid red';
      setTimeout(() => { signUpName.style.border = '' }, 2000);

  } else if(signUpName.value.length<=2){
      signUpName.value= '';
      signUpName.setAttribute( 'placeholder','Enter name atleast 3 characters');
      signUpName.style.border = '2px solid red';
      setTimeout(() => { signUpName.style.border = '' }, 2000);

  }
  //password errors
  if(signUpPassword.value=='' || signUpConfirmPassword == ''){
      signUpPassword.setAttribute('placeholder', "Password can't be empty");
      signUpPassword.style.border = '2px solid red';
      setTimeout(() => { signUpPassword.style.border = '' }, 2000);

      signUpConfirmPassword.setAttribute('placeholder', "Password can't be empty");
      signUpConfirmPassword.style.border = '2px solid red';
      setTimeout(() => { signUpConfirmPassword.style.border = '' }, 2000);


  } else if (signUpPassword.value.length<= 8|| signUpConfirmPassword<= 8){
 signUpPassword.value= '';
 signUpConfirmPassword.value ='';
    signUpPassword.setAttribute('placeholder', "Password must be atleast 8 characters");
      signUpPassword.style.border = '2px solid red';
      setTimeout(() => { signUpPassword.style.border = '' }, 2000);

      signUpConfirmPassword.setAttribute('placeholder', "Password must be atleast 8 characters");
      signUpConfirmPassword.style.border = '2px solid red';
      setTimeout(() => { signUpConfirmPassword.style.border = '' }, 2000);



  }

  if(signUpEmail.value==''){
      signUpEmail.setAttribute('placeholder', "Email cant't be empty");
      signUpEmail.style.border = '2px solid red';
      setTimeout(() => { signUpEmail.style.border = '' }, 2000);

  } 



}














//  Event handlers 
logInBtn.addEventListener('click', showLogIn);
loginForm.addEventListener('submit' ,logInSubmit);


// signUp
signUpBtn.addEventListener('click', showSignUp);
signUpForm.addEventListener('submit', signUpSubmit);