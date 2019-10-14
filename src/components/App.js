import React from 'react';
import Main from './Main';
import Header from './Header';
import '../styles/App.css';

const style = {
    //backgroundColor: '#282c34'
}

const App = () => (
    <div className="App-header">
        <h2 style={{marginBottom: 0}} className="headerInfo pb-5">Find My Lost Sectors</h2>
        <Header />
        <Main />
    </div>
)

export default App;
