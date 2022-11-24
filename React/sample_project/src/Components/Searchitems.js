import {FaSearch} from 'react-icons/fa'

const Searchitems = ({search,setSearch }) =>{
    return(
        <form className='searchFrom' onSubmit={(e) => e.preventDefault()}>
            <lable html='search'></lable>
            <input   
               id='search'
               type='text'
               role='searchbox'
               placeholder="Search Items"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
            <button
           type='search'
           aria-label="Search Item"
        >
            <FaSearch />
        </button>
        </form>
    )
}

export default Searchitems