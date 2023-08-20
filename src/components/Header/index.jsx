import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/Logo.png";
import bell from "../../assets/bell.png";
import api from '../../services/api';
import * as S from "./styles";
import useIsConnected from '../../utils/isConnected';

const Header = () => {
  const [lateCount, setlateCount] = useState();

  const navigate = useNavigate()
  const isConnected = useIsConnected();

  const lateVerify = async () => {
    const urlRequest = `task/filter/late/${isConnected}`;

    try {
      const { data } = await api.get(urlRequest);
      setlateCount(data.length);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const Notification = () => {
    navigate(`/late`)
  };

  const logout = async () => {
    localStorage.removeItem(`${process.env.REACT_APP_LOCALSTORAGE_MACADDRESS}`)
    navigate('/qrcode')
  }

  useEffect(() => {
    lateVerify();
  }, [])

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo Todo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">INÍCIO</Link>
        <span className="divider" />
        <Link to='/task'>NOVA TAREFA</Link>
        <span className="divider" />
        {!isConnected ?
          <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
          :
          <button type='button' id='exit-btn' onClick={logout}>SAIR</button>
        }
        {lateCount && <>
          <span className="divider" />
          <button onClick={Notification} id="notification">
            <img src={bell} alt="Notificação" title="Notificação" />
            <span>{lateCount}</span>
          </button>
        </>}
      </S.RightSide>
    </S.Container>
  );
};

export default Header;
