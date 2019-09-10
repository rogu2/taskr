import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TaskItem from './TaskItem'
import { getTasks } from '../../actions/taskActions'
import PropTypes from 'prop-types'
import Preloader from '../layout/Preloader'

const Tasks = ({ task: { tasks, loading }, getTasks }) => {

    useEffect(() => {
        getTasks()
        // eslint-disable-next-line
    }, [])
    
    if (loading || tasks === null) {
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

Tasks.propTypes = {
    task: PropTypes.object.isRequired,
    getTasks: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    task: state.task
})

export default connect(mapStateToProps, { getTasks })(Tasks)
