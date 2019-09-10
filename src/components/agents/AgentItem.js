import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'
import { deleteAgent } from '../../actions/agentAction'

const AgentItem = ({ agent: { id, first, last }, deleteAgent }) => {

    const onDelete = () => {
        deleteAgent(id)
        M.toast({ html: 'Agent deleted' })
    }

    return (
        <li className="collection-item">
            <div>
                {first} {last}
                <a href="#!" className='secondary-content' onClick={onDelete} >
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

AgentItem.propTypes = {
    agent: PropTypes.object.isRequired,
    deleteAgent: PropTypes.func.isRequired
}

export default connect(null, { deleteAgent })(AgentItem)
