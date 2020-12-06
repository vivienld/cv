import React from 'react'
import { artemis } from 'artemis';

const container = artemis('width-100 row text-x-center border-top-1 padding-1')
const col = artemis("sm-overflow-auto cursor-pointer light-hover xs-col-12 sm-col-3 md-col-3 col padding-1")
const contact = artemis('decoration-none text-inherit flex-1 flex-col align-items-center height-100')

export default function Footer({ data }) {
    return (
        <div className={container}>

            {
                data.infos.map((c, i) => (
                    <div className={col}>
                        <a href={c.link} className={contact} >
                            <div className={[c.icon, artemis('')].join(' ')}></div>
                            <div className={artemis('height-100 flex-col justify-content-flex-end')} key={i}>{c.text}</div>
                        </a>
                    </div>
                ))
            }
        </div>
    )
}
