export default function Header({ data,className,artemis }) {
    return (
            <div className={className}>
                <div className={artemis('row justify-content-center')}>
                    <span className={artemis('col-12 text-md')}>{data.title.toUpperCase()}</span>
                    <h1 className={artemis('col-12 text-xl')}>{data.name.toUpperCase()}</h1>
                    <span className={artemis('col-12 text-sm')}>{data.subtitle.toUpperCase()}</span>
                    <span className={artemis('col-12 text-sm')}>
                        {data.stage.toUpperCase()}
                    </span>
                </div>
            </div>
        )
}