import React from 'react'
import { artemis } from 'artemis';

const container = artemis('')
const col = artemis("cursor-pointer background-indigo-hover text-white-hover col padding-y-2")
const contact = artemis('decoration-none text-inherit flex-1 flex-col align-items-center')


export default function Contact({ data }) {
    return (
        <div className={container}>

            {
                data.infos.map((c, i) => (
                    <div className={col}>
                        <a href={c.link} className={contact} >
                            <div className={[c.icon, artemis('')].join(' ')}></div>
                            <div className={artemis('flex-row align-items-flex-end  text-600 justify-content-center')} key={i}>{c.text}</div>
                        </a>
                    </div>
                ))
            }
        </div>
    )
}
