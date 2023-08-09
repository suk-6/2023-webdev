import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import '../../static/main.css';

const ContextPage = () => {
    return (
        <div className='page'>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default ContextPage;