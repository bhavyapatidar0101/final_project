import axios from 'axios';
const API = "http://localhost:8080/equipment/"

class EquipmentService{

    getAll(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "all";
        const HEADER = {'headers': {'Content-Type': 'application/json','Authorization': TOKEN}};
        return axios.get(URL,HEADER);
        
    }

    getById(id){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + id;
        const HEADER = {'headers': {'Content-Type': 'application/json','Authorization': TOKEN}};
        return axios.get(URL,HEADER).then((response)=>{
            console.log(response);
            if (response.status == 200){
                return response.data;
            }
            else{
                return false;
            }
        }).catch((error)=>{
            return false;
        })
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

    assigned(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "assigned";
        const HEADER = {'headers': {'Authorization': TOKEN}};
        return axios.get(URL,HEADER);
    }
    purchased(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "purchased";
        const HEADER = {'headers': {'Authorization': TOKEN}};
        return axios.get(URL,HEADER);
    }
    notpurchased(){
        const TOKEN = "Bearer " + localStorage.getItem("token");
        const URL = API + "notpurchased";
        const HEADER = {'headers': {'Authorization': TOKEN}};
        return axios.get(URL,HEADER);
    }



}

export default new EquipmentService();