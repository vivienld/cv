export default function Header({ data,artemis }) {
    return (
        <div className={'background-primary-dark text-white xs-text-x-center text-x-center margin-bottom-2 padding-y-1'} >
                <div className={'row justify-content-center'}>
                    <span className={'col-12 text-md'}>{data.title.toUpperCase()}</span>
                    <h1 className={'col-12 text-xl'}>{data.name.toUpperCase()}</h1>
                    <span className={'col-12 text-sm'}>{data.subtitle.toUpperCase()}</span>
                    <span className={'col-12 text-sm'}>
                        {data.stage.toUpperCase()}
                    </span>
                </div>
            </div>
        )
}