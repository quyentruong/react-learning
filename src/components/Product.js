import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
              <img src="https://images-na.ssl-images-amazon.com/images/I/41jUosGQiDL.jpg" alt="iphone 6"/>
              <div className="caption">
                  <h3>Iphone 6</h3>
                  <p>
                      16.000.000 VND
                  </p>
                  <p>
                      <a href="https://google.com" className="btn btn-primary">Mua Hàng</a>
                  </p>
              </div>
          </div>
      </div>
    );
  }
}

export default Product;
