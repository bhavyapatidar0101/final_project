import axios from 'axios';
const API = "http://localhost:8080/user/"

class UserService{

    getAll(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "all";
        const HEADER = {'headers': {'Content-Type': 'application/json','Authorization': TOKEN}};
        return axios.get(URL,HEADER);
    }

    details(id){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "detail";
        const HEADER = {'headers': {'Content-Type': 'application/json','Authorization': TOKEN}};
        return axios.get(URL,HEADER);
    }

    add(data){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "add";
        const HEADER = {'headers': {'Content-Type': 'application/json','Authorization': TOKEN}};
        return axios.post(URL,data,HEADER);
    }
    update(data){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "update";
        const HEADER = {'headers': {'Content-Type': 'application/json','Authorization': TOKEN}};
        return axios.put(URL,data,HEADER);
    }

    delete(id){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "delete/" + id;
        const HEADER = {'headers': {'Authorization': TOKEN}};
        return axios.delete(URL,HEADER);
    }

    undertrainer(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "undertrainer";
        const HEADER = {'headers': {'Authorization': TOKEN}};
        return axios.get(URL,HEADER);
    }
    undermember(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "undermember";
        const HEADER = {'headers': {'Authorization': TOKEN}};
        return axios.get(URL,HEADER);
    }
    notundermember(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "notundermember";
        const HEADER = {'headers': {'Authorization': TOKEN}};
        return axios.get(URL,HEADER);
    }
    



}

export default new UserService();