import React from 'react';
import styled from 'styled-components';
import Banner from './components/Banner/Banner';
import Benefits from './components/Benefits/Benefits';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import IFeruemDesc from './components/IFeruemDesc/IFeruemDesc';
import RoadMap from './components/RoadMap/RoadMap';
import SideBar from './components/SideBar/SideBar';
import WalletConnect from './components/WalletConnect/WalletConnect';

const Wrap = styled.div`
  background: url(${require('./assets/bg.jpg')}) 0 0 / cover;
  height: 100%;
`

function App() {
  const [lang, setLang] = React.useState('en')
  const [showDD, setShowDD] = React.useState(false)

  const [loaderState, setloaderState] = React.useState(false)

  function headerClicks(){
    setShowDD(false)
  }

  return (
    <Wrap onClick={() => headerClicks()}>
      <SideBar/>
      <Header lang={lang} setLang={setLang} setShowDD={setShowDD} showDD={showDD}/>
      <Banner/>
      <Benefits/>
      <WalletConnect/>
      <IFeruemDesc/>
      <RoadMap/>
      <Footer/>
    </Wrap>
  );
}

export default App;
