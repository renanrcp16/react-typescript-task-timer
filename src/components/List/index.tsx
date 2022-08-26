import { Task } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
	tasks: Task[];
	selectTask: (selectedTask: Task) => void;
}

function List({ tasks, selectTask }: Props) {
	return (
		<aside className={style.ListTasks}>
			<h2 onClick={() => {

			}}> Estudos do dia </h2>
			<ul>
				{tasks.map((item) => (
					<Item selectTask={selectTask} key={item.id} {...item} />
				))}
			</ul>
		</aside>
	);
}

export default List;
