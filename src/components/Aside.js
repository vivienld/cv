import React from 'react'

import Portrait from './Portrait'
import Contact from './Contact'

export default function Aside({data, picStyle, artemis}) {
    return (
            <aside id="aside"
            className={artemis('align-self-stretch col-3 sm-col-4 xs-col-12 text-x-center xs-margin-0 xs-display-none')}>
            <div className={artemis('height-100 row vertical')}>
                
                <Portrait description={data.description} picStyle={picStyle} artemis={artemis} className={artemis('display-block')} />

                <Contact artemis={artemis} infos={data.infos} className={artemis('width-100 col row vertical')} />
                </div>
            </aside>
    )
}
