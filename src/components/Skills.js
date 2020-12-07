import React from 'react'
import { artemis } from 'artemis'
import Rating from 'react-rating'

export default function Skills({ data }) {
    return (
        <div className={artemis('row')}>

            <h1 className={artemis('col text-md margin-top-2 border-bottom-2')}>
                {data.titles.skills.toUpperCase()}
            </h1>

            {
                data.skills.map(skill => {
                    return <div className={artemis('col-12')}>
                        <div className={artemis('row')}>
                            <h1 className={artemis('col-11 text-sm margin-y-1')}>
                                {skill.title.toUpperCase()}
                                <div className={artemis('col-11')}>
                                    <div className={artemis('')}></div>
                                </div>
                            </h1>
                        </div>
                        <div className={artemis('row')}>
                            {
                                skill.levels.map(level => {
                                    return <div className={artemis('col-3')}>
                                        <div className={artemis('margin-y-1')}>{level.title.toUpperCase()}</div>
                                        <Rating className={['rating', artemis('height-fit-content')].join(' ')}
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
