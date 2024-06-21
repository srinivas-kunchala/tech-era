import {Link} from 'react-router-dom'

import {HeaderContainer, ImgEl} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <ImgEl
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </HeaderContainer>
)

export default Header
