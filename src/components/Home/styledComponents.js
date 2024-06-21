// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/'

export const AppContainer = styled.div`
  height: 100vh;
  padding: 20px;
`

export const Heading = styled.h1`
  color: black;
  font-family: 'roboto';
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImg = styled.img`
  height: 50vh;
`

export const FailureHeading = styled.h1`
  color: bisque;
`
export const FailureDescription = styled.p``

export const RetryButton = styled.button`
  height: 40px;
  width: 80px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  color: blue;
  font-size: '50px';
`

export const SuccessContainer = styled.ul`
  display: flex;
  width: 50%;
  list-style-type: none;
  flex-wrap: wrap;
`

export const CourseItems = styled.li`
  margin-right: 15px;
  padding: 10px;
  display: flex;
`

export const Logo = styled.img`
  height: 40px;
`

export const CourseName = styled.p``
