import './App.css';
import TaskCreator from './components/TaskCreator/TaskCreator';
import { useState, useEffect } from 'react'
import TaskTable from './components/TaskTable/TaskTable';
import VisibilityControl from './components/VisibilityControl/VisibilityControl'
import { Container } from './components/Container/Container'
function App() {

  const [taskItems, setTaskItems] = useState([])
  const [showComplete, setShowComplete] = useState(false)

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  const cleanTasks = () => {
    setTaskItems(taskItems.filter(task => !task.done))
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  const createTask = (props) => {
    if (!taskItems.find(task => task.name === props)) {
      setTaskItems([...taskItems, { name: props, done: false }])
    }
  }
  const toggleTask = task => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t)
    )
  }
  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createTask={createTask} />
        <TaskTable doneValue={false} taskItems={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showComplete}
          cleanTasks={cleanTasks}
          setShowComplete={(checked) => setShowComplete(checked)}
        />
        {
          showComplete === true &&
          <TaskTable doneValue={showComplete} taskItems={taskItems} toggleTask={toggleTask} />
        }
      </Container>
    </main>
  );
}

export default App;
