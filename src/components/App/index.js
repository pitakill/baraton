import React from 'react';

import Dropdown from '../Dropdown';
import Products from '../Products';
import Shopcart from '../Shopcart';
import storageService from '../../storage';

// import data this is because we don't have a backend service with the info
import categories from '../../api/categories.json';
import products from '../../api/products.json';

const cleanPrice = price => price.replace(/\$|,/g, '');

class App extends React.Component {
  state = {
    categories: [],
    filteredProducts: [],
    products: [],
    shoppingCart: [],
  }

  componentDidMount() {
    // We don't have a backend server for this to load async with Fetch or Axios
    // but we can emulate that with an import in this component lifecycle method
    setTimeout(
      () => this.setState({...categories, ...products, filteredProducts: products.products}),
      // We emulate a 200ms response from the server
      200
    );

    this.setState({
      shoppingCart: storageService.hasElements() ? storageService.get() : []
    });
  }

  // Type: byId, byRange, byStock
  // If id, only those with sublevel matching
  // If range, a 2 position array with the range
  // If stock by asc or desc order
  filterProducts = ({type, filter}) => {
    this.setState(prevState => {
      // Copy the products array because the filter sort method rearrange in
      // place, (ie) does not delivers a new array
      const filteredProducts = [...this.state.products];

      if (type === 'byId') {
        return {
          filteredProducts: filteredProducts.filter(
            product => product.sublevel_id === filter
          )
        }
      }

      // Verify if the filter parameter is 'asc' or 'desc'
      if ((type === 'byStock') && (filter === 'asc' || filter === 'desc')) {
        filteredProducts.sort((firstEl, secondEl) => {
          return firstEl.quantity - secondEl.quantity
        })

        if (filter === 'asc') return {filteredProducts};

        filteredProducts.reverse();

        return {filteredProducts};
      }

      if (type === 'byRange' && Array.isArray(filter)) {
        return {
          filteredProducts: filteredProducts.filter(element => {
            const price = parseInt(cleanPrice(element.price), 10);

            return filter[0] < price && price < filter[1];
          })
        }
      }

      return {filteredProducts};
    });
  }

  addItemShoppingCart = item => {
    this.setState(prevState => {
      const items = [...prevState.shoppingCart];

      items.push(item)
      return {shoppingCart: items};
    }, () => storageService.set(this.state.shoppingCart));
  }

  render() {
    const {categories, filteredProducts, shoppingCart} = this.state;

    return (
      <div className="container mx-auto max-w-full">
        <Shopcart
          items={shoppingCart}
        />
        <Dropdown
          action={this.filterProducts}
          categories={categories}
          title="Categorías"
        />
        <Products
          action={this.addItemShoppingCart}
          items={filteredProducts}
        />
      </div>
    );
  }
}

export default App;
