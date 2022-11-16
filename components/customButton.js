import Link from 'next/link'


const buttonColors = {
  home: 'border-green1 bg-blush2 hover:bg-green1 text-green1 hover:text-white1',
  actionPanel: 'border-green1 bg-green1 hover:bg-transparent text-white1 hover:text-green1',
  sectionTypes: 'border-green1 bg-transparent hover:bg-green1 text-green1 hover:text-white1',
}

export default function CustomButton({ color, children }) {
  let colorClasses = buttonColors[color]

  return (
    <button type="button" className={`inline-flex rounded-full items-center px-4 py-2 border button transition ease-in-out hover:duration-150 focus:outline-none ${colorClasses}`}>
      {children}
    </button>
  )
}
