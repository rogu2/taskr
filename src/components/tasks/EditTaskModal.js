import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateTask } from '../../actions/taskActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditTaskModal = ({ current, updateTask }) => {
    const [message, setMessage] = useState('')
    const [urgent, setUrgent] = useState(false)
    const [agent, setAgent] = useState('')

    useEffect(() => {
        if (current) {
            setMessage(current.message)
            setUrgent(current.urgent)
            setAgent(current.agent)
        }
    }, [current])

    const onSubmit = () => {
        if (message === '' || agent === '') {
            M.toast({ html: 'To add a new task please enter a message and assign an agent' })
        } else {
            const changeTask = {
                id: current.id,
                message,
                urgent,
                agent,
                date: new Date()
            }

            updateTask(changeTask)
            M.toast({ html: 'Task successfully updated' })

            // Clear Fields
            setMessage('')
            setUrgent(false)
            setAgent('')
        }
    }

    return (
        <div id='edit-task-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Edit Task</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='message'
                            value={message}
                            onChange={e => setMessage(e.target.value)} 
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className="input-field">
                        <select
                            name='agent' 
                            value={agent} 
                            className='browser-default' 
                            onChange={e => setAgent(e.target.value)}
                        >
                            <option value='' disabled>Select Agent</option>
                            <option value='John Doe' >John Doe</option>
                            <option value='Ned Stark' >Ned Stark</option>
                            <option value='Theon Greyjoy' >Theon Greyjoy</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className='filled-in'
                                    checked={urgent}
                                    value={urgent}
                                    onChange={e => setUrgent(!urgent)} />
                                <span>Urgent!</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect green btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

EditTaskModal.propTypes = {
    current: PropTypes.object,
    updateTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.task.current
})

export default connect(mapStateToProps, { updateTask }) (EditTaskModal)
