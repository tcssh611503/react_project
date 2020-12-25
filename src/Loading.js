import React from 'react';

// const Loading = () => <h2>Loading</h2>;  //way1
// export default Loading; //way1

//props 
// const Loading = (props) => <h2>{props.message}</h2>; //way3
// export default Loading; //way3

const Loading = ({message}) => <h2>{message}</h2>; //way4
export default Loading; //way4

// export const Loading = () => <h2>Loading</h2>; //way2