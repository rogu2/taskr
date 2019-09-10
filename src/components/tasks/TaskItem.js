import React from 'react'
import { connect } from 'react-redux'
import { deleteTask, setCurrent } from '../../actions/taskActions'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'

const TaskItem = ({ task, deleteTask, setCurrent }) => {
    const { id, date, message, urgent, agent } = task

    const onDelete = () => {
        deleteTask(id)
        M.toast({ html: 'Task has been deleted' })
    }

    return (
       <li className='collection-item'>
           <div>
                <a 
                    href='#edit-task-modal' 
                    className={`modal-trigger ${urgent ? 'red-text' : 'blue-text'}`}
                    onClick={() => setCurrent(task)}>
                {message}
                </a>
                <br />
               <span className='grey-text'>
                   <span className='black-text'>Task #{id}</span> {' '}
                   Last updated by: {' '}
                   <span className='black-text'>{agent}</span> on {' '}
                   <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
               </span>
               <a className='secondary-content' href='#!' onClick={onDelete}>
                   <i className='material-icons grey-text'>delete</i>
                </a>
           </div>
       </li>
    )
}

TaskItem.propTypes = {
    task: PropTypes.array.isRequired,
    deleteTask: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}

export default connect(null, { deleteTask, setCurrent })(TaskItem)
