
import ItemList from './Itemslist'

const Content =({items,handlecheck,handledelete}) =>{
        
    return (  
        <main>
           
            {items.length  ? (   
                <ItemList 
                items={items}
                handlecheck={handlecheck}
                handledelete={handledelete}
                />
            ):(
                
            <p style ={{ marginTop: '2rem' }} >vinith has no  frd</p>
            )}
        </main>
    )
}

export default Content

