import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button, } from 'reactstrap'

const DinoasaurShow = ({ dinosaurs, deleteDinosaur }) => {
  const { id } = useParams()
  let selectedDinosaur = dinosaurs.find(dinosaur => dinosaur.id === +id)
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
              <Button>
                  <NavLink to={`/dinosauredit/${selectedDinosaur.id}`}>
                    Change the Fossil Record
                  </NavLink>
              </Button>
              <Button onClick={deleteDinosaur}>
                  <NavLink to={"/dinosaurindex/"}>
                    Delete the Fossil Record
                  </NavLink>
              </Button>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  )
}
export default DinoasaurShow