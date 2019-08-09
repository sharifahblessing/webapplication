import React from "react";

class PostForm extends React.Component {
  render() {
      return(
    <div>
      <h1>Numbers</h1>
      <form>
        <div className="numbers">
          <h2>Number one</h2>
          <input placeholder="Enter number one" required type="number" />
        </div>
        <br />
        <div className="numbers">
          <h2>Number two</h2>
          <input placeholder="Enter number two" required type="number" />
        </div>
        <br />
        <div className="operationPicker">
          <h2>Operation</h2>
          <select>
              <option value="Add">Add</option>
              <option value="Subtract">Subtract</option>
              <option value="Divide">Divide</option>
              <option value="Multiply">Multiply</option>
          </select>
        </div>
        <br />
        <button>Post</button>
      </form>
      </div>);
  }
}

export default PostForm;
