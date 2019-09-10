import React, { useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchTasks } from '../../actions/taskActions'

const Search = ({ searchTasks }) => {
    const text = useRef('')
    
    const onChange = e => {
        searchTasks(text.current.value)
    }

    return (
        <nav style={{ marginbottom: '30px' }} className='green' >
            <div className='nav-wrapper'>
                <form>
                    <div className='input-field'>
                        <input id='search' type='search' placeholder='Search...' ref={text} onChange={onChange} />
                        <label className='label-icon' htmlFor='search'> 
                            <i className='material-icons'>search</i>
                        </label>
                        <i className='material-icons'>close</i>

                    </div>
                </form>
            </div>
        </nav>
    )
}

Search.propTypes = {
    searchTasks: PropTypes.func.isRequired
}

export default connect(null, { searchTasks }) (Search)
