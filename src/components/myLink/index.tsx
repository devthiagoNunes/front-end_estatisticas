import { Link } from 'react-router-dom'
import * as Styled from './styled'

export type MyLinkProps = {
  href: string
  linkText: string
  pathname: string
  actionOnClick?: () => void
}

export const MyLink = ({ href, linkText, pathname, actionOnClick }: MyLinkProps) => {

  return (
    <Styled.Container pathname={pathname} href={href}>
      <Link to={href} onClick={() => {
        if(pathname === href) {
          return window.location.reload()
        }

        actionOnClick()
      }}>{linkText}</Link>
    </Styled.Container>
  )
}