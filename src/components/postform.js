import React from "react";
// import AllResult from "./result"
class PostForm extends React.Component {
  state = {
    number1:'',
    number2:'',
    operation:''
  }

  submitArithmeticOperation = (e) => {
    e.preventDefault();
   this.props.handleData(this.state);
   
  }
  onChangeHandler = e => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  
  render() {
    const {number1, number2, operation} = this.state;
      return(
    <div>
      <h1>Numbers</h1>
      <form >
        <div className="numbers">
          <label>Number one</label><br/>
          <input name="number1" onChange={this.onChangeHandler} value={number1} placeholder="Enter number one"  type="number" />
        </div>
        <br />
        <div className="numbers">
          <label>Number two</label><br/>
          <input name="number2" onChange={this.onChangeHandler} value={number2} placeholder="Enter number two"  type="number" />
        </div>
        <br />
        <div className="operationPicker">
          <label>Operation</label><br/>
          <select name="operation" onChange={this.onChangeHandler} value={operation}>
              <option val="" >choose ...</option>
              <option val="Add" >Add</option>
              <option val="Subtract">Subtract</option>
              <option val="Divide">Divide</option>
              <option val="Multiply">Multiply</option>
          </select>
        </div>
        <br />
        <button type="submit" onClick={this.submitArithmeticOperation}>Post</button>
      </form>
        {/* <h4>Results</h4> */}
      {/* <AllResult result={this.submitArithmeticOperation}></AllResult> */}
      </div>);
  }
}

export default PostForm;
