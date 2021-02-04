import React from 'react';

class GifSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            searchValue: ""
        }
    }

    handleSearchChange = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    render() {
        return(
            <form onSubmit={(event) => this.props.handleSubmit(event, this.state.searchValue)}>
                <label>Enter a Search Term:</label><br/>
                <input type="text" name="search" id="search"
                    onChange={event => this.handleSearchChange(event)}>
                    </input><br/>
                <input type="submit" value="Find Gifs"></input>
            </form>
        )
    }
}

export default GifSearch;