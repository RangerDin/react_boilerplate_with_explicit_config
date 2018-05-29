import React from 'react';
import ReactDOM from 'react-dom';

const Application = () => (
    <div>
        Application
    </div>
);

const init = () => {
    ReactDOM.render(<Application />, document.getElementById('root'));
};

init();
