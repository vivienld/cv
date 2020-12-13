import React from 'react'

import Portrait from './Portrait'

export default function Aside({data, picStyle, artemis}) {
    return (
            <aside id="aside"
            className={artemis('align-self-stretch col-3 sm-col-4 xs-col-12 text-x-center xs-margin-0')}>
            <div className={artemis('height-100 row vertical')}>
                
                <Portrait description={data.description} picStyle={picStyle} artemis={artemis} className={artemis('xs-display-none')} />

                <div className={artemis('width-100 col row vertical')}>

                    {
                        data.infos.map((c, i) => (
                            <div key={i} className={artemis("cursor-pointer background-indigo-hover text-white-hover col flex-column center padding-1")}>
                                <a href={c.link} className={artemis('decoration-none text-inherit width-100')} >
                                    <div className={[c.icon, artemis('')].join(' ')}></div>
                                    <div className={artemis('flex-col align-items-flex-end  text-600')} key={i}>{c.text}</div>
                                </a>
                            </div>
                        ))
                    }
                </div>
                </div>
            </aside>
    )
}
