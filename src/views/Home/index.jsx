import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterCard from "../../components/FilterCard";
import TaskCard from "../../components/TaskCard";
import api from "../../services/api";
import useIsConnected from "../../utils/isConnected"

import * as S from "./styles";

const Home = () => {
  const [filterActived, setFilterActived] = useState("today");
  const [tasks, setTasks] = useState([]);



  const navigate = useNavigate()
  const isConnected = useIsConnected();
  const loadTasks = async () => {
    const urlRequest = `task/filter/${filterActived}/${isConnected}`;

    try {
      const { data } = await api.get(urlRequest);
      console.log(data)
      setTasks(data);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const Notification = () => {
    setFilterActived("late");
  };

  useEffect(() => {
    if (!isConnected) {
      return navigate('/qrcode')
    }
    loadTasks();
  }, [filterActived]);

  return (
    <S.Container>
      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={!!(filterActived === "all")} />
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={!!(filterActived === "today")} />
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={!!(filterActived === "week")} />
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={!!(filterActived === "month")} />
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={!!(filterActived === "year")} />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>{filterActived === "late" ? "TAREFAS ATRASADAS" : "TAREFAS"}</h3>
      </S.Title>

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
      <Footer />
    </S.Container>
  );
};

export default Home;
