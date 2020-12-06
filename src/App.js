import data from './data/index.js';

import './App.css';

import Footer from './components/Footer';
import Left from './components/Left'
import Right from './components/Right';

import { artemis } from 'artemis';

function App() {
  return (
    <main className={artemis('row vertical')}>

      <div className={artemis('col')}>

        <div className={artemis('row reverse height-100 xs-height-auto xs-column-reverse ')}>
          <div className={artemis('col xs-col-12 height-100')}>
            <Left data={data} />
          </div>

          <div className={artemis('col-9 xs-col-12')}>
            <Right data={data} />
          </div>
        </div>

      </div>

      <div className={artemis('col-1')}>
        <Footer data={data} />
      </div>

    </main>
  );
}

export default App;
