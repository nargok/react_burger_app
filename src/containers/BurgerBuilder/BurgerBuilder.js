import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Buger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };

  render() {
    return (
      <Aux>
        <Buger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>      
    )
  }
}

export default BurgerBuilder;
