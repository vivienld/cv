import React from 'react'
import { artemis } from 'artemis';
import profile from '../img/profile.jpeg'

export default function Left({ data }) {
    return (
        <aside id="aside"
            className={artemis('text-x-center row vertical  xs-margin-0 overflow-y-auto sm-overflow-y-none padding-1 height-100')}>

            {/* Photo */}

            <div className={artemis('col-1 flex-col')} >
                <img className={
                    artemis('align-self-center max-width-95 max-height-95 rounded')} src={profile} alt="profile pic" />
            </div>

            {/* Description */}

            <div className={artemis('col flex-col justify-content-flex-start')} >
                <div className={artemis('justify-content-flex-start col text-gray padding-1 rounded  text-x-justify')} >
                    <cite>“{data.description}”</cite>
                </div>
            </div>

        </aside>
    )
}
