import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AgentItem from './AgentItem'
import { getAgents } from '../../actions/agentAction'

const AgentListModal = ({ getAgents, agent: { agents, loading } }) => {
    useEffect(() => {
        getAgents()
        // eslint-disable-next-line
    }, [])

    return (
       <div id="agent-list-modal" className='modal'>
            <div className="modal-content">
                <h4>Available Agents</h4>
                <ul className='collection'>
                    {!loading && 
                        agents !== null && 
                        agents.map(agent => <AgentItem agent={agent} key={agent.id} />
                    )}
                </ul>
            </div>
       </div>
    )
}

AgentListModal.propTypes = {
    agent: PropTypes.object.isRequired,
    getAgents: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    agent: state.agent
})

export default connect(mapStateToProps, { getAgents })(AgentListModal)
