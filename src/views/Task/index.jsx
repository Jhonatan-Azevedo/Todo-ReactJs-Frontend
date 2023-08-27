import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { mask, unMask } from "remask";
import { format } from "date-fns";
import { showAlert, showConfirm } from "../../utils/sweetAlert";
import api from "../../services/api";
import typeIcons from "../../utils/typeIcons";
import SpinnerLoading from "../../components/SpinnerLoading"

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
  const [isLoading, setIsloanding] = useState(false);

  const { id: idParams } = useParams()
  const navigate = useNavigate();
  const isConnected = useIsConnected();

  const loadTaskDetail = async () => {
    setIsloanding(true);
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
    } finally {
      setIsloanding(false);
    }
  }

  const save = async () => {
    if (validateSend()) return

    setIsloanding(true)
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
        return await put(dataSave)
      }

      return await post(dataSave)
    } catch (err) {
      showAlert(err.response.data.error, 'error');
      console.error("❌ error Task: ", err.message)
    } finally {
      setIsloanding(false)
    }
  };

  const put = async (dataSave) => {
    await api.put(`/task/${idParams}`, dataSave);
    showAlert('Tarefa alterada com sucesso!', 'success');
    return navigate('/')
  }

  const post = async (dataSave) => {
    await api.post("/task", dataSave);
    resetForm();
    return showAlert('Tarefa cadastrada com sucesso!', 'success');
  }

  const validateSend = () => {
    if (!title) {
      showAlert('Você precisa informar o título da tarefa.', 'warning');
      return true;
    }

    if (!description) {
      showAlert('Você precisa informar a descrição da tarefa.', 'warning');
      return true;
    }
    if (!type) {
      showAlert('Você precisa informar o tipo da tarefa.', 'warning');
      return true;
    }
    if (!date) {
      showAlert('Você precisa definir a data da tarefa.', 'warning');
      return true;
    }
    if (!hour) {
      showAlert('Você precisa definir a hora da tarefa.', 'warning');
      return true;
    }

    return false
  }

  const setHourMask = (text) => {
    setHour(mask(unMask(text), "99:99"));
  };

  const remove = async () => {
    const res = await showConfirm('Deseja realmente remover a tarefa ?', 'info');
    if (res) {
      try {
        await api.delete(`task/${idParams}`)
        navigate('/')
      } catch (err) {
        throw new Error(err.message);
      }
      return showAlert('Ok, vamos remover!', 'success')
    }

    return showAlert('Ok, vamos manter!', 'error')
  }

  const resetForm = () => {
    setId("");
    setDone(false);
    setTitle("");
    setDescription("");
    setDate("");
    setHour("");
    setIsloanding(false);
  }

  useEffect(() => {
    if (!isConnected) {
      return navigate('/qrcode')
    }
    idParams && loadTaskDetail();

  }, []);

  return (
    <S.Container>
      {(idParams && isLoading) && <S.FieldLoading>
        <span>Buscando ...</span><SpinnerLoading />
      </S.FieldLoading>}
      <S.Form>

        <S.TypeIcons>
          {typeIcons.length > 0 && typeIcons.map(
            (icon, index) =>
              index > 0 && (
                <button
                  disabled={isLoading}
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
            disabled={isLoading}
          />
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea
            rows="5"
            placeholder="Detalhes da tarefa"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isLoading}
          ></textarea>
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input
            type="date"
            placeholder="dd/MM/aaaa"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            disabled={isLoading}
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
            disabled={isLoading}
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
              disabled={isLoading}
            />
            <label disabled={isLoading} htmlFor="checkbox-finally">CONCLUÍDO</label>
          </div>

          {idParams && <button disabled={isLoading} type="button" onClick={remove}>EXCLUIR</button>}
        </S.Options>

        <S.Save>
          <button disabled={isLoading} type="button" onClick={save}>
            {isLoading ? <SpinnerLoading /> : <>SALVAR</>}
          </button>
        </S.Save>
      </S.Form>
    </S.Container>
  );
};

export default Task;
