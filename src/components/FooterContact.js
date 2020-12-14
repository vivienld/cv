import React from 'react'
import Contact from './Contact'

export default function FooterContact({artemis,infos,headline}) {
    return (
        <div className={artemis('display-none xs-display-block margin-top-2')}>

        <div
            className={artemis('row text-x-center')}>
            <div className={artemis('col-12 width-100')}>
                <div className={artemis("row xs-text-x-center")} >

                    <h1 className={artemis('col-12 text-md')}> {headline.toUpperCase()}</h1>
                    <div className={artemis('col-12 border-bottom-1 col-12')}></div>
                </div>
            </div>
            <Contact artemis={artemis} infos={infos} className={artemis('width-100 col row vertical')} />
        </div>
        </div>
    )
}
