import { useEffect, useState } from 'react';
import './App.scss';
import { BlockAbout } from './components/BlockAbout';
import { Blog } from './components/Blog';
import { Feedbacks } from './components/Feedbacks';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form';
import { InfoBlock } from './components/InfoBlock';
import { Infographics } from './components/Infographics';
import { Loading } from './components/Loading';
import {NavBar} from './components/NavBar';
import ProgressBar from './components/ProgressBar/ProgressBar';
import { ServiceBlock } from './components/ServiceBlock';
import { Shop } from './components/Shop';
import { TwentyBlock } from './components/TwentyBlock';









function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000);
  }, [])
  
  return (
    <>

      {isLoading ? <Loading />: 
      <>  
      <ProgressBar 
      height="8px"
      background="#37806B"
      position="fixed"
      z-index="100"
      />
      <NavBar />
      <InfoBlock />
      <ServiceBlock />
      <BlockAbout />
      <TwentyBlock />
      <Infographics />
      <Feedbacks />
      <Blog />
      <Shop />
      <Form />
      <Footer /></>
      }
    </>
  );
}

export default App;
