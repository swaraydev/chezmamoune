import nav from "../components/nav.js";
const header = function(){
    return(
        `
        <header class ="header main__header ">
            <a href="/">
                Chez Mamoune
            </a>
            ${nav()}
        </header>
        
        `
    );
};

export default header;