import React from "react";

export default class SearchBox extends React.Component{
    constructor(props){
        super(props);

        this.state={
            value:null
        };

        this.handleSearchText = this.handleSearchText.bind(this);
    }

    handleSearchText(event){
        this.setState({
            value: event.target.value
        })
    }
    
    render(){
        return (
            <div>
                <label>Enter a search term</label>
                <input type="text" onChange={this.handleSearchText}/>
                <h2>{this.state.value}</h2>
            </div>
        );
    }
}