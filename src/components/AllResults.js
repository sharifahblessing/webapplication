import React from "react"
import Result from "./result"

class AllResults extends  React.Component{

    render(){
        return(
            <div>
                <h1>Results</h1>
                <div className="resultsbar">
                    <label>Number 1</label>
                    <label>Number 2</label>
                    <label>Response</label>
                    <label>Expected</label>
                    <label>Passed</label>
                    <label>Remove</label>
                </div>
                <div>
                   <Result/>
                </div>
                
            </div>
        )
    }

}

export default AllResults;