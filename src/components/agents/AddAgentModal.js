import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'
import { addAgent } from '../../actions/agentAction'

const AddAgentModal = ({ addAgent }) => {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')

    const onSubmit = () => {
        if (first === '' || last === '') {
            M.toast({ html: 'Please enter a first and last name' })
        } else {
            addAgent({ first, last })

            M.toast({ html: `${first} ${last} has been successfully added` })

             // Clear Fields
             setFirst('')
             setLast('')
        }
    }

    return (
        <div id='add-agent-modal' className='modal'>
            <div className="modal-content">
                <h4>New Agent</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='first'
                            value={first}
                            onChange={e => setFirst(e.target.value)} 
                        />
                        <label htmlFor='first' className='active'>First Name</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='last'
                            value={last}
                            onChange={e => setLast(e.target.value)} 
                        />
                        <label htmlFor='last' className='active'>Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect green btn">Enter</a>
            </div>
        </div>
    )
}

AddAgentModal.propTypes ={
    addAgent: PropTypes.func.isRequired
}

export default connect(null, { addAgent })(AddAgentModal)
