

class LandingContainer{
    
    constructor (onNavigate){
        this.onNavigate =  onNavigate

        const landingLoginButton = document.getElementById("landing-login-button")
        landingLoginButton.onclick = (e) => this.onClick("landing-login-button")

        const  landingRegisterButton = document.getElementById("landing-register-button")
        landingRegisterButton.onclick = (e) => this.onClick("landing-register-button'")
        
    }

    onClick(buttonId){

            if(buttonId == "landing-login-button"){
                console.log('Vous avez cliquez sur le button de connexion');
                window.location.hash = "#loginUI";
            

            }  else{
                console.log('vous avez cliquez sur le  bouton d inscription');
            
            }
    }

}
export default LandingContainer;