import React from 'react'
import PropTypes from 'prop-types'

const AgentItem = ({ agent }) => {
    const { first, last } = agent

    return (
        <li className="collection-item">
            <div>
                {first} {last}
                <a href="#!" className='secondary-content'>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

AgentItem.propTypes = {
    agent: PropTypes.object.isRequired
}

export default AgentItem
