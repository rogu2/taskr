import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAgents } from '../../actions/agentAction'

const AgentSelectOptions = ({ getAgents, agent: { agents, loading } }) => {
    useEffect(() => {
        getAgents()
        // eslint-disable-next-line
    }, [])
    return (
        !loading && agents !== null && agents.map(a => 
            <option key={a.id} value={`${a.first} ${a.last}`}>
            {a.first} {a.last}
        </option>)
    )
}

AgentSelectOptions.propTypes = {

}

AgentSelectOptions.propTypes = {
    getAgents: PropTypes.func.isRequired,
    agent: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    agent: state.agent
})

export default connect(mapStateToProps, { getAgents })(AgentSelectOptions)
