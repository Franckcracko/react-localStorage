import { useState } from 'react'
const TaskCreator = ({ createTask }) => {

    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmmit = (e) => {
        e.preventDefault();
        createTask(newTaskName)
        setNewTaskName('')
    }
    return (
        <form onSubmit={handleSubmmit} className='my-2 row'>
            <div className='col-9'>
                <input
                    type='text'
                    placeholder='Escribe una nueva Tarea'
                    value={newTaskName}
                    onChange={(e) => { setNewTaskName(e.target.value) }}
                    className='form-control'
                />
            </div>
            <div className='col-3'>
                <button className='btn btn-primary btn-sm'>Save Task </button>
            </div>
        </form>
    )
}
export default TaskCreator