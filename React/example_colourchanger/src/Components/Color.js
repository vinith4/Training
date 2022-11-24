const Color = ({color,setColor}) => {
    return(
        <form onSubmit={ (e) => e.preventDefault()}>
        <center>
       <input
       text='text'
       autoFocus
       placeholder="Colour Name"
       required
       value={color}
       onChange={(e) => setColor(e.target.value)}
       
       ></input>
       </center>
       </form>
    )
} 
export default Color