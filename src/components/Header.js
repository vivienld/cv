import React from 'react'
import { artemis } from '@iliad/artemis'

export default function Header({ data }) {
    return <div className={artemis('fancyclass background-primary-dark text-white xs-text-x-center text-x-center margin-bottom-2')}>
        <div className={artemis('row  justify-content-center')}>
            <span className={artemis('col-12 text-md')}>{data.title.toUpperCase()}</span>
            <h1 className={artemis('col-12 text-xl')}>{data.name.toUpperCase()}</h1>
            <span className={artemis('col-12 text-sm')}>{data.subtitle.toUpperCase()}</span>
            <span className={artemis('col-12 text-sm')}>
                {data.stage.toUpperCase()}
            </span>
        </div>
    </div>
}
