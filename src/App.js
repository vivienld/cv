import data from './data/index.js'

import { artemis } from 'artemis'
import './App.css'
import pic from './img/profile.jpeg'

import React from 'react'

import Header from './components/Header'
import Section from './components/Section'
import Skills from './components/Skills'

const picStyle = {
  backgroundImage: `url(${pic})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center 0',
  minHeight: 200
}

function App() {
  return (
    <main className={artemis('row height-100 flex-column xs-margin-0 padding-2')}>

      <div className={artemis('col-3 xs-col-12 center xs-margin-0 ')}>
        <aside id="aside"
          className={artemis('text-x-center row vertical  xs-margin-0  height-100')}>

          {/* Photo */}

          <div className={artemis('col-2 xs-col-4 flex-column center position-relative')} id="pic" style={picStyle}>
          </div>

          {/* Description */}

          <div className={artemis('col flex-column justify-content-flex-start background-white')} >
            <div className={artemis('justify-content-flex-start col text-gray padding-1 rounded  text-x-justify')} >
              <cite>“{data.description}”</cite>
            </div>
          </div>

          <div className={artemis('height-100 xs-height-fit-content row vertical')}>

            {
              data.infos.map((c, i) => (
                <div className={artemis("cursor-pointer background-indigo-hover text-white-hover col flex-column center padding-1")}>
                  <a href={c.link} className={artemis('decoration-none text-inherit width-100')} >
                    <div className={[c.icon, artemis('')].join(' ')}></div>
                    <div className={artemis('flex-col align-items-flex-end  text-600')} key={i}>{c.text}</div>
                  </a>
                </div>
              ))
            }
          </div>

        </aside>
      </div>

      <div className={artemis('sm-margin-0 xs-margin-0 col xs-col-12 row vertical xs-height-fit-content padding-left-2 xs-padding-left-0 background-white height-100')}>
            <Header data={data} />
        <div className={artemis('col flex-column justify-content-stretch')}>
            <Section headline={data.titles.lastExperience} list={data.lastExperience} />
          </div>

        <div className={artemis('col flex-column justify-content-stretch')}>
            <Section headline={data.titles.scholarship} list={data.diplomas} />
          </div>

        <div className={artemis('col flex-column justify-content-stretch')}>
            <Skills data={data} />
          </div>

        </div>
    </main>
  );
}

export default App;
