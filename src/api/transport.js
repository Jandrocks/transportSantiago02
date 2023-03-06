import axios from "axios";
import { alertError } from './alert';
import { BASE_URL, BASE_URL_SUBWAY } from "../config";


export class TransportAPI{    
    //axios
    static async fetchTransport(title){
        try{
            const response = await axios.get(`${BASE_URL}${title}`);
            console.log("valido",response.data.name) 
            return response.data.services.reverse();
            
        }catch(e){ 
            alertError(e);            
            console.log("mensaje",e)
        }
    }
    
    static async fetchTransportTitle(title){
        try{
            const response = await axios.get(`${BASE_URL}${title}`);
            console.log("fetchTransportTitle",response.data.name) 
            return response.data.name;
            
        }catch(e){             
            console.log(e)
        }
    }

    static async fetchSubway(){
        try{
            const response = await axios.get(`${BASE_URL_SUBWAY}`);
            console.log("valid111",response.data.lines) 
            return response.data.lines;            
        }catch(e){             
            console.log(e)
        }
    }

}



