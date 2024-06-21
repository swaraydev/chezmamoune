import AuthService from "../services/AuthService.js";

class LoginContainer {
    
    constructor(){
        
    
        
        const form = document.getElementById('login-form');
        const self = this;

        form.onsubmit = function(e){
            console.log(this);
            self.onSubmit(e);

        };
    };

    onSubmit(e){
        e.preventDefault();
        const email = document.getElementById('email');
        const password  = document.getElementById('password');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');


        const emailValue = email.value;
        const passwordValue = password.value;
        
        if(!emailValue){
            emailError.innerText = "Veuillez entrez un identifiant";
            return;
        }
        if(!passwordValue){
            passwordError.innerText =  "Veuillez entrez votre mot de  passe";
            return;
        }
        passwordError.innerText = emailError.innerText = "";



        AuthService.login({email: emailValue, password: passwordValue}).then(
            (result) => {

                if(result){
                    setTimeout(() => {
                        window.location.hash = ""; 

                    },2000);
                }
            }
        )
    };
};

export default LoginContainer ;