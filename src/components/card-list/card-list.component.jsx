// With funcional programming
import Card from '../card/card.component';
import './card-list.styles.css'

const CardList = ( { monsters } ) => (
        <div className='card-list'>
            {monsters.map(monster => { 
                const { name, email, id } = monster;
                return(
                    <Card 
                        id={id}
                        name={name}
                        email={email}
                        key={id}
                        src={`https://robohash.org/${id}?set=set2&size=180x180`}
                    />
                )
            })}
        </div>
    )
export default CardList;


// With classes
// import { Component } from 'react';
// import Card from '../card/card.component';
// import './card-list.styles.css'

// class CardList extends Component {
//     render(){
//         const { monsters } = this.props;
//         return(
//             <div className='card-list'>
//                 {monsters.map(monster => { 
//                     const { name, email, id } = monster;
//                     return(
//                         <Card 
//                             id={id}
//                             name={name}
//                             email={email}
//                             key={id}
//                             src={`https://robohash.org/${id}?set=set2&size=180x180`}
//                         />
//                     )
//                 })}
//             </div>
//         )
//     }
// }
// export default CardList;