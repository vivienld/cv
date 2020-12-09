import data from './data/index.js'

import './App.css'

import Left from './components/Left'
import Header from './components/Header'
import Section from './components/Section'
import Skills from './components/Skills'

import { artemis } from 'artemis';

function App() {
  return (
    <main className={artemis('margin-2 flex-col height-100 xs-height-fit-content xs-margin-0')}>

      <div className={artemis('row xs-height-auto height-100')}>
        <div className={artemis('col-3 xs-col-12 center')}>
            <Left data={data} />
          </div>

        <div className={artemis('col xs-col-12 row vertical height-100 xs-height-fit-content padding-left-2 xs-padding-left-0')}>
            <Header data={data} />
          <div className={artemis('col')}>

            <Section headline={data.titles.lastExperience} list={data.lastExperience} />
          </div>

          <div className={artemis('col flex-col justify-content-center')}>

            <Section headline={data.titles.scholarship} list={data.diplomas} />
          </div>

          <div className={artemis('col-1')}>

            <Skills data={data} />
          </div>

        </div>
      </div>  
    </main>
  );
}

export default App;
