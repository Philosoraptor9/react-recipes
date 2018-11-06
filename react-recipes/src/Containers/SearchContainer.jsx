import React, { Component } from 'react';

class SearchContainer extends Component {
    constructor(){
        super();
        this.state = { searchTerm: ''}
    }
    onInputChange(term){
        this.setState({term});
        this.props.onTermChange(term);
    }
    render(){
        return(
            <div className="search-container">
               <div className="search-bar">
                    <form action="#">   
                        <input type="text" name="text" placeholder="Search..." onChange={e => this.onInputChange(e.target.value)}></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default SearchContainer;