export default function Section({ headline, list,className,artemis }) {
    return (
            <div className={'flex-auto xs-text-x-center row vertical'}>
                <div className={'row margin-bottom-1'}>
                        <h1 className={'col-12 text-md'}>
                            {headline.toUpperCase()}
                        </h1>
                        <div className={'border-bottom-1 col-12'}></div>
                    </div>

                <div className={'col row  height-100'}>
                {
                        list.map((item,i) => <div key={i} className={'col margin-y-2 flex-row justify-content-center'}>
                            <div className={''}>

                                <h2 className={'text-sm '}>
                                {item.description.toUpperCase()}
                            </h2>
                        </div>

                        <div className={'col-12'}>
                            <div className={'row xs-text-x-center'}>
                                <div className={'col-4 xs-col-12 sm-col-5 md-col-5 text-style-italic text-sm'}>
                                    {item.institution}
                                </div>
                                <div className={'col-4 xs-col-12 text-x-center'}>
                                    {item.location}
                                </div>
                                <div className={'col-2 xs-col-12 xs-text-x-center text-x-right'}>
                                    {item.year}
                                </div>
                            </div>
                        </div>
                        <ul className={'padding-left-5 col-12 xs-text-x-left xs-margin-y-2'}>
                            {item.tasks ? item.tasks.map((task,i) => <li className={'xs-text-x-center'} key={i}>{task}</li>) : null}
                        </ul>
                    </div>
                    )
                }
                </div>
            </div>
    )
}
