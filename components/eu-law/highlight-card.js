

export default function HighlightCard({text, number, circleText}) {
    return (
        <>
        <div className="h-[260px] w-full block sm:hidden">

        </div>
        <div className="h-[172px] w-auto hidden sm:flex border shadow-sm hover:shadow-md flex-row transition-shadow duration-150 items-center justify-between bg-white rounded-cl">
            <div className="max-w-[60%]">
                <div className="w-full mx-4 p-base-semibold">
                {text}
                </div>
               
            </div>
            <div className="">
                <div className="mx-4 rounded-full bg-[#D1F9EB] border-[12px] border-grey-150 h-32 w-32 flex flex-col items-center justify-center">
                <div className="text-center p-5xl-semibold text-green-600"> {number}</div>
                <div className="text-center p-base-semibold text-green-600">{circleText}</div>
                </div>
            </div>
        </div>
        </>
    )
}