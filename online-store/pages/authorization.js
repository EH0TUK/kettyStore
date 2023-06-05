import React, { useState } from "react";
import Axios from "axios";
import { client } from '../lib/client';
import { useStateContext } from "../context/StateContext";
import { toast } from 'react-hot-toast';

const Authorization = () => {
    const { setAuth, setCountry } = useStateContext();
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const authorization = () => {
        Axios.post("http://localhost:3001/authorization", {
            userEmail: userEmail,
            userPassword: userPassword,
        }).then((response) => {
            if (response.data.message) {
                console.log(response.data)
                setAuth(false)
                setCountry('')
                toast.error(`Неверная почта или пароль!`);
            }
            else {
                console.log(response.data[0].user_country)
                setAuth(true)
                setCountry(response.data[0].user_country)
                toast.success(`Вы вошли в аккаунт!`);
                window.location.href = '/'
            }
        })
    }

    return (
        <div className="form__container">
            <div className="form__body">
                <p>Авторизация</p>
                <form>
                    <input type="email" placeholder="Почта" onChange={(e) => { setUserEmail(e.target.value) }} />
                    <input type="password" placeholder="Пароль" onChange={(e) => { setUserPassword(e.target.value) }} />
                    <input type="submit" value="Войти" onClick={authorization} />
                </form>
                <p>Нет аккаунта?</p>
                <a href="/registration">Перейти в окно регистрации</a>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const CollectionsQuery = '*[_type == "collections"]';
    const CollectionsData = await client.fetch(CollectionsQuery);
    return {
        props: { CollectionsData }
    }
}

export default Authorization