import React from 'react';

import './card.style.css';


export const Card = (props) => (
    <div className='card-containen'> 
        <img
            alt='monster'
            src={`https://robohash.org/${props.monster.id}?set=set2&size=120x120`}
        />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);





// // component way1
// // function App(){
// //     return <h1>Hi</h1>
// // }


// // component way2
// export const Card = props => (
//     <div className='card-container'>
//       <img
//         alt='monster'
//         src={`https://robohash.org`}

//       />
//       <h2>{props.monster.name}</h2>
//       <p>{props.monster.email}</p>

//     </div>

// );
  



// component way3
//class