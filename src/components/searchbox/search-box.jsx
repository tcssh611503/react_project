import React from 'react';

import './search-box.style.css';

// component way1
// function App(){
//     return <h1>Hi</h1>
// }


// component way2
export const SearchBox = ({ placeholder,handleChange }) => (
    <input
     className='search-box'
     type='search'
     placeholder={placeholder}
     onChange={handleChange}
    
    
    
    />

);





// export const SearchBox = props => {
//     <input
//      className='search-box'
//      type='search'
//      placeholder='search monsters'
//      onChange={this.props.onSearchChange}
    
    
    
//     />

// };
// component way3
//class