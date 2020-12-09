import React from 'react'
import { artemis } from 'artemis';

const container = artemis('col row vertical')
const col = artemis("cursor-pointer light-hover col")
const contact = artemis('decoration-none text-inherit flex-1 flex-col center height-100')

export default function Contact({ data }) {
    return (
        <div className={container}>

            {
                data.infos.map((c, i) => (
                    <div className={col}>
                        <a href={c.link} className={contact} >
                            <div className={[c.icon, artemis('')].join(' ')}></div>
                            <div className={artemis('flex-col justify-content-flex-end')} key={i}>{c.text}</div>
                        </a>
                    </div>
                ))
            }
        </div>
    )
}
