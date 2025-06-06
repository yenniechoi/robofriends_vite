import React from 'react';

// const Card = (props) => {
const Card = ({ id, name, email }) => {
    // const { id, name, email } = props
    return (
        <div className='tc bg-light-green br3 pa3 ma2 dib grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;