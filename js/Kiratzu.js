import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Main from './containers/Main'
import reducer from './reducers'

const store = createStore(reducer);

render( 
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementsByClassName('mainLayout')[0]
)

/*fetch('http://kiratzu.kiratzulabs.com/kiratzu/csv/my_impala_source_20170823022936.csv') // Call the fetch function passing the url of the API as a parameter
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Your code for handling the data you get from the API
    })
    .catch(function() {
        // This is where you run code if the server returns any errors
    });*/

/*fetch('http://localhost:8000/api/v1/filesdata') // Call the fetch function passing the url of the API as a parameter
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Your code for handling the data you get from the API
    })
    .catch(function() {
        // This is where you run code if the server returns any errors
    });*/

/*fetch('http://localhost:8000/csv/my_impala_source_20170823072620.csv') // Call the fetch function passing the url of the API as a parameter
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Your code for handling the data you get from the API
    })
    .catch(function() {
        // This is where you run code if the server returns any errors
    });*/