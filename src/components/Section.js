export default function Section({ headline, list,className,artemis }) {
    return (
            <div className={artemis('flex-1 xs-text-x-center row vertical')}>
                <div className={artemis('row margin-bottom-1')}>
                        <h1 className={artemis('col-12 text-md')}>
                            {headline.toUpperCase()}
                        </h1>
                        <div className={artemis('border-bottom-1 col-12')}></div>
                    </div>

                <div className={artemis('col row  height-100')}>
                {
                        list.map((item,i) => <div key={i} className={artemis('col margin-y-2  flex-row justify-content-center')}>
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
                                <div className={artemis('col-4 xs-col-12 sm-col-4 md-col-4 text-x-center')}>
                                    {item.location}
                                </div>
                                <div className={artemis('col-3 xs-col-12 sm-col md-col xs-text-x-center text-x-right')}>
                                    {item.year}
                                </div>
                            </div>
                        </div>
                        <ul className={artemis('padding-left-5 col-12 xs-text-x-left')}>
                            {item.tasks ? item.tasks.map((task,i) => <li key={i}>{task}</li>) : null}
                        </ul>
                    </div>
                    )
                }
                </div>
            </div>
    )
}
