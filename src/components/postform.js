import React from "react";

class PostForm extends React.Component {
  render() {
      return(
    <div>
      <h1>Numbers</h1>
      <form>
        <div className="numbers">
          <label>Number one</label><br/>
          <input placeholder="Enter number one" required type="number" />
        </div>
        <br />
        <div className="numbers">
          <label>Number two</label><br/>
          <input placeholder="Enter number two" required type="number" />
        </div>
        <br />
        <div className="operationPicker">
          <label>Operation</label><br/>
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
