import data from './data/index.js'

import './App.css'

import Footer from './components/Footer'
import Left from './components/Left'
import Header from './components/Header'
import Section from './components/Section'
import Skills from './components/Skills'

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
            <Header data={data} />

            <Section headline={data.titles.lastExperience} list={data.lastExperience} />

            <Section headline={data.titles.scholarship} list={data.diplomas} />

            <Skills data={data} />
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
