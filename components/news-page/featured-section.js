

export default function FeaturedNewsSection({items}) {
    console.log(items)
    return (
  <ul className='grid grid-cols-3 gap-x-3 overflow-hidden'>
            {items.map((item, id) => (
              <li key={id}>{item.newsTitle}</li>
            ))}
          </ul>
    )
}