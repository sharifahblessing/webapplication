import React from "react"
import PostForm from "./postform";
import  "./componentcss/allresults.css";
// import Expected from "./result"

class AllResults extends  React.Component{
    state = {
        number1:'',
        number2:'',
        operation:'',
        result:'',
        totalResults:[]
      }
    handleSData = (formData) => {
        let result, tempResult;
        if(formData.operation === ''){
           return ;
        }
        if(formData.operation === 'Subtract'){
            result = parseInt(formData.number1) - parseInt(formData.number2);
        }
        if(formData.operation === 'Add'){
            result = parseInt(formData.number1) + parseInt(formData.number2);
        }if(formData.operation === 'Divide'){
            result = parseInt(formData.number1) / parseInt(formData.number2);
        }if(formData.operation === 'Multiply'){
            result = parseInt(formData.number1) * parseInt(formData.number2);
        }

        tempResult = {
            number1:formData.number1,
            number2:formData.number2,
            operation:formData.operation,
            result:result
        }
        const items = [...this.state.totalResults, tempResult];
        this.setState({
            totalResults: items
        })
        console.log(this.state.totalResults);
    }

    render(){
        const final = this.state.totalResults;
        return(
            <div className="webdisplay">
                
              <PostForm handleData={this.handleSData}/>
              <div className="resultsdisplay">
              <h1>Results</h1>
                <table className="resultsbar">
                    <thead className="tableheading">
                        <th>Number1</th>
                        <th>Number2</th>
                        <th>Response</th>
                        <th>Expected</th>
                        <th>Passed</th>
                        <th>Remove</th>
                    </thead>
                    <tbody>
                    {
                        final.map((finalresult, index)  => (
                            <tr key={index}>
                            <td>{finalresult.number1}</td>
                            <td>{finalresult.number2}</td>
                            <td>{finalresult.operation}</td>
                            <td>{finalresult.result}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                </div>
                
            </div>
        )
    }

}

export default AllResults;