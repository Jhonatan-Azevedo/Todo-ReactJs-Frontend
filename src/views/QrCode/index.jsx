import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mask, unMask } from 'remask'
import Qr from "qrcode.react"

import * as S from "./styles";
import { showAlert } from "../../utils/sweetAlert";

const QrCode = () => {
    const [mac, setMac] = useState("");
    const [disabledBtn, setDisabledBtn] = useState(true);

    const navigate = useNavigate()
    const saveMac = async () => {
        if (!mac) {
            return showAlert('Você precisa informar o número que apareceu', 'warning ')
        }

        await localStorage.setItem(
            `${process.env.REACT_APP_LOCALSTORAGE_MACADDRESS}`,
            mac)
        navigate('/');
    }

    const setMacMask = (text) => {
        setMac(mask(unMask(text), '999.999.999.9'))
    }

    useEffect(() => {
        if (mac.length === 13) return setDisabledBtn(false)

        setDisabledBtn(true)
    }, [mac])

    return (
        <S.Container>

            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <S.QrCodeArea>
                    <Qr value="getmacaddress" size={300} />
                </S.QrCodeArea>
                <p>
                    Suas atividades  serão sincronizadas com a do seu celular
                </p>
            </S.Content>

            <S.ValidationCODE>
                <span>Digite a numeração que apareceu no celular</span>
                <input type="text" onChange={e => setMacMask(e.target.value)} value={mac} />
                <button type="button" disabled={disabledBtn} onClick={saveMac}>SINCRONIZAR</button>
            </S.ValidationCODE>
            <h4>QrCode</h4>
        </S.Container>
    );
};

export default QrCode;
