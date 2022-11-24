import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'

const Additems =({newItem,setNewItems,handlesubmit}) =>{
    const inputRef={useRef}
    return(
        <form className='addform' onSubmit={handlesubmit}>
        <lable htmlFor='addItem'></lable>
        <input 
           autoFocus
           ref={inputRef}
           id='addItem'
           typr='text'
           placeholder="Add Item"
           required
           value={newItem}
           onChange={(e) => setNewItems(e.target.value)}
        />
        <button
           type='submit'
           aria-label="Add Item"
           onClick={() => inputRef.current.focus() }
        >
            <FaPlus />
        </button>
        </form>
    )
}

export default Additems 