import React, { Component } from 'react';

class SearchContainer extends Component {
    constructor(){
        super();
        this.state = { searchTerm: ''}
    }
    onSubmit(term){
        this.setState({term});
        console.log(this.state);
        console.log(this.props);
        // this.props.onTermChange(term);
    }
    render(){
        return(
            <div className="search-container">
               <div className="search-bar">
                    <form onSubmit={e => this.onSubmit(e.target.value)}>   
                        <input type="text" name="text" placeholder="Search..." ></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default SearchContainer;