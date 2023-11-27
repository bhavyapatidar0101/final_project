import axios from 'axios';
const API = "http://localhost:8080/auth/"

class AuthenticationService{

    isLoggedIn(){
        let token = localStorage.getItem("token");
        let role = localStorage.getItem("role");
        if (token && role){
            return true;
        }
        else{
            return false;
        }
    }
    
    isMember(){
        let role = localStorage.getItem("role");
        if (role=="MEMBER"){
            return true;
        }
        else{
            return false;
        }
    }

    isTrainer(){
        let role = localStorage.getItem("role");
        if (role=="TRAINER"){
            return true;
        }
        else{
            return false;
        }
    }

    isAdmin(){
        let role = localStorage.getItem("role");
        if (role=="ADMIN"){
            return true;
        }
        else{
            return false;
        }
    }

    async login(data){
        const URL = API + "login";
        const HEADER = {'headers': {'Content-Type': 'application/json'}};
        try{
        let response = await axios.post(URL,data,HEADER);
        if (response.status == 200){
            let token = response.data.token;
            let role = response.data.role;
            localStorage.setItem("token",token);
            localStorage.setItem("role",role);
            return true;
        }
        else{
            return false;
        }
    }
    catch{
        return false;
    }
    }

    logout(){
        localStorage.clear();
    }

    register(data){
        const URL = API + "register";
        const HEADER = {'headers': {'Content-Type': 'application/json'}};
        return axios.post(URL,data,HEADER);
    }







}
export default new AuthenticationService();