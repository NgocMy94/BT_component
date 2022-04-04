import React, { Component } from 'react'
import BanerComponent from './BanerComponent.js'
import FooterComponent from './FooterComponent.js'
import HeaderComponent from './HeaderComponent.js'
import ItemComponent from './ItemComponent.js'

class HomeComponent extends Component {
  render() {
    return (
      <div  className='home'>
          
          <HeaderComponent/>
          <div className="container-xl ">
              <div className="body">
                  <BanerComponent/>
                  <ItemComponent/>
              </div>
          </div>
          <FooterComponent/>
      </div>
    )
  }
}
export default HomeComponent