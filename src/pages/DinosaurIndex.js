import React from 'react'
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'

const DinosaurIndex = ({ dinosaurs }) => {
 
  return (
      <>
        <h1>DinosaurIndex</h1>
        <div className='cards'>
          {dinosaurs.map((dinosaurs, index) => {
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
                <Button color="primary" cssModule={{ btn: 'hyperspeed-btn' }}>
                  <NavLink to={`/dinosaurshow/${dinosaurs.id}`}>Eligible Fossil</NavLink>
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