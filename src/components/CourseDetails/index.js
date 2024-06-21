import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import {
  CourseDescription,
  CourseDetailsContainer,
  CourseName,
  CourseImg,
  FailureContainer,
  FailureDescription,
  FailureImg,
  FailureHeading,
  LoaderContainer,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class CourseDetails extends Component {
  state = {courses: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCourseItems()
  }

  getCourseItems = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.pending})

    const url = `https://apis.ccbp.in/te/courses/${id}`

    const response = await fetch(url)
    const data = await response.json()

    if (response.ok) {
      const updateddata = {
        id: data.course_details.id,
        name: data.course_details.name,
        description: data.course_details.description,
        imageUrl: data.course_details.image_url,
      }

      this.setState({
        courses: updateddata,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryBtn = () => {
    this.getAllCourses()
  }

  renderSuccessView = () => {
    const {courses} = this.state
    return (
      <CourseDetailsContainer>
        <CourseImg src={courses.imageUrl} alt={courses.name} />
        <div>
          <CourseName>{courses.name}</CourseName>
          <CourseDescription>{courses.description}</CourseDescription>
        </div>
      </CourseDetailsContainer>
    )
  }

  renderFailureView = () => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
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
        <div>{this.renderSuccessView()}</div>
      </>
    )
  }
}

export default CourseDetails
