import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTaskModal = () => {
    const [message, setMessage] = useState('')
    const [urgent, setUrgent] = useState(false)
    const [agent, setAgent] = useState('')

    const onSubmit = () => {
        if (message === '' || agent === '') {
            M.toast({ html: 'To add a new task please enter a message and assign an agent' })
        } else {
            console.log(message, agent, urgent)
        }
    }

    return (
        <div id='add-task-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Add Task</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='message'
                            value={message}
                            onChange={e => setMessage(e.target.value)} 
                        />
                        <label htmlFor='message' className='active'>Add Message</label>
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

export default AddTaskModal
