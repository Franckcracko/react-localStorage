import TaskRow from "../TaskRow/TaskRow"

const TaskTable = ({ taskItems, toggleTask, doneValue }) => {

  const taskTableRows = (doneValue) => {
    return (
      taskItems
        .filter(task => task.done === doneValue)
        .map(task => (
          <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
        ))
    )
  }
  return (
    <table className='table table-dark table-striped table-bordered border-secondary'>
      <thead>
        <tr className='table-primary'>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRows(doneValue)
        }
      </tbody>
    </table>
  )
}
export default TaskTable