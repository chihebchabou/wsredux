import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = () => {
    const taskList = useSelector(state => state.reducer.taskList)
    const status=useSelector((state=>state.reducer.status));
    return (
        <div>
            {status === "All"
        ?  taskList.map(todo => <TaskItem todo={todo} key={todo.id}/>)
        : status === "Done"
        ? taskList.filter((todo) => todo.isDone === true).map((todo) => (
            <TaskItem todo={todo} key={todo.id}/>
          ))
        :taskList.filter((todo) => todo.isDone === false).map((todo) => (
            <TaskItem todo={todo} key={todo.id}/>
          ))}
        </div>
    )
}

export default TaskList
