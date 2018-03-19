import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/store'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
