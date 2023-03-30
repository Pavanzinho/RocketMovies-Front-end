import { Container } from "./styles";
import { Form } from "./styles";
import { Avatar } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import { AiOutlineArrowLeft } from "react-icons/ai"

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import { useState } from "react";

import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";



import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"

export function Profile() {

    const { user, userUpdate } = useAuth()
    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl)// avatar já existente no user;exibido em tela.
    const [avatarFile, setAvatarFile] = useState(null)// estado que receberá o novo avatar/será enviado para o backend.


    async function handleUpdateProfile() {
        const updated = {
            name:name,
            email:email,
            oldPassword: oldPassword,
            newPassword: newPassword,

        }
        const userUpdated = Object.assign(user, updated)
        await userUpdate({ user: userUpdated, avatarFile });

    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file)


        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
        console.log(imagePreview)

    }

    function handleBack() {
        navigate(-1)
    }

    return (
        <Container>
            <header>
                <button onClick={handleBack}>
                    <AiOutlineArrowLeft /> {/*ENVOLVER O ICONE E O SPAN EM UM LINK*/}
                    <span>Voltar</span>
                </button>
            </header>

            <Form>
                <Avatar>
                    <img
                        src={avatar}
                        alt="Imagem do Usuário"
                    />
                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            type="file"
                            id="avatar"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    icon={FiUser}
                    type="text"
                    className="SvgMarginInInputs"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    icon={FiMail}
                    type="email"
                    className="SvgMarginInInputs"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    icon={FiLock}
                    type="password"
                    className="SvgMarginInInputs"

                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    icon={FiLock}
                    type="password"

                    className="SvgMarginInInputs"
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button
                    title="Salvar"
                    onClick={handleUpdateProfile}
                />
            </Form>
        </Container>
    )
}