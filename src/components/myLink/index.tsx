import { Link } from 'react-router-dom'
import * as Styled from './styled'

export type MyLinkProps = {
  href: string
  linkText: string
  pathname: string
}

export const MyLink = ({ href, linkText, pathname }: MyLinkProps) => {

  return (
    <Styled.Container pathname={pathname} href={href}>
      <Link to={href}>{linkText}</Link>
    </Styled.Container>
  )
}