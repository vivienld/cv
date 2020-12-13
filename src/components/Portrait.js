export default function Portrait({picStyle,description,artemis}) {
    return (
        <div>
            {/* Photo */}

            <div className={artemis('col-2 xs-col-4 flex-column center position-relative')} id="pic" style={picStyle}>
            </div>

            {/* Description */}

            <div className={artemis('col flex-column justify-content-flex-start background-white')} >
                <div className={artemis('justify-content-flex-start col text-gray padding-1 rounded  text-x-justify')} >
                    <cite>“{description}”</cite>
                </div>
            </div>
        </div>
    )
}
