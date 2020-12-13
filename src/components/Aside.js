import React from 'react'

import Portrait from './Portrait'

export default function Aside({data, picStyle, artemis}) {
    return (
            <aside id="aside"
            className={artemis('col-3 sm-col-4 xs-col-12 center xs-margin-0 overflow-auto xs-overflow-hidden height-100 xs-height-auto flex-column justify-content-stretch text-x-center row vertical  xs-margin-0  height-100')}>

                <Portrait description={data.description} picStyle={picStyle} artemis={artemis} className={artemis('xs-display-none')} />

                <div className={artemis('col row vertical')}>

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

            </aside>
    )
}
