import React, { Component } from 'react'
import Movie from './Movie';

class MoviesList extends Component {
    render() {
        const {data} = this.props; 
            return (
                <Movie data={this.props.data} />
            )   
        return (
            <div>
                {MoviesList}
            </div>
        )
    }
}

export default MoviesList;


