

import React from 'react'
import Nav from './components/Nav';
import GifExpertApp from './components/GifExpertApp';
import Footer from './components/Footer';


const App = ({ message, title, property }) => {
    return (
        <>
            <Nav message={message} />
            <GifExpertApp title={title} />
            <Footer property={property} />
        </>
    )
}

export default App;