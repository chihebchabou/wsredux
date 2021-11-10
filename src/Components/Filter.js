import React from 'react'
import { useDispatch } from 'react-redux';
import { filter } from '../redux/actions';

const Filter = () => {
    const dispatch = useDispatch()
    return (
        <div className="add">
            <button onClick={()=>dispatch(filter("All"))} inverted color='violet'>
        All
      </button>
      <button onClick={()=>dispatch(filter("Done"))}  inverted color='purple'>
        Done
      </button>
      <button onClick={()=>dispatch(filter("unDone"))} inverted color='pink'>
        Not Done
      </button> 

        </div>
            )
        }
        
        export default Filter