import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
    constructor() {
        super()
        this.state = {
            gifData: []
        }
    }

    // componentDidMount() {
    //     fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=wmEWMQK9OAQFs0MZFzs73ki7Cookl61a&rating=g')
    // }

    handleSubmit = (event, searchValue) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=wmEWMQK9OAQFs0MZFzs73ki7Cookl61a&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifData: data.data.slice(0, 3)
            })
        })
    }

    render() {
        return(
            
            <div>
                <GifList gifData={this.state.gifData}/>
                <GifSearch handleSubmit={this.handleSubmit}/>   
            </div>
            
        )
    }
}

export default GifListContainer;