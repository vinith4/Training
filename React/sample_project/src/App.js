import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Additems from './Components/Additems';
import Searchitems from './Components/Searchitems';

import { useState } from 'react';




function App() {
    
  const [items,setItems] = useState([{
      id:1,
      checked: true,
      item: "item 1"
  },
  {
      id:2,
      checked: false,
      item: "item 2"
  },
  {
      id:3,
      checked: false,
      item: "item 3"
  }
  ]);

  const [newItem,setNewItems] = useState('')
  const [search,setSearch] = useState('')
  
  const additem =(item) =>{
    const id =items.length ? items[items.length -1].id +1:1;
    console.log=(`"hi id ${id}`);
    const mynewitem ={id,checked :false,item};
    const listitems = [...items,mynewitem];
    setItems(listitems);
    localStorage.setItem('friendslist', JSON.stringify(listitems));

  }

  const handlecheck = (id) =>{
      const listitems=items.map((item) => item.id === id ? { ...item,checked :!item.checked } :item);
      setItems(listitems);
      localStorage.setItem('friendslist', JSON.stringify(listitems));
  }

  const handledelete = (id) =>{
      
      const listitems =items.filter((item) => item.id !== id ) ;
      setItems(listitems);
      localStorage.setItem('friendslist', JSON.stringify(listitems));
  }
  
  const  handlesubmit =(e) =>{
    e.preventDefault();
    if(!newItem) return;
    additem(newItem);
    setNewItems('');
  }

    return (
      <div className="App">
        
        <Header />
        <Additems
        newItem={newItem}
        setNewItems={setNewItems}
        handlesubmit={handlesubmit}
        />
        <Searchitems
        search={search}
        setSearch={setSearch}
        />
        <Content 
        items={items.filter(item => ((item.item).toLowerCase())
        .includes(search.toLowerCase()))}
        handlecheck={handlecheck}
        handledelete={handledelete}/>
        <Footer length={items.length}/>
      </div>
    );
}

export default App;
