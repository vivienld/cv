import React from 'react'
import Contact from './Contact'

export default function FooterContact({artemis,infos,headline}) {
    return (
        <div className={'display-none xs-display-block margin-top-2'}>

        <div
            className={'row text-x-center'}>
            <div className={'col-12 width-100'}>
                <div className={'row xs-text-x-center'} >

                    <h1 className={'col-12 text-md'}> {headline.toUpperCase()}</h1>
                    <div className={'col-12 border-bottom-1 col-12'}></div>
                </div>
            </div>
            <Contact  infos={infos} className={'width-100 col row vertical'} />
        </div>
        </div>
    )
}
