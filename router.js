import LandingContainer from "./src/js/containers/LandingContainer.js";
import LoginContainer from "./src/js/containers/LoginContainer.js";
import landingUI from "./src/js/views/landingUI.js";
import loginUI from "./src/js/views/loginUI.js";
import register from "./src/js/views/registerUI.js"
import header from "./src/js/layouts/hearder.js"



window.onpopstate =  () =>{
    routePush(window.location.hash);
}

window.onNavigate = function(hash){
    routePush(hash)
}

const routePush = function(hash){
    history.pushState({}, "", location.origin + hash)
    console.log('value de hash in routerPush',hash);
    const container = document.getElementById('container')
    container.innerHTML = "";
    container.innerHTML += header(); 

    switch (hash) {
        case "":
            container.innerHTML += landingUI();
            new LandingContainer(window.onNavigate);
            break;
        case "#loginUI":
            container.innerHTML += loginUI();
            new LoginContainer(window.onNavigate);
            break;
        case "#register":
            container.innerHTML += register();
            new register();
            break;
        case "#menu":
            container.innerHTML+= menuUI ();
            new menu ();
        break;
    
    }
}

export default function (){
    console.log("démarrage de l apllication");
    routePush(window.location.hash);
}