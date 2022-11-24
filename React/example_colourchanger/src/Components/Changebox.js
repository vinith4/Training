const Changebox = ({color}) => {
    return(
        <center>
       <section
        className="squre"
        style={{backgroundColor : color}}>
            <p>{color ? color : "Empty Valye"}</p>
        </section>
       </center>
    )
} 

Changebox.defaultProps = {
    color: "Empty Color Value"
}
export default Changebox