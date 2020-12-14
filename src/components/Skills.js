export default function Skills({ skills, headline, artemis, Rating }) {
    return (
        <div className={artemis('flex-1 flex-column justify-content-stretch')}>
                <div className={artemis('width-100')}>
                    <div className={artemis("row xs-text-x-center")} >

                        <h1 className={artemis('col-12 text-md')}> {headline.toUpperCase()}</h1>
                        <div className={artemis('col-12 border-bottom-1 col-12')}></div>
                    </div>
                </div>
                {
                skills.map((skill, i) => <div key={i} className={artemis('flex-1 flex-column justify-content-center')}>

                    <div className={artemis('row width-100')}>
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
                    )
                }
            </div>
    )
}
