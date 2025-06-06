import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'


function App() {

    const [ robots, setRobots ] = useState([])
    const [ searchfield, setSearchfield ] = useState('')
    // const [ count, setCount ] = useState(0)


    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { setRobots(users) }) 
            // console.log(count)
    }, []) // only run if array is empty === only run first time 
    // }, [count]) // onlu run if count changes.


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
                {/* <button onClick={()=>setCount(count+1)}>Click Me!</button>
                <span>{count}</span> */}
                <SearchBox searchChange={ onSearchChange } />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
}

export default App;
