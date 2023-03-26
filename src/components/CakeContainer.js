import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

//to use the state as a props we map the state to get the appropriate properties
//this allows to use the redux function as a prop
const mapToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

//it alows to map the action creators to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

//now we will use the connect function to connect the react component with the store and make the function we made available to component as props
export default connect(mapToProps, mapDispatchToProps)(CakeContainer);
