import data from './data/index.js'

import './App.css'

import Header from './components/Header'
import Section from './components/Section'
import Skills from './components/Skills'
import Contact from './components/Contact'
import React from 'react'
import { artemis } from 'artemis'
import pic from './img/profile.jpeg'


const picStyle = {
  backgroundImage: `url(${pic})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
}

function App() {
  return (
    <main className={artemis('row xs-height-auto flex-col sm-height-100 xs-margin-0 background-pink')}>

      <div className={artemis('col-3 xs-col-12 center sm-margin-0 xs-margin-0 margin-2')}>
        <aside id="aside"
          className={artemis('text-x-center row vertical  xs-margin-0  height-100')}>

          {/* Photo */}

          <div className={artemis('col-2 xs-col-4 flex-col center')} id="pic" style={picStyle}>
            <img className={artemis('xs-max-height-50 xs-max-width-50 xs-min-height-50 xs-min-width-50  display-none xs-display-inline-block')} src={pic} alt="" />
          </div>

          {/* Description */}

          <div className={artemis('flex-col justify-content-flex-start background-white')} >
            <div className={artemis('justify-content-flex-start col text-gray padding-1 rounded  text-x-justify')} >
              <cite>“{data.description}”</cite>
            </div>
          </div>

          <Contact data={data} />
        </aside>
      </div>

      <div className={artemis('sm-margin-0 xs-margin-0 margin-2 col xs-col-12 row vertical xs-height-fit-content padding-left-2 xs-padding-left-0 background-white height-100')}>
            <Header data={data} />
        <div className={artemis('col')}>
            <Section headline={data.titles.lastExperience} list={data.lastExperience} />
          </div>

        <div className={artemis('col flex-row justify-content-center')}>
            <Section headline={data.titles.scholarship} list={data.diplomas} />
          </div>

        <div className={artemis('col-1')}>
            <Skills data={data} />
          </div>

        </div>
    </main>
  );
}

export default App;
