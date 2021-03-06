export default function Contact({artemis,infos,className}) {
    return (
        <div className={className}>
                    {
                        infos.map((c, i) => (
                            <div key={i} className={'cursor-pointer background-indigo-hover text-white-hover col flex-column center padding-1'}>
                                <a href={c.link} className={'decoration-none text-inherit width-100'} >
                                    <div className={[c.icon].join(' ')}></div>
                                    <div className={'flex-col align-items-flex-end  text-600} key={i'}>{c.text}</div>
                                </a>
                            </div>
                        ))
                    }
                </div>
    )
}
