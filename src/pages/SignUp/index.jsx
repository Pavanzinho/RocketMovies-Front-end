import {Container} from "./styles";
import {Form} from "./styles";
import { Background } from "./styles";

import { FiUser,FiMail, FiLock} from "react-icons/fi";
import { AiOutlineArrowLeft} from "react-icons/ai"

import{InputPassword} from "../../components/InputPassword";
import{Input} from "../../components/Input";
import { Button } from "../../components/Button"


import { Link} from "react-router-dom";
import {api} from "../../services/api.js"
import { useState } from "react";




export function SignUp(){

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    async function handleSignUp(){
        if(!name || !password || !email){
            return alert("Todos os campos precisam ser preenchidos")
        }

        try{
            const response =await api.post("/users",{name,email,password})
            alert("Usuário cadastrado")
        }catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        }
    }

    return(
        <Container>
            <Form>
        
                <div> 
                
                    <h1>RocketMovies</h1>
                    <span>Aplicação para acompanhar tudo que assistir.</span>
                    <h2>Crie sua conta</h2>

                    <fieldset>
                        <Input 
                        placeholder="Nome"
                        icon={FiUser}
                        type="text"
                        onChange={e=>setName(e.target.value)}
                        />
                        
                        <Input 
                        placeholder="E-mail"
                        icon={FiMail}
                        type="email"
                        onChange={e=>setEmail(e.target.value)}
                        />
                        
                        <InputPassword 
                        placeholder="Senha"
                        icon={FiLock}
                        onChange={e=>setPassword(e.target.value)}
                        />
   
                    </fieldset>

                    <Button 
                    title="Cadastrar"
                    onClick={handleSignUp}
                    />
                </div>
                
                
                 {/*fazer virar um link depois*/}
                    <Link to="/">
                        <AiOutlineArrowLeft/>
                        <span>Voltar para o login</span>
                    
                    
                    </Link>
                

                
                
            
            </Form>

            <Background/>



        </Container>


    )


}