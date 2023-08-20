import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import FilterCard from "../../components/FilterCard";
import TaskCard from "../../components/TaskCard";
import api from "../../services/api";
import useIsConnected from "../../utils/isConnected"
import SpinnerLoading from "../../components/SpinnerLoading"

import * as S from "./styles";

const Home = () => {
  const [filterActived, setFilterActived] = useState("today");
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  const navigate = useNavigate()
  const { filter } = useParams();
  const isConnected = useIsConnected();

  const loadTasks = async () => {
    setIsLoading(true);
    const urlRequest = `task/filter/${filterActived}/${isConnected}`;

    try {
      const { data } = await api.get(urlRequest);
      console.log(data)
      setTasks(data);
    } catch (err) {
      throw new Error(err.message);
    } finally {
      setIsLoading(false)
    }
  };


  useEffect(() => {
    if (!isConnected) {
      return navigate('/qrcode')
    }

    loadTasks();
  }, [filterActived]);

  useEffect(() => {
    if (filter) {
      setFilterActived(filter)
      navigate('/');
    }
  }, [filter]);

  return (
    <S.Container>

      <S.FilterArea>
        <button type="button" disabled={isLoading} onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={!!(filterActived === "all")} />
        </button>
        <button disabled={isLoading} type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={!!(filterActived === "today")} />
        </button>
        <button disabled={isLoading} type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={!!(filterActived === "week")} />
        </button>
        <button disabled={isLoading} type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={!!(filterActived === "month")} />
        </button>
        <button disabled={isLoading} type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={!!(filterActived === "year")} />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>{filterActived === "late" ? "TAREFAS ATRASADAS" : "TAREFAS"}</h3>
      </S.Title>
      {isLoading ?
        <S.FieldLoading>
          <span>Buscando ...</span><SpinnerLoading />
        </S.FieldLoading> : <>
          <S.Content>
            {tasks.length > 0 ?
              tasks.map((task) => (
                <Link to={`/task/${task._id}`} key={task._id}>
                  <TaskCard title={task.title} when={task.when} type={task.type} done={!!task.done} />
                </Link>
              )) :
              <>
                <h3>Nenhuma tarefa cadastrada.</h3>
              </>
            }
          </S.Content>
        </>}
    </S.Container>
  );
};

export default Home;
