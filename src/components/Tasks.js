
const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
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

