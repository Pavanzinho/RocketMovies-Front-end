import { Header } from "../../components/Header";

import { Container } from "./styles";
import { Main } from "./styles";

import { AiOutlineArrowLeft } from "react-icons/ai";

import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

import { HiOutlineClock } from "react-icons/hi";

import { Tag } from "../../components/Tag"

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"
import { useAuth } from "../../hooks/Auth";


export function Details() {
    const [data, setData] = useState(null)

    const params = useParams();
    const { user } = useAuth();
    
    const navigate = useNavigate();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    
    function handleBack() {
        navigate(-1)
    }


    async function handleDeleteMovieNote(){
        const confirm=window.confirm("Deseja realmente excluir esta nota ?")
        if(confirm){
            await api.delete(`/movie_notes/${params.id}`)
        }

        navigate(-1)
    }


    useEffect(() => {
        async function fetchMovieNote() {
            const response = await api.get(`/movie_notes/${params.id}`)
            setData(response.data)

        }
        fetchMovieNote()
    }, [])


    return (
        <Container>
            <Header />

            {
                data &&
                <Main>
                    <button onClick={handleBack}>
                        <AiOutlineArrowLeft /> {/*ENVOLVER O ICONE E O SPAN EM UM LINK*/}
                        <span>Voltar</span>
                    </button>

                    <div>
                        <h1>{data.movie_title}</h1>

                        {Array.from({ length: 5 }).map((e, index) =>
                            data.rating > index ?

                                <FaStar /> : <FiStar />

                        )}
                    </div>

                    <div>
                        <img
                            src={avatarUrl}
                            alt="Imagem do Usuário"
                        />

                        <span>{user.name}</span>
                        <HiOutlineClock />
                        <span>{data.created_at}</span>
                    </div>

                    <div>
                        {data.movie_tags &&

                            data.movie_tags.map((tag) => (
                                <Tag
                                    key={String(tag.id)}
                                    title={tag.name}
                                />
                            ))
                        }

                    </div>

                    <div>
                        <p>
                            {data.movie_description}
                        </p>
                    </div>

                    <footer>
                        <button onClick={handleDeleteMovieNote}>
                           <span>Excluir nota</span>
                        </button>
                    </footer>
                </Main>
            }
        </Container>
    )
}