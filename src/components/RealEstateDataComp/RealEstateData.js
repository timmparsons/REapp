import React from 'react';
import RealEstateSearch from './RealEstateSearch'
// const url = 'https://api.gateway.attomdata.com/propertyapi/v1.0.0'

class RealEstateData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: '',
      address: '',
      id: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    this.setState({
      zipcode: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      zipcode: this.state.zipcode
    })
    fetch(`https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=${this.state.zipcode}&page=1&pagesize=100`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'apiKey': 'cffa697be9d767583e0ecc8cf6f32b87'
      }
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data.property[2].address.oneLine)
      this.setState({
        address: data.property
      })
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Zipcode here:</label>
          <input value={this.state.zipcode} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        {this.state.address ? this.state.address.map((data, index) => 
          <RealEstateSearch key={index} address={data}/>
        ) : "No data"}
      </div>
    )
  }
}

export default RealEstateData;


// fetchData() {
//   fetch(`https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=${this.state.zipcode}&page=1&pagesize=100`
//     , {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'apiKey': 'cffa697be9d767583e0ecc8cf6f32b87'
//     }
//   })
//   .then(res => res.json())
//   .then((data) => {
//     this.setState({
//       zipcode: '',
//       address: {data}
//     })
//     console.log(data)
//   })
//   .catch(error => console.log(error))
// }