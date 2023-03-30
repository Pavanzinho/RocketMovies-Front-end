
import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api";

const AuthContext = createContext({}); //possibilita fornecimento de contexto.

function AuthProvider({ children }) {
    const [data, setData] = useState({});
    const [teste, setTeste] = useState([0])

    async function signIn({ email, password }) {

        try {

            //response possuirá o retorno de SessionsControllers, pois back-end identificada requisição na rota de sessions
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovies:token", token)

            // Toda requisição feita com variável "api"(configurada com axios), terá o token no cabeçalho de autenticação
            //substitui o "Bearer" do insomnia.


            //guardando objeto que possui:propriedades do usuário;token, dentro de uma variável.
            //assim, consigo inserir data.user no provider do contexto
            setData({ user, token })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível logar")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketmovies:user")
        localStorage.removeItem("@rocketmovies:token")

        setData({});
    }

    async function userUpdate({ user, avatarFile }) {

        try {
            if (avatarFile) {
                //criar formulário que será enviado pela req para o back-end,
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile) // back-end espera um arquivo chamado "avatar".

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar

            }
            const response = await api.put("/users", user);

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            setData({ user, token: data.token });

            alert("atualizado com sucesso.")
        }

        catch (error) {

            if (error.response) {

                alert(error.response.data.message);
            } else {
                alert("Erro ao atualizar usuário.");
            }
        }

    }


    useEffect(() => {
        const token = localStorage.getItem("@rocketmovies:token")
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, [data]);


    useEffect(() => {
        const user = localStorage.getItem("@rocketmovies:user")
        const token = localStorage.getItem("@rocketmovies:token")

        if (user && token) {
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, []);

    //Provendo dados do usuário para todas as rotas; {children}--> será substituido por routes
    return (
        <AuthContext.Provider value={{ signIn, user: data.user, signOut, userUpdate }}>
            {children}
        </AuthContext.Provider>

    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context

}

export { AuthProvider, useAuth };

