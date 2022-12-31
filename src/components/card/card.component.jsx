// With funcional programming:
import './card.styles.css'

const Card = ( monster ) => {
    const { id, name, email, src } = monster;
    return(
        <div className='card-container' key={id}>
            <img alt={`monster ${name}`} src={src}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;



// With classes: 
// import { Component } from 'react';
// import './card.styles.css'

// class Card extends Component {
//     render() {
//         const { id, name, email, src } = this.props;
//         return(
//             <div className='card-container' key={id}>
//                 <img alt={`monster ${name}`} src={src}/>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

// export default Card;