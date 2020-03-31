import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header/';
import Footer from './components/footer';
import Skills from './components/skills';
import SectionTitle from './components/SectionTitle';
import { Helmet } from 'react-helmet';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Helmet>
                    <title>KC | CV</title>
                    <link
                        rel="shortcut icon"
                        href={require('./assets/favicon.ico')}
                    />
                </Helmet>
                <Header />
                <div className="img-container">
                    <img
                        className="img-background"
                        alt="me"
                        src={require('./assets/kc.png')}
                    />
                </div>
                <div
                    style={{
                        boxSizing: 'border-box',
                        height: 'auto',
                        padding: '20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <SectionTitle title="In developing applications I use ..." />
                    <Skills />
                </div>
                <span className="divider" />
                <div
                    style={{
                        boxSizing: 'border-box',
                        height: 'auto',
                        padding: '20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <SectionTitle title="I have experience developing ..." />
                </div>
                <span className="divider" />
                <div
                    style={{
                        boxSizing: 'border-box',
                        height: 'auto',
                        padding: '20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <SectionTitle title="Want to develop something? contact me ..." />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
