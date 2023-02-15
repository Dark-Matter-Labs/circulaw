

export const firstH2Component = ({ children }) => (<h2 className='pb-[18px] mobile sm:desktop'>{children}</h2>)

export const h2Component = ({ children }) => (<h2 className='pt-14 pb-[18px] mobile sm:desktop'>{children}</h2>)

export const h3Component = ({ children }) => (<h3 className='pt-14 pb-[18px] mobile sm:desktop'>{children}</h3>)

export const normalTextComponent = ({ children }) => (
    <p className='newlineDisplay p-lg py-2'>{children}</p> 
  )
