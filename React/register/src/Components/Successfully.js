import React,{useState} from "react"
import "./Successfully.css";

const Successfully =() =>{

    const [modal,setModel] = useState(false);

    const toggleModal = () =>{
        setModel(!modal)
    }

    return(
       <>
       <button onClick={toggleModal}
        className ="btn-modal"></button>
        
       </> 
    )
}

export default Successfully