import { Fragment } from 'react'
import {
  Card,
  CardHeader,
  CardBody
} from 'reactstrap'

export const About = () => {
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <h1 className='text-primary'>About</h1>          
        </CardHeader>

        <CardBody></CardBody>

      </Card>
    </Fragment>
  )
}
export default About