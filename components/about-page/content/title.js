

export default function AboutPageTitle({data}) {
    console.log(data)
    return (
        <div>
            <p className='text-cl-black p-base-semibold mb-4'>{data?.subTitle}</p>
            <h2 className='text-cl-black heading-5xl-semibold mb-10'>{data?.title}</h2>
        </div>
    )
}