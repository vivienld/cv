import React from 'react'
import { artemis } from 'artemis'

export default function Skills({ data }) {
    return (
        <div>
            {
                data.skills.map(skill => {
                    return <div className={artemis('row')}>
                        <div className={artemis('col-12 margin-y-1')}>
                            <h1 className={artemis('row text-sm')}>
                                <div className={artemis('col-12')}>
                                    {diploma.title.toUpperCase()}
                                </div>
                                <div className={artemis('col-9')}>
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
        </div>
    )
}
