import Header from '../Header'

import {
  NotFoundContainer,
  NotFoundDescription,
  NotFoundHeading,
  NotFoundImg,
} from './styledComponets'

const NotFound = () => (
  <>
    <Header />
    <NotFoundContainer>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundDescription>
        We are sorry, the page you requested could not be found.
      </NotFoundDescription>
    </NotFoundContainer>
  </>
)

export default NotFound
