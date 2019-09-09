import React, { useState, useEffect } from 'react'
import AgentItem from './AgentItem'

const AgentListModal = () => {
    const [ agents, setAgents ] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAgents()
        // eslint-disable-next-line
    }, [])

    const getAgents = async () => {
        setLoading(true)
        const res = await fetch('/agents')
        const data = await res.json()

        setAgents(data)
        setLoading(false)
    }
    
    return (
       <div id="agent-list-modal" className='modal'>
            <div className="modal-content">
                <h4>Agent List</h4>
                <ul className='collection'>
                    {!loading && agents.map(agent => (
                        <AgentItem agent={agent} key={agent.id} />
                    ))}
                </ul>
            </div>
       </div>
    )
}

export default AgentListModal
