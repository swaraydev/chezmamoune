import buttonUI from "../components/buttonUI.js";
import formUI from "../components/formUI.js";
import titleUI from "../components/titleUI.js";


const register = function (){

    const data = {
        isLoginForm: true,
        formInputs : {
            email : {
                placeholder: 'Entrez votre email',
                type : 'email',
                id : 'email',
            },
            password : {
                placeholder:  'Entrez votre mot de passe',
                type:  'password',
                id : 'password'
            },
            buttons: [
                {
                    type :"submit",
                    content : "Valider",
                    id : "login-submit-button",
                },
                {
                    type: "reset",
                    content: "reinitialiser",
                    id : "login-reset-button",
                },

            ],

        },
    };
    
    return(
        `
        <main class="main login__main">
            <section>
            ${formUI(data)}
            </section>
            <section>
                <small>Vous etes deja inscrit(e)  Connectez-vous <a href="#login">Ici<a/></small>
            </section>

        </main>
        `
    )
};
export  default register;