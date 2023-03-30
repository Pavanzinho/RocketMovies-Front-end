import {Container} from "./styles";
import {Form} from "./styles";
import { Background } from "./styles";

import { FiMail, FiLock} from "react-icons/fi";

import{InputPassword} from "../../components/InputPassword";
import{Input} from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText";

import {useAuth} from "../../hooks/Auth"
import { useState } from "react";

export function SignIn(){
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    console.log(password)
    
    const {signIn}=useAuth();

    function handleSignIn(){
        signIn({email,password})
        
    }
    
   
    return(
        <Container>
            <Form>
        
                <div>    
                    <h1>RocketMovies</h1>
                    <span>Aplicação para acompanhar tudo que assistir.</span>
                    <h2>Faça seu login</h2>

                    <fieldset>
                        <Input
                        placeholder="E-mail"
                        icon={FiMail}
                        onChange={e=>setEmail(e.target.value)}
                        />  
                        
                        <InputPassword
                        placeholder="Senha"
                        icon={FiLock}
                        onChange={e=>setPassword(e.target.value)}
                        />
                    </fieldset>

                    <Button 
                    title="Entrar"
                    onClick={handleSignIn}
                    />
                </div>
                
                <ButtonText to ="/signup" title="Criar conta"/>
            
            </Form>
            
            <Background/>

        </Container>
    )
}