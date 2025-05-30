import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'


function App() {

    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: '',
    //     };
    // }

    const [ robots, setRobots ] = useState([])
    const [ searchfield, setSearchfield ] = useState('')

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({ robots: users }))    // update state -> render()
    // }


    const onSearchChange = (event) => {
        setSearchfield( event.target.value )
    };

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ?
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <h2>Loading...</h2>
            </div>
        ) :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
}

export default App;
