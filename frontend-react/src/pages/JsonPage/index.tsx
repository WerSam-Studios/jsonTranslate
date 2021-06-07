import { type } from 'os';
import React, {useState, useEffect} from 'react';
import ReactJson from 'react-json-view'
import  { v4 as uuidV4 } from 'uuid';


import api from '../../services/api';

import {  ContainerButton,Title,JsonViwer, JsonEditor, Button, Container, ContainerViwer, JsonViwerPre } from './styles';

interface JsonReceive {
    id : string;
    session: string;
    json_request: string;
    json_response: string;
}

interface JsonReceiveProps {

    jsonsReceive: JsonReceive

}


const JsonPage: React.FC<JsonReceiveProps> = ({jsonsReceive}: JsonReceiveProps) => {
    const [session, setSession]           = useState<string>('');
    const [json, setJson]                 = useState<string>('{}');
    const [jsonRequest, setJsonRequest ]  = useState<string>('');


    async function requestJson(): Promise<void>{
        try{
            const jsonRequestAux = {
                "json_request" : jsonRequest
            }

            const options = {
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin' : 'http://127.0.0.1',
                    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    'Access-Control-Allow-Credentials':true,
                    'Access-Control-Request-Headers' : 'Content-Type, Authorization',
                    'session': session
                }
            }

            await api.post('/json_translate',jsonRequestAux, options)
            .then(
                (response) => {
                    const jsonValues : JsonReceive =  response.data;
                    setSession(jsonValues.session)
                    let jsonReceiveInRequest =  jsonValues.json_response.replace(/'/g, '"').replace(/^"|"$/g, "").replace(/^\s+|\s+$/g, "")
                    setJson(jsonReceiveInRequest)

                }
            )

       
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <Container>
                <div>
                    <ContainerViwer>
                        <div>
                            <Title>Json Translate Data/URL</Title>
                        </div>
                        <JsonEditor placeholder="{}" value={jsonRequest} onChange={(event)=> setJsonRequest(event.target.value)}/>
                    </ContainerViwer>
                </div>
                <div>
                    <ContainerButton>
                        <Button onClick={() => requestJson()}>
                                Traduzir
                        </Button>
                    </ContainerButton>
                </div>
                <div>
                   <ContainerViwer>
                        <div>
                            <Title>Json Translate Viewer</Title>
                        </div>
                        <JsonViwer>
                                <ReactJson src={JSON.parse(json)} style={{maxHeight:'100%'}}/>
                        </JsonViwer>
                    </ContainerViwer>
                </div>
            </Container>
        </>
    );
};

export default JsonPage;