
import { Header } from "../../components/Header";
import { Note } from "../../components/Note"


import { Container, Content } from "./styles";

import { MdOutlineAdd } from "react-icons/md"

import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react"

import { api } from "../../services/api";
import { useAuth } from "../../hooks/Auth"


export function Home() {
    const { user } = useAuth()
    const [notes, setNotes] = useState([])

    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([]);
    const [rating,setRating]=useState(0)
    const navigate=useNavigate();


    function handleDetails(id){
        navigate(`details/${id}`)
        console.log(id)
    }
    
    
    
    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/movie_tags")
            setTags(response.data);
        }
        fetchTags();

    }, []);


    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get("/movie_notes", {
                params: {
                    user_id: user.id,
                    movie_title: search, 
                    movietags: tags, 
                    rating: rating
                }
            }) //body do params.
            setNotes(response.data);
        }

        fetchNotes();

    }, [tags, search]);


    return (
        <Container>
            <Header>
                <div>
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}

                    />
                </div>
            </Header>

            {/* <Header fetchCorrectSearch={fetchSearch} /> */}

            <Content>
                <div>
                    <h1>Meus Filmes</h1>

                    <Link to="newmovie">
                        <button>
                            <MdOutlineAdd />
                            Adicionar filme
                        </button>
                    </Link>

                </div>

                <main>
                    {/*
                        -Exemplo para teste:
                    
                    
                        <Note to="/details" data={{
                        title: 'Interistellar',
                        tags: [
                            { id: "1", name: 'Física' },
                            { id: "2", name: 'Aventura' }
                        ],
                        rating: 4


                    }}
                    /> */}
                    {
                        notes.map((note) => (
                            <Note
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleDetails(note.id)}                               
                            />
                        ))
                    }
                </main>
            </Content>
        </Container>

    )


}