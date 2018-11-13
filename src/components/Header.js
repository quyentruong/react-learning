import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
          <div className="container-fluid">
              <a href="https://google.com" className="navbar-brand">Bai 2</a>
              <ul className="nav navbar-nav">
                  <li>
                      <a href="https://google.com">Trang chủ</a>
                  </li>
                  <li className="active">
                      <a href="https://google.com">Danh mục sản phẩm</a>
                  </li>
              </ul>
          </div>
      </nav>
    );
  }
}

export default Header;
