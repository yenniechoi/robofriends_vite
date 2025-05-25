import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'

// Define a class component
// (+) Class components allow you to use state and lifecycle methods.
// = smart component
class App extends Component {

    // The constructor runs when the component is first created.
    // It sets the initial state of the component.
    constructor() {
        // Call the parent class constructor
        // Required to access 'this' in the constructor.
        super();

        // Set the initial state of the app
        // (+) The 'state' is an object that holds data that can change.
        // (+) When the state changes, the component re-renders.
        this.state = {
            robots: [],
            searchfield: '',      // Stores the user's search input
        };
    }

    componentDidMount() {
        // take the full list of robot objects (fake json list) 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))    // update state -> render()
        // .then(users => {})    // update state -> render()
    }

    // Triggered whenever the search input changes
    onSearchChange = (event) => {
        // Update the searchfield in the state with the new input
        this.setState({ searchfield: event.target.value });
    };

    // The 'render()' method returns the UI (JSX) for this component.
    // It runs every time the component's state or props change.
    render() {
        const { robots, searchfield } = this.state;

        // Filter robots based on the searchfield input (case-insensitive)
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

                    {/* Pass the event handler as a prop to the SearchBox */}
                    <SearchBox searchChange={this.onSearchChange} />

                    <Scroll>
                        {/* Pass the filtered robot list as a prop to the CardList */}
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;
