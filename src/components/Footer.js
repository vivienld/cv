import React from 'react'
import { artemis } from '@iliad/artemis';

const container = artemis('sticky bottom-0 width-100 row text-x-center border-top-1 padding-1')
const col = artemis("cursor-pointer light-hover xs-col-12 sm-col-3 md-col-3 col padding-1")
const contact = artemis('decoration-none text-inherit flex-1 flex-column align-items-center height-100')

export default function Footer({ data }) {
    return (
        <div className={container}>

            {
                data.infos.map((c, i) => (
                    <a href={c.link} className={contact} >
                        <div className={col}>
                            <div className={[c.icon, artemis('')].join(' ')}></div>
                            <div className={artemis('height-100 flex-column justify-content-flex-end')} key={i}>{c.text}</div>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}
