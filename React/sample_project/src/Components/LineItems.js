import { FaTrashAlt } from 'react-icons/fa'

const LineItems= ({item,handlecheck,handledelete}) =>{
    return(
        <li className="item" >
            <input 
            type="checkbox"
            onChange={() => handlecheck(item.id)}
            checked={item.checked}
            />
            <lable
                onDoubleClick={() => handlecheck(item.id)}
            > {item.item}</lable>
            <FaTrashAlt 
            onClick={() => handledelete(item.id)}
            role = "button" 
            tabIndex ="0"  
            aria-label={`Delete ${item.item}`}
            /> 
        </li>
    )
}

export default LineItems