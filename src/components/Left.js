import React from 'react'
import { artemis } from 'artemis';
import Contact from './Contact'

export default function Left({ data }) {
    return (
        <aside id="aside"
            className={artemis('text-x-center row vertical  xs-margin-0 ')}>

            {/* Photo */}

            <div className={artemis('col-2 flex-col width-100')} id="pic"></div>

            {/* Description */}

            <div className={artemis('flex-col justify-content-flex-start ')} >
                <div className={artemis('justify-content-flex-start col text-gray padding-1 rounded  text-x-justify')} >
                    <cite>“{data.description}”</cite>
                </div>
            </div>

            <Contact data={data} />
        </aside>
    )
}
