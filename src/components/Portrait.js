export default function Portrait({picStyle,description,artemis, className}) {
    return (
        <div className={className}>
            {/* Photo */}
            <div className={'col-2 xs-col-4 flex-column center position-relative'} id="pic" style={picStyle}>
            </div>

            {/* Description */}

            <div className={'col flex-column justify-content-flex-start background-white'} >
                <div className={'justify-content-flex-start col text-gray padding-1 rounded  text-x-justify'} >
                    <cite>“{description}”</cite>
                </div>
            </div>
        </div>
    )
}
