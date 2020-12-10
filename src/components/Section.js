import { artemis } from 'artemis'
import React from 'react'

export default function Section({ headline, list }) {
    return (
        <div className={artemis('xs-text-x-center row vertical height-100')}>
            <div className={artemis('row margin-bottom-1 col-1')}>

                <div className={artemis('row')}>
                    <h1 className={artemis('col-12 text-md')}>
                        {headline.toUpperCase()}
                    </h1>
                    <div className={artemis(' border-bottom-1 col-12')}></div>
                </div>
            </div>
            <div className={artemis('col row vertical')}>
            {
                    list.map(item => <div className={artemis('col margin-y-2')}>
                        <div className={artemis('')}>

                            <h2 className={artemis('text-sm ')}>
                            {item.description.toUpperCase()}
                        </h2>
                    </div>

                    <div className={artemis('col-12')}>
                        <div className={artemis('row xs-text-x-center')}>
                            <div className={artemis('col-4 xs-col-12 sm-col-5 md-col-5 text-style-italic text-sm')}>
                                {item.institution}
                            </div>
                            <div className={artemis('col-4 xs-col-12 sm-col-3 md-col-3 text-x-center')}>
                                {item.location}
                            </div>
                            <div className={artemis('col-3 xs-col-12 sm-col md-col xs-text-x-center text-x-right')}>
                                {item.year}
                            </div>
                        </div>
                    </div>
                    <ul className={artemis('padding-left-5 col-12 xs-text-x-left')}>
                        {item.tasks ? item.tasks.map(task => <li>{task}</li>) : null}
                    </ul>
                </div>
                )
            }
            </div>
        </div>
    )
}
