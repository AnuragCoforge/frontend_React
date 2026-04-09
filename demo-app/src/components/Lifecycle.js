import { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "swapna",
    };
    console.log("constructor loaded");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }


  componentDidUpdate() {
    console.log("updates");
  }

    componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    console.log("Render Called");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({
            name:'Anurag'
        })}>cick me</button>
      </div>
    );
  }
}
export default Lifecycle;