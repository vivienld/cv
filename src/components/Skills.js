import React from 'react'
import { artemis } from 'artemis'
import Rating from 'react-rating'

export default function Skills({ data }) {
    return (
        <div className={artemis('row margin-y-2')}>

            <h1 className={artemis('col-12 text-md')}>
                {data.titles.skills.toUpperCase()}
            </h1>
            <div className={artemis(' border-bottom-1 col-12 lg-col-11 xl-col-11')}></div>

            {
                data.skills.map(skill => {
                    return <div className={artemis('col-12')}>

                        <div className={artemis('row')}>
                            {
                                skill.levels.map(level => {
                                    return <div className={artemis('col-4 xs-col-12  text-x-center margin-y-1')}>
                                        <div className={artemis('margin-y-1')}>{level.title.toUpperCase()}</div>
                                        <Rating className={['rating', artemis('height-fit-content text-pink')].join(' ')}
                                            initialRating={level.value}
                                            readonly
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                        />
                                    </div>
                                })
                            }
                        </div>
                        </div>
                })
            }
        </div>
    )
}
