export default function Skills({ skills, headline, artemis, Rating }) {
    return (
        <div className={'flex-auto flex-column justify-content-stretch'}>
                <div className={'width-100'}>
                    <div className={'row xs-text-x-center'} >

                        <h1 className={'col-12 text-md'}> {headline.toUpperCase()}</h1>
                        <div className={'col-12 border-bottom-1 col-12'}></div>
                    </div>
                </div>
                {
                skills.map((skill, i) => <div key={i} className={'flex-1 flex-column justify-content-center xs-margin-1'}>

                    <div className={'row width-100'}>
                                        {
                                            skill.levels.map((level,i) => {
                                                return <div key={i} className={'col-4 xs-col-12 margin-y-1 text-x-center flex-column justify-content-flex-end'}>
                                                    <div className={'margin-y-1'}>{level.title.toUpperCase()}</div>
                                                    <Rating className={'rating text-pink'}
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
