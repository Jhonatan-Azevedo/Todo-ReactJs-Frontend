import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { mask, unMask } from "remask";
import { format } from "date-fns";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import api from "../../services/api";
import typeIcons from "../../utils/typeIcons";

import iconCalender from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

import * as S from "./styles";
import useIsConnected from "../../utils/isConnected";

const Task = () => {
  const [type, setType] = useState(1);

  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();

  const { id: idParams } = useParams()
  const navigate = useNavigate();
  const isConnected = useIsConnected();

  const loadTaskDetail = async () => {
    try {
      const { data } = await api.get(`/task/${idParams}`);
      setType(data.type)
      setTitle(data.title)
      setDescription(data.description)
      setDone(data.done)
      setDate(format(new Date(data.when), 'yyyy-MM-dd'))
      setHour(format(new Date(data.when), 'HH:mm'))
    } catch (err) {
      throw new Error(err.message);
    }
  }

  const save = async () => {
    if (validateSend()) return

    const dataSave = {
      macaddress: isConnected,
      type,
      title,
      description,
      done,
      when: `${date}T${hour}:00.000`,
    };

    try {
      if (idParams) {
        return put(dataSave)
      }

      return post(dataSave)
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const put = async (dataSave) => {
    const { data } = await api.put(`/task/${idParams}`, dataSave);
    console.log(data)
    return navigate('/')
  }

  const post = async (dataSave) => {
    const { data } = await api.post("/task", dataSave);
    console.log(data)
    return alert("Tarefa cadastrada com sucesso!");
  }

  const validateSend = () => {
    if (!title) {
      alert('Você precisa informar o título da tarefa.');
      return true;
    }

    if (!description) {
      alert('Você precisa informar a descrição da tarefa.');
      return true;
    }
    if (!type) {
      alert('Você precisa informar o tipo da tarefa.');
      return true;
    }
    if (!date) {
      alert('Você precisa definir a data da tarefa.');
      return true;
    }
    if (!hour) {
      alert('Você precisa definir a hora da tarefa.');
      return true;
    }

    return false
  }

  const setHourMask = (text) => {
    setHour(mask(unMask(text), "99:99"));
  };

  const remove = async () => {
    const res = confirm('Deseja realmente remover a tarefa ?');
    if (res) {
      try {
        await api.delete(`task/${idParams}`)
        navigate('/')
      } catch (err) {
        throw new Error(err.message);
      }
      return alert("Ok, vamos remover")
    }

    return alert("Ok, vamos manter")
  }

  useEffect(() => {
    if (!isConnected) {
      return navigate('/qrcode')
    }
    idParams && loadTaskDetail();

  }, []);

  return (
    <S.Container>
      <Header clickNotification={Notification} />

      <S.Form>
        <S.TypeIcons>
          {typeIcons.map(
            (icon, index) =>
              index > 0 && (
                <button
                  key={index}
                  type="button"
                  onClick={() => setType(index)}
                >
                  <img
                    src={icon}
                    alt="Tipo da Tarefa"
                    className={type && type != index ? "inative" : ""}
                  />
                </button>
              )
          )}
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input
            type="text"
            placeholder="Título da tarefa..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea
            rows="5"
            placeholder="Detalhes da tarefa"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input
            type="date"
            placeholder="dd/MM/aaaa"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <img src={iconCalender} alt="Calendário" />
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input
            type="text"
            placeholder="HH:mm"
            value={hour}
            onChange={(e) => setHourMask(e.target.value)}
          />
          <img src={iconClock} alt="Relógio" />
        </S.Input>

        <S.Options>
          <div>
            <input
              id="checkbox-finally"
              type="checkbox"
              checked={done}
              onChange={(e) => setDone(!done)}
            />
            <label for="checkbox-finally">CONCLUÍDO</label>
          </div>

          {idParams && <button type="button" onClick={remove}>EXCLUIR</button>}
        </S.Options>

        <S.Save>
          <button type="button" onClick={save}>
            SALVAR
          </button>
        </S.Save>
      </S.Form>

      <Footer />
    </S.Container>
  );
};

export default Task;
