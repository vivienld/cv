export default function Skills({ skills, headline, className, artemis, Rating }) {
    return (
        <div className={className}>
            <div className={artemis('row vertical margin-y-2 height-100 xs-align-items-center')}>
                <div className={artemis('col-1')}>
                    <div className={artemis("row")} >

                        <h1 className={artemis('text-md')}> {headline.toUpperCase()}</h1>
                        <div className={artemis('border-bottom-1 col-12')}></div>
                    </div>
                </div>
                {
                    skills.map((skill,i) => {
                        return <div key={i} className={artemis('col  flex-row justify-content-center')}>
                            <div className={artemis('row vertical')}>

                                <div className={artemis('col')}>
                                    <div className={artemis('row ')}>
                                {
                                    skill.levels.map((level,i) => {
                                        return <div key={i} className={artemis('col-4 xs-col-12 margin-y-1 text-x-center flex-column justify-content-flex-end')}>
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
        </div>
    )
}
