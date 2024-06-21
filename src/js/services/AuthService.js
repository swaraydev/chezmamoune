import localStorageService from "./LocalStorageService.js"
class AuthService{
   
    static async login({email, password}){
        const  users = await LocalUsersService.getUsers();

        if (users.length) {
            const user = users.find((user) => user.email == email);

            if (user) {

                if (user.password == password) {

                    CustomLocalStorageService.setSpecifItem("token",{
                        isLoggenIn: true,
                        email: user.email,
                    });

                    const navigatorToken =  CustomLocalStorageService.getSpecificItem("token");

                    if(navigatorToken.email == email){
                        new MessageService().message = {
                            type: "positive",
                            content: "Vous êtes  connecté(e)",
                        };
                        return true;
                    }

                }else {
                    new MessageService().message ={
                        type: "negative",
                        content: "Informations incorrectes",
                    };
                    return false;
                };
            }

        }else {
            new MessageService().message  ={
                type: "negative",
                content:  "Impossible de se connecter  à la  base de données",

            };
            return false;
        }
    }

    static isLogginIn(){
        const token = CustomLocalStrorageService.getSpecificItem("token");
        new MessageService().message = {
            type: "info",
            content: "Vous êtes toujours connecté(e)"
        };
        return token.isLoggenIn;
    }

    static logout (token) {
        CustomLocalStorageService.removeSpecificItem(token);
        new MessageService().message = {
            type: "info",
            content: "Déconnexion en cours",
        };
    }
}
export default AuthService;