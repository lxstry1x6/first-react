import React from 'react';

function Weather(props) {
    return (
        <div
        style={{
            width: '120px',
            color: 'white',
            borderRadius: '10px',
            textAlign: 'center',
            backgroundColor: 'grey',
            padding: '10px',
            margin: '10px',
        }}>
            <h3>Moscow</h3>
            <h3>37</h3>o<sup>C</sup>
            <img src='https://img.icons8.com/ios-glyphs/90/snow.png'/>
        </div>
    );
}

export default Weather;