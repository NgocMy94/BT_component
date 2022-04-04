import React, { Component } from 'react'

class BanerComponent extends Component {
  render() {
    return (
      <div className='col-12 baner'>
         <div className="container-xl">
           <h1>A warm welcome!</h1>
           <p>Bootstrap utility classes are used to create this jumbotron since the old <br></br> component has been removed from the framework. Why create custom CSS when <br /> you can use utilities?</p>
           <button>Call to action</button>
         </div>
      </div>
    )
  }
}
export default BanerComponent