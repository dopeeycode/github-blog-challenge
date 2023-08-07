import { HeaderContainer } from './styles'

import logoHeader from '../../assets/images/logo.png'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logoHeader} alt="" />
    </HeaderContainer>
  )
}
