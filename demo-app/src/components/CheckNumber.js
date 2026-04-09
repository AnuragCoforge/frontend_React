import { Component } from "react";

class CheckNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number:10,
      checknum:'click button to check the status'
    }
  }

  check=()=> {
    if(this.state.number%2 === 0) {
      this.setState({
        checknum:'even'
      })
    }
    else{
      this.setState({
        checknum:'odd'
      })
    }
  }


  render() {
    return (
      <div>
        <h1>Check Number</h1>
        <h1>Number :{this.state.number} is {this.state.checknum}</h1>
        <button onClick={this.check} class="btn btn-success">check</button>
      </div>
    );
  }
}

export default CheckNumber;