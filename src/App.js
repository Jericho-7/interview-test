import React, { Component } from 'react';

import Collection from './Collection.js';
import Pagination from './Pagination.js';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      pagination: {},
    };

    // binded functions so they could be called from another component
    this.nextResults = this.nextResults.bind(this);
    this.prevResults = this.prevResults.bind(this);
  }

  loadData = (page = 1) => {
    fetch("http://www.deindeal.ch/api/public/v2/data/search?p=" + page +"&q=rot")
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        // added pagination object to state
        this.setState({
          pagination: json.pagination,
          results: json.results
        });
      }).catch(function (error) {
        console.log('error', error)
      });
  };

  componentDidMount = () => {
    this.loadData();
  }

  nextResults = (page) => {
    this.loadData(page);
  }

  prevResults = (page) => {
    this.loadData(page);
  }

  render = () => {

    var collectionBoxes = this.state.results.map(function (result, index) {

      return <Collection key={index}
                title={result.formatted.title}
                secondaryTitle={result.formatted.secondaryTitle}
                coverImage={result.images.cover}
                price={result.formatted.price}
                value={result.formatted.value}
                discountPercent={result.discountPercentage + "%"}
                showPrice={result.showPrice}
                showDiscount={result.showDiscount}
                showValue={result.showValue} />
    });

    // extracting the params for Pagination component
    var { next, previous, showNext, showPagination, showPrevious } = this.state.pagination; 
    return (
      <div className="App">
        <h2 className="heading">Search Results</h2>
        <div className="nav">
          {showPagination && 
            <Pagination showNext={showNext}
                        nextResults={this.nextResults}
                        next={next}
                        showPrevious={showPrevious}
                        previousResults={this.prevResults}
                        previous={previous}
                        />
          } 
        </div>
        <div className="collections">
          {collectionBoxes}
        </div>
      </div>
    );
  }
}

export default App;