import React, { useState } from "react";
import Axios from "axios";
import { client } from '../lib/client';
import { toast } from 'react-hot-toast';

const Registration = () => {
    const [userFullName, setUserFullName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPhoneNumber, setUserPhoneNumber] = useState('')
    const [userUnpOrInn, setUserUnpOrInn] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userCountry, setUserCountry] = useState('')

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            userFullName: userFullName,
            userEmail: userEmail,
            userPhoneNumber: userPhoneNumber,
            userUnpOrInn: userUnpOrInn,
            userPassword: userPassword,
            userCountry: userCountry,
        }).then((response) => {
            if (response.data.message) {
                toast.error(`Почта занята!`);
            }
            else {
                toast.success(`Аккаунт зарегестрирован!`);
                window.location.href = '/authorization'
            }
        })
    }

    return (
        <div className="form__container">
            <div className="form__body">
                <p>Регистрация</p>
                <form>
                    <input required type="text" placeholder="ФИО" onChange={(e) => { setUserFullName(e.target.value) }} />
                    <input required type="email" placeholder="Почта" onChange={(e) => { setUserEmail(e.target.value) }} />
                    <input required type="text" placeholder="Номер телефона" onChange={(e) => { setUserPhoneNumber(e.target.value) }} />
                    <input required type="text" placeholder="УНП или ИНН" onChange={(e) => { setUserUnpOrInn(e.target.value) }} />
                    <input required type="password" placeholder="Пароль" onChange={(e) => { setUserPassword(e.target.value) }} />
                    <div className="form__body__flex">
                        <input required type="radio" value="Беларусь" name="country" onChange={(e) => { setUserCountry(e.target.value) }}></input>
                        <label>Беларусь</label>
                        <input required type="radio" value="Россия" name="country" onChange={(e) => { setUserCountry(e.target.value) }}></input>
                        <label>Россия</label>
                        <input required type="radio" value="Казахстан" name="country" onChange={(e) => { setUserCountry(e.target.value) }}></input>
                        <label>Казахстан</label>
                        <input required type="radio" value="другая" name="country" onChange={(e) => { setUserCountry(e.target.value) }}></input>
                        <label>другая</label>
                    </div>

                    <input type="submit" value="Зарегистрироваться" onClick={register} />
                </form>
                <p>Уже есть аккаунт?</p>
                <a href="/authorization">Перейти в окно авторизации</a>
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

export default Registration