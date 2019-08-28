import React, { useState, useEffect } from 'react'
import TaskItem from './TaskItem'
import Preloader from '../layout/Preloader'

const Tasks = () => {
    const [ tasks, setTasks ] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getTasks()
        // eslint-disable-next-line
    }, [])

    const getTasks = async () => {
        setLoading(true)
        const res = await fetch('/tasks')
        const data = await res.json()

        setTasks(data)
        setLoading(false)
    }
    
    if (loading) {
        return <Preloader />
    }
    
    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>Tasks</h4>
            </li>
            {!loading && tasks.length === 0 ? 
            (<p className='center'>No tasks...</p>)
            : (tasks.map(task => <TaskItem task={task} key={task.id} />)) }

        </ul>
    )
}

export default Tasks
