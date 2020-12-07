import { artemis } from 'artemis'
import React from 'react'

export default function LastExperience({ data }) {
    return (
        <>
            <div className={artemis('row')}>
                <h1 className={artemis('col text-md margin-top-2')}>
                    {data.titles.last_working_exp.toUpperCase()}
                </h1>
            </div>
            <div className={artemis('row')}>
                <div className={artemis('col-12 margin-y-1')}>
                    <h1 className={artemis('row text-sm')}>
                        <div className={artemis('col-12')}>
                            {data.last_experience.title.toUpperCase()}
                        </div>
                        <div className={artemis('col-11')}>
                            <div className={artemis('border-bottom-2')}></div>
                        </div>
                    </h1>
                </div>

                <div className={artemis('col-12 margin-y-1')}>
                    <div className={artemis('row')}>
                        <div className={artemis('col-4')}>
                            {data.last_experience.company}
                        </div>
                        <div className={artemis('col-3')}>
                            {data.last_experience.location}
                        </div>
                        <div className={artemis('col-2 text-x-right')}>
                            {data.last_experience.start} / {data.last_experience.end}
                        </div>
                    </div>
                </div>

                <ul className={artemis('padding-left-5 col-12')}>
                    {
                        data.last_experience.tasks.map(task => <li>{task}</li>)
                    }
                </ul>
            </div>
        </>
    )
}
