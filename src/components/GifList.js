import React from 'react';

class GifList extends React.Component{
    render() {
        return (
            <ul>
                {this.props.gifData.map(gif => <li><img src= {gif.images.original.url} /></li>)}    
            </ul>
        )
    }
}

export default GifList;