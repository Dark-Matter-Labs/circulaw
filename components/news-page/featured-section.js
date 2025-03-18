import NewNewsCard from './new-news-card'

export default function FeaturedNewsSection({items}) {

    return (
  <ul className='grid grid-cols-3 gap-x-3 overflow-hidden'>
            {items.map((item, id) => (
              <li key={id}><NewNewsCard data={item} /></li>
            ))}
          </ul>
    )
}