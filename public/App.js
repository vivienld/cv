import data from './data/index.js';

import './img/profile.jpeg'
import './App.css';

import Aside from './components/Aside'
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Header data={data} />
      <Aside
        defaultText="N'hésitez pas à me contacter pour plus de renseignements"
        data={data}
      />
      <Footer data={data} />
    </main>
  );
}

export default App;
