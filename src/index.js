import React from 'react';
import ReactDOM from 'react-dom';
import Context,{FirebaseContext} from './store/firebaseContext'
import firebase from './firebase/config'
import App from './App';

ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
        <Context>
            <App />
        </Context>
    </FirebaseContext.Provider>
, document.getElementById('root'));
