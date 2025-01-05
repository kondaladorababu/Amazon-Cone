import React from 'react';
import '../common/Spinner.css';

function Spinner() {
    return (
        <div className='spinner'>

            <svg class="loader" viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg">
                <circle
                    class="active"
                    pathLength="360"
                    fill="transparent"
                    stroke-width="32"
                    cx="192"
                    cy="192"
                    r="176"
                ></circle>
                <circle
                    class="track"
                    pathLength="360"
                    fill="transparent"
                    stroke-width="32"
                    cx="192"
                    cy="192"
                    r="176"
                ></circle>
            </svg>
            <p>Loading Products.... Please wait</p>

        </div>
    )
}

export default Spinner
