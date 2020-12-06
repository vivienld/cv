import React from 'react'
import { artemis } from 'artemis'
import LastExperience from './LastExperience';
import Header from './Header'
import Scholarship from './Scholarship'

export default function Right({ data }) {
    return (
        <div className={artemis('margin-1')}>
            <Header data={data} />

            <LastExperience data={data} />

            <Scholarship data={data} />
        </div>
    )
}
