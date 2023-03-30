import { Container } from "./styles";
import { Profile } from "./styles";
import { Input } from "../Input"

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"
import { useAuth } from "../../hooks/Auth"

import { api } from "../../services/api"
import { useState } from "react";


export function Header({ children }) {
    const [search, setSearch] = useState("")
    const { user, signOut } = useAuth();
    const navigation = useNavigate();

    function sendCorretSearch() {
        fetchCorrectSearch(search)
    }
    
    function onChange(event) {
        setSearch(event.target.value);
        sendCorretSearch()
    }



    function handleSignOut() {
        navigation("/")
        signOut()
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    return (
        <Container>

            <Link to="/">
                RocketMovies
            </Link>
            
            {children}
            
            
            
            {/* <Input
                placeholder="Pesquisar pelo título"
                onChange={onChange}

            /> */}

            <Profile>
                <div>

                    <Link to="/profile">
                        <strong>{user.name}</strong>
                    </Link> {/*nome de usuário*/}

                    <button
                        onClick={handleSignOut}>
                        sair
                    </button>
                </div>

                <img
                    src={avatarUrl}
                    alt="Imagem do Usuário" />
            </Profile>



        </Container>
    )



}