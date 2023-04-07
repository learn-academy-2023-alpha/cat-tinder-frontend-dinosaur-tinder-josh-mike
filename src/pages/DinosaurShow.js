import React from 'react'
import { useParams } from 'react-router-dom'
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from 'reactstrap'

const DinoasaurShow = ({ mockDinosaurs }) => {
  const { id } = useParams()
  let selectedDinosaur = mockDinosaurs.find(dinosaur => dinosaur.id === +id)
  
  return (
    <>
      <div>DinoasaurShow</div>
      <div className='cards'>
        {selectedDinosaur && (
          <Card
            className='dinosaur-show'
            style={{
              width: '18rem'
            }}
          >
            <img
              alt={selectedDinosaur.name}
              src={selectedDinosaur.image}
            />
            <CardBody>
              <CardTitle tag="h5">
              {selectedDinosaur.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Age: {selectedDinosaur.age}
              </CardSubtitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Diet: {selectedDinosaur.diet}
              </CardSubtitle>
              <CardText>
                Enjoys: {selectedDinosaur.enjoys}
              </CardText>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  )
}
export default DinoasaurShow