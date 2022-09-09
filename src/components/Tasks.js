import Task from './Task';

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Tasks;









// import PropTypes from 'prop-types'

// const Tasks = props => {
//   const [tasks, setTasks] = useState(props.tasks)

//   const fetchTasks =
//   return (
//     <div>Tasks</div>
//   )
// }

// Tasks.propTypes = {}

// export default Tasks

