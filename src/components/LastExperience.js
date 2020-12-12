import { artemis } from '@iliad/artemis'
import React from 'react'

export default function LastExperience({ data }) {
    return (
        <>
            <div className={artemis('row  margin-y-2')}>
                <h1 className={artemis('col-12 text-md')}>
                    {data.titles.last_working_exp.toUpperCase()}
                </h1>
                <div className={artemis(' border-bottom-2 col-12 lg-col-8 xl-col-8')}></div>
            </div>
            <div className={artemis('row')}>
                <div className={artemis('col-12 margin-y-1')}>
                    <h1 className={artemis('row text-sm')}>
                        <div className={artemis('col-12')}>
                            {data.last_experience.title.toUpperCase()}
                        </div>
                        <div className={artemis('col-11')}>
                            <div className={artemis('')}></div>
                        </div>
                    </h1>
                </div>

                <div className={artemis('col-12 margin-y-1')}>
                    <div className={artemis('row')}>
                        <div className={artemis('col-4 md-col sm-col')}>
                            {data.last_experience.institution}
                        </div>
                        <div className={artemis('col-3 md-col sm-col md-text-x-center sm-text-x-center')}>
                            {data.last_experience.location}
                        </div>
                        <div className={artemis('col-2 md-col sm-col text-x-right')}>
                            {data.last_experience.start} / {data.last_experience.end}
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
