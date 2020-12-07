import { artemis } from 'artemis'
import React from 'react'

export default function Scholarship({ data }) {
    return (
        <>
            <div className={artemis('row')}>
                <h1 className={artemis('col text-md margin-top-2')}>
                    {data.titles.scholarship.toUpperCase()}
                </h1>
            </div>

            {
                data.diplomas.map(diploma => {
                    return <div className={artemis('row')}>
                        <div className={artemis('col-12 margin-y-1')}>
                            <h1 className={artemis('row text-sm')}>
                                <div className={artemis('col-12')}>
                                    {diploma.title.toUpperCase()}
                                </div>
                                <div className={artemis('col-11')}>
                                    <div className={artemis('border-bottom-2')}></div>
                                </div>
                            </h1>
                        </div>

                        <div className={artemis('col-12 margin-y-1')}>
                            <div className={artemis('row')}>
                                <div className={artemis('col-4')}>
                                    {diploma.school}
                                </div>
                                <div className={artemis('col-3')}>
                                    {diploma.location}
                                </div>
                                <div className={artemis('col-2 text-x-right')}>
                                    {diploma.year}
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    )
}
