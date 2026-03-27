import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Player from './components/homepage/players/Player';
import { ThreeCircles } from 'react-loader-spinner';
import Banner from './components/homepage/Banner';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';


const fetchPlayer = async () => {
  const res = await fetch('/PlayersData.json');
  return res.json();
};

function App() {
  const playerPromice = fetchPlayer();
  const [coin, setCoin] = useState(5000000);
  return (
    <>
      <header>
        <Navbar coin={coin} />
        <Banner coin={coin} setCoin={setCoin} />
      </header>

      <main>
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-20">
              <ThreeCircles height={80} width={80} color="#4fa94d" />
            </div>
          }
        >
          <Player playerPromice={playerPromice} coin={coin} setCoin={setCoin} />
        </Suspense>
      </main>
          <footer>
            <Footer></Footer>
          </footer>
      <ToastContainer />
    </>
  )
}

export default App
