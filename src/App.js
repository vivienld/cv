import React from 'react'
import Rating from 'react-rating'

import data from './data/index.js'

import { artemis } from '@iliad/artemis'

import Header from './components/Header'
import Section from './components/Section'
import Skills from './components/Skills'
import Aside from './components/Aside'
import Portrait from './components/Portrait'

import pic from './img/pic.jpg'

const picStyle = {
  backgroundImage: `url(${pic})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center 0',
  minHeight: 200
}

function App() {
  return (
    <main className={artemis('row height-100 xs-height-auto flex-column xs-margin-0 padding-2 xs-column-reverse')}>

      <Aside data={data} picStyle={picStyle} artemis={artemis} className={artemis('col-3 sm-col-4 xs-col-12 center xs-margin-0 overflow-auto xs-overflow-hidden height-100 xs-height-auto')} />

      <div className={artemis('sm-margin-0 xs-margin-0 col xs-col-12 row vertical xs-height-fit-content padding-left-2 xs-padding-left-0 background-white height-100 overflow-auto xs-overflow-hidden height-100 xs-height-auto')}>

        <Header artemis={artemis} data={data} className={artemis('background-primary-dark text-white xs-text-x-center text-x-center margin-bottom-2 padding-y-1')} />

        <Portrait description={data.description} picStyle={picStyle} artemis={artemis} className={artemis('display-none xs-display-block')} />
        
        <Section artemis={artemis} headline={data.titles.lastExperience} list={data.lastExperience} className={artemis('col flex-column justify-content-stretch')} />

        <Section artemis={artemis} headline={data.titles.scholarship} list={data.diplomas} className={artemis('col flex-column justify-content-stretch')} />

        <Skills artemis={artemis} Rating={Rating} headline={data.titles.skills} skills={data.skills} className={artemis('col flex-column justify-content-stretch')} />

      </div>
    </main>
  );
}

export default App;
