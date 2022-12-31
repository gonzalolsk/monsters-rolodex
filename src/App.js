// import { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// Functionnal programming
const App = () => {
  const [ monsters, setMonsters ] = useState([]);
  const [ filteredMonsters, setFilterMonsters ] = useState(monsters);
  const [ searchField, setSearchField ] = useState('');
  
  console.log('render')
  
  useEffect(()  => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users)
    );
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLowerCase().includes(searchField);
    })
    setFilterMonsters(newFilteredMonsters)
  }, [monsters, searchField]);


  const onSearchChange = (event) => {
  const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }


  return(
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

// With Classes
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField:'',
//     }
//   }
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((users) => this.setState(() => {
//       return { monsters: users }
//     },
//     () => {
//       console.log(this.state);
//     }
//     // .catch(err => console.log(err));
//     ))
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     })
// }
//   render(){
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster)=> {
//       return monster.name.toLowerCase().includes(searchField);
//     })
//     return (
//       <div className="App">
//       <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//           onChangeHandler={onSearchChange} 
//           placeholder='search monsters' 
//           className='monsters-search-box'
//         />
//         {/* {filteredMonsters.map((monster => {
//           return <div key={monster.id}>
//             <h1>{monster.name}</h1>
//           </div>;
//         }))} */}
//         <CardList 
//           monsters={filteredMonsters} 
//           />
//       </div>
//     );
//   }
// }

export default App;
