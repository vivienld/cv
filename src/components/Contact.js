import React from 'react'
import { artemis } from 'artemis';

const container = artemis('height-100 row vertical')
const col = artemis("cursor-pointer background-indigo-hover text-white-hover col padding-y-2 flex-column center")
const contact = artemis('decoration-none text-inherit')


export default function Contact({ data }) {
    return (
        <div className={container}>

            {
                data.infos.map((c, i) => (
                    <div className={col}>
                        <a href={c.link} className={contact} >
                            <div className={[c.icon, artemis('')].join(' ')}></div>
                            <div className={artemis('flex-col align-items-flex-end  text-600')} key={i}>{c.text}</div>
                        </a>
                    </div>
                ))
            }
        </div>
    )
}
