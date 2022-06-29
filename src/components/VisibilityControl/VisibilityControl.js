const VisibilityControl = ({ setShowComplete, cleanTasks, isChecked }) => {
    const hendleDelete = () => {
        if (window.confirm('Estas seguro de querer eliminarlo?')) {
            cleanTasks()
            setShowComplete(false)
        }
    }
    return (
        <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
            <div className='form-check form-switch'>
                <input type='checkbox'
                    className='form-check-input'
                    checked={isChecked}
                    onChange={e => setShowComplete(e.target.checked)} />
                <label> Muestra Tareas Hechas</label>
            </div>
            <button className='btn btn-danger btn-sm' onClick={hendleDelete}>
                Limpiar
            </button>
        </div>
    )
}
export default VisibilityControl