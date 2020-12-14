import React from 'react'
import Rating from 'react-rating'

import data from './data/index.js'

import Header from './components/Header'
import Section from './components/Section'
import Skills from './components/Skills'
import Aside from './components/Aside'
import Portrait from './components/Portrait'
import FooterContact from './components/FooterContact'

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
    <main className={'row xs-height-auto padding-2 sm-padding-0 xs-padding-0'}>

      <Aside data={data} picStyle={picStyle}  />

      <div className={'flex-column justify-content-stretch sm-margin-0 xs-margin-0 col xs-col-12 padding-left-2 xs-padding-left-0 xs-height-auto height-100'}>

        <Header  data={data} />

        <Portrait description={data.description} picStyle={picStyle}  className={'display-none xs-display-block'} />
        
        <Section  headline={data.titles.lastExperience} list={data.lastExperience}  />

        <Section  headline={data.titles.scholarship} list={data.diplomas} />

        <Skills  Rating={Rating} headline={data.titles.skills} skills={data.skills} />

        <FooterContact  infos={data.infos} headline={data.titles.contact} />
      </div>
    </main>
  );
}

export default App;
