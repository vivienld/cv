import React from 'react'
import { artemis } from 'artemis'
import Rating from 'react-rating'

export default function Skills({ data }) {
    return (
        <div className={artemis('row vertical margin-y-2 height-100')}>
            <div className={artemis('col-1')}>
                <div className={artemis("row")} >

                    <h1 className={artemis('text-md')}> {data.titles.skills.toUpperCase()}</h1>
                    <div className={artemis('border-bottom-1 col-12')}></div>
                </div>
            </div>
            {
                data.skills.map(skill => {
                    return <div className={artemis('col  flex-row justify-content-center')}>
                        <div className={artemis('row vertical')}>

                            <div className={artemis('col')}>
                                <div className={artemis('row ')}>
                            {
                                skill.levels.map(level => {
                                    return <div className={artemis('col-4 xs-col-12 margin-y-1')}>
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
                        </div>
                    </div>
                })
            }
        </div>
    )
}
