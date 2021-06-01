import React from 'react';
import  { v4 as uuidV4 } from 'uuid';

import {  ContainerButton,Title,JsonViwer, JsonEditor, Button, Container, ContainerViwer } from './styles';


interface JsonReceiveProps {

    jsonsReceive: string[]

}

const JsonPage: React.FC<JsonReceiveProps> = ({jsonsReceive}: JsonReceiveProps) => {
    return(
        <>
            <Container>
                <div>
                    <ContainerViwer>
                        <div>
                            <Title>Json Translate Data/URL</Title>
                        </div>
                        <JsonEditor placeholder="{}"/>
                    
                    </ContainerViwer>
                </div>
                <div>
                    <ContainerButton>
                        <Button>
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
                            {'{ }'}
                        </JsonViwer>
                    </ContainerViwer>
                </div>
            </Container>
            {/* 
                {jsonsReceive.map((json)=>(
                    <li key={uuidV4()}>
                            <JsonViwer/>
                    </li>    
                ))}
             */}
        </>
    );
};

export default JsonPage;