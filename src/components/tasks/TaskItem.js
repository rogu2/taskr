import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const TaskItem = ({ task }) => {
    return (
       <li className='collection-item'>
           <div>
                <a href='#edit-task-modal' className={`modal-trigger ${task.urgent ? 'red-text' : 'blue-text'}`}>
                    {task.message}
                </a>
                <br />
               <span className='grey-text'>
                   <span className='black-text'>Task #{task.id}</span> {' '}
                   Last updated by: {' '}
                   <span className='black-text'>{task.agent}</span> on {' '}
                   <Moment format='MMMM Do YYYY, h:mm:ss a'>{task.date}</Moment>
               </span>
               <a className='secondary-content' href='#!'>
                   <i className='material-icons grey-text'>delete</i>
                </a>
           </div>
       </li>
    )
}

TaskItem.propTypes = {
    task: PropTypes.array.isRequired,
}

export default TaskItem
