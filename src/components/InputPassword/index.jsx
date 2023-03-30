import { Container } from "./styles";
import { useState } from "react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

export function InputPassword({ icon: Icon, ...rest }) {

    const [values, setValues] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(showPassword => !showPassword)

    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ [prop]: event.target.value });
    };


    const [isCapsLockOn, setIsCapsLockOn] = useState(false);

    const checkCapsLockOn = (event) => {
        if (event.getModifierState('CapsLock')) {
            setIsCapsLockOn(true)

        } else {
            setIsCapsLockOn(false)
        };
    }


    return (

        <Container {...rest}>


            {Icon && <Icon size={20} />}

            <input
                type={showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                onKeyUp={checkCapsLockOn}

                {...rest}
            />

            {
                isCapsLockOn &&
                ( //criando tag com uma condição.
                    <p className="caps-lock-warning">
                        CapsLock está ligado.
                    </p>
                )
            }

            <button
                onClick={handleClickShowPassword}
                type="button">

                {showPassword ? 
                    <AiFillEyeInvisible
                    name="eyeInvisiblie"
                    size={25} /> 
                    :
                    <AiFillEye
                        name="eye"
                        size={25}
                    />
                }

            </button>
        </Container>

    )
}
