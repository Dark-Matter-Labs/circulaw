

export default function Tag({children , bgColor}) {
    return (
    <div className={`${bgColor} text-grey-100 px-2.5 h-6 rounded-clSm p-2xs-bold flex items-center`}>
        {children}
    </div>
    )
}