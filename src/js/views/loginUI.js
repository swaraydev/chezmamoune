import formUI from "../components/formUI.js";
import titleUI from "../components/titleUI.js";


const loginUI = function (){

    const data = {
        isLoginForm: true,
        formInputs: {
            email: {
                id: "email",
                type:  "email",
                placeholder: "Entrez votre email",
            },
            password : {

                id: "password",
                type:  "password",
                placeholder: "Entrez votre mot de passe",

            },
                
        }
   
    };

    return (
            `
        <main class="main login__main">
        
            <section>
                ${formUI(data)}
            </section>
        </main>
        `
    )
    
};
export  default loginUI;