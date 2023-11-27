import axios from 'axios';
const API = "http://localhost:8080/payment/"

class PaymentService{

    getAll(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "all";
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

   

}

export default new PaymentService();