import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import {
  AppContainer,
  Heading,
  FailureContainer,
  FailureImg,
  RetryButton,
  FailureDescription,
  FailureHeading,
  LoaderContainer,
  SuccessContainer,
  Logo,
  CourseItems,
  CourseName,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class Home extends Component {
  state = {apiStatus: apiStatusConstants.initial, courses: {}}

  componentDidMount() {
    this.getAllCourses()
  }

  getAllCourses = async () => {
    this.setState({apiStatus: apiStatusConstants.pending})

    const response = await fetch('https://apis.ccbp.in/te/courses')
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.courses.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        logo: eachItem.logo_url,
      }))

      console.log(updatedData)

      this.setState({
        apiStatus: apiStatusConstants.success,
        courses: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryBtn = () => {
    this.getAllCourses()
  }

  renderFailureView = () => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops1 Something Went Wrong</FailureHeading>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <RetryButton type="button" onClick={this.retryBtn}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" height="50" width="50" color="orange" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {courses} = this.state

    return (
      <SuccessContainer>
        {courses.map(eachItem => (
          <Link to={`/courses/${eachItem.id}`}>
            <CourseItems key={eachItem.id}>
              <Logo src={eachItem.logo} />
              <CourseName>{eachItem.name}</CourseName>
            </CourseItems>
          </Link>
        ))}
      </SuccessContainer>
    )
  }

  renderFinalView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.pending:
        return this.renderLoadingView()

      case apiStatusConstants.success:
        return this.renderSuccessView()

      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <AppContainer>
          <Heading>Courses</Heading>
          {this.renderFinalView()}
        </AppContainer>
      </>
    )
  }
}

export default Home
