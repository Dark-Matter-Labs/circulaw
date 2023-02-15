import LinkIcon from '../../components/link-icon'

export const linkComponent = ({ children, value }) =>
value.blank == true ? (
  <>
    <a
      className='text-green-500  link-lg inline-flex'
      href={value.href}
      target='_blank'
      rel='noreferrer'
    >
      <span>{children}</span>
      <LinkIcon size='desktop' />
    </a>
  </>
) : (
  <a className='text-green-500 link-lg' href={value.href}>
    {children}
  </a>
)