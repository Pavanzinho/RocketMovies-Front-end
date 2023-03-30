import { Container } from "./styles";
import { Form } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button"

import { AiOutlineArrowLeft } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api"

export function NewMovie() {
    const [movieTitle, setMovieTitle] = useState("");
    const [rating, setRating] = useState("")
    const [movieDescription, setMovieDescription] = useState("")
    const [movieTags, setMovieTags] = useState([]) //tags que já existem
    const [newTag, setNewTag] = useState("")


    const navigate = useNavigate();

    function handleAddTag() {
        if (newTag == "") {
            alert("Não é possível adicionar um campo vazio")
        }
        else {
            setMovieTags(prevState => [...prevState, newTag])
            setNewTag("")
        }
    }

    function handleDeleteTag(deleted) {
        setMovieTags(prevState => prevState.filter((tag) => tag !== deleted))
    }

    function handleBack() {
        navigate("/")
    }

    async function handleNewMovie() {
        if (!movieTitle) {
            alert("Digite o título de seu filme antes de cria-lo")
            return
        }

        if (newTag) {
            alert(`você inseriu um texto no campo de tag, mas não ciclou em "adicionar". Clique em "adicionar" ou deixe o campo vazio`)
            return
        }

        if (!rating) {
            setRating(e => e == 0)
        }

        console.log(api.defaults.headers)
        const response = await api.post("/movie_notes", {
            movie_title: movieTitle,
            movie_description: movieDescription,
            rating,
            movie_tags: movieTags
        })
        console.log(response)
        alert("nota criada com sucesso")
        navigate(-1)
    }



    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <div >
                        <button onClick={handleBack}>
                            <AiOutlineArrowLeft /> {/*ENVOLVER O ICONE E O SPAN EM UM LINK*/}
                            <span>Voltar</span>
                        </button>


                    </div>

                    <h1>Novo filme</h1>

                    <div>
                        <Input
                            placeholder="Título"
                            value={movieTitle}
                            onChange={e => setMovieTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota(de 0 a 5)"
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <TextArea
                        placeholder="Observações"
                        onChange={e => setMovieDescription(e.target.value)}
                    />

                    <div className="tags">
                        {
                            movieTags.map((tag, index) => (
                                <NoteItem
                                    value={tag}
                                    key={index}
                                    onClick={() => { handleDeleteTag(tag) }}

                                />
                            ))
                        }

                        <NoteItem
                            isNew
                            placeholder="Novo Marcador"
                            value={newTag}
                            onClick={handleAddTag}
                            onChange={e => setNewTag(e.target.value)}

                        />
                    </div>

                    <footer>
                        <Button title="Excluir Filme" className="darkButton" />
                        <Button
                            title="Salvar Alterações"
                            onClick={handleNewMovie}
                        />
                    </footer>
                </Form>
            </main>
        </Container>
    )
}