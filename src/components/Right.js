import React from 'react'
import { artemis } from 'artemis'
import LastExperience from './LastExperience';
import Header from './Header'
import Scholarship from './Scholarship'
import Skills from './Skills'

export default function Right({ data }) {
    return (
        <div className={artemis('margin-1 overflow-auto')}>
            <Header data={data} />

            <LastExperience data={data} />

            <Scholarship data={data} />

            <Skills data={data} />
        </div>
    )
}
