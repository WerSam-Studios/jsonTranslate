import  { v4 as uuidV4 } from 'uuid';

class JsonTranslate {

    id : string;
    
    json_request : string;

    json_response : string;

    session : string;

    constructor(){
        
        this.id = uuidV4();
        
        
        this.session = uuidV4(); 
        
        
        this.json_request = '';
          
        
        this.json_response = '';
    }
}

export { JsonTranslate }