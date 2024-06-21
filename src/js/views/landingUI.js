import buttonUI from "../components/buttonUI.js";
import messageUI from "../components/messageUI.js";
import titleUI from "../components/titleUI.js";

const landingUI  = function(){
    const messageData ={
        imageUrl: 'h',
        imageAlt: 'Image généré par AI',
        footerContent:"N hésitez pas à découvrir nos plats",
        headerContent: "Bienvenue chez Mamoune gastronomique"
    }
    return(
        `
        <main class="main landing__main">
             ${titleUI('Chez Mamoune | Accueil')}
        <section>
            ${messageUI(messageData)}
        </section>
       
        <footer>
            ${buttonUI({id: 'landing-login-button',  content: 'Connectez-vous ', type: 'button'})}
            ${buttonUI({id: 'landing-register-button',  content: 'Inscrivez-vous ', type: 'button'})}
        </footer>
        </main>
        `
    )
}
export default  landingUI;