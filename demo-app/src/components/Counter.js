import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    inc=()=> {
        this.setState({
            count:this.state.count+1
        })
    }
    
    dec=()=> {
        if(this.state.count<=0) {
            this.setState({count:0})
        }
        else{
            this.setState({
            count:this.state.count-1
        })
        }
        
    }

    render() {
        return(
            <div class="d-flex flex-column gap-3 justify-content-center align-items-center shadow-lg">
            <h1>Count: {this.state.count}</h1>
            <button class="btn btn-primary" onClick={this.inc}>Increment</button>
            <button class="btn btn-primary" onClick={this.dec}>Decrement</button>

            <button class="btn btn-primary" onClick={()=>this.setState({count:this.state.count+1})}>Arrow Increment</button>
            <button class="btn btn-primary" onClick={()=>this.setState({count:this.state.count-1})}>ArrowDecrement</button>
            <button class="btn btn-primary" onClick={()=>this.setState({count:0})}>Arrow reset</button>
        </div>
        )
        
    }
}
export default Counter;