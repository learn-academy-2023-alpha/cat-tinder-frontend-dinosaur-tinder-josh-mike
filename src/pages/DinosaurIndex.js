import React from 'react'
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'

const DinosaurIndex = ({ mockDinosaurs }) => {
 
  return (
      <>
        <h1>DinosaurIndex</h1>
        <div className='cards'>
          {mockDinosaurs.map((dinosaurs, index) => {
          return(
            <Card
              key={index}
              style={{
                width: '18rem'
              }}
            >
              <img
                alt={dinosaurs.name}
                src={dinosaurs.image}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {dinosaurs.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {dinosaurs.age}
                </CardSubtitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {dinosaurs.diet}
                </CardSubtitle>
                <CardText>
                  {dinosaurs.enjoys}
                </CardText>
                <Button>
                  <NavLink to={`/dinosaurshow/${dinosaurs.id}`}>Eligable Fossil</NavLink>
                </Button>
              </CardBody>
            </Card>
          )
          })}
      </div>
    </>
  )
}

export default DinosaurIndex