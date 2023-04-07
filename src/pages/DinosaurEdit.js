import React, { useState } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'

const DinosaurEdit = ({ dinosaurs, updateDinosaur }) => {

  const navigate = useNavigate()

  const { id } = useParams()
  let currentDinosaur = dinosaurs?.find((dinosaur) => dinosaur.id === +id)

  const [editDinosaur, setEditDinosaur] = useState({
    name: currentDinosaur.name,
    age: currentDinosaur.age,
    diet: currentDinosaur.diet,
    enjoys: currentDinosaur.enjoys,
    image: currentDinosaur.image
  })

  const handleChange = (e) => {
    setEditDinosaur({...editDinosaur, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    updateDinosaur(editDinosaur, currentDinosaur.id)
    navigate(`/dinosaurshow/${currentDinosaur.id}`)
  }

  return (
    <>
      <h1 className="new-header">Modify the Fossil Record</h1>
      <Form>
        <FormGroup>
          <Label for="name">
            Dinosaur Name:
          </Label>
            <Input
              name="name"
              placeholder="Add your name here before a Scientist gives you one!"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="age">
            Dinosaur Age:
          </Label>
            <Input
              name="age"
              placeholder="How many millions of years old are you really?"
              type="number"
              onChange={handleChange}
            />
        </FormGroup>
        
        <FormGroup>
          <Label for="diet">
            Dinosaur Diet:
          </Label>
          <Input
            id="diet"
            name="diet"
            placeholder="What do you REALLY like to eat?"
            type="select"
            onChange={handleChange}
          >
            <option value="Carnivore">
              Carnivore
            </option>
            <option value="Herbivore">
              Herbivore
            </option>
            <option value="Omnivore">
              Omnivore   
            </option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="enjoys">
            Dinosaur Enjoys:
          </Label>
            <Input
              name="enjoys"
              placeholder="What do you enjoy doing over the millenia?"
              type="text"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="image">
            Image URL
          </Label>
            <Input
              name="image"
              type="url"
              onChange={handleChange}
            />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
              Submit Updated Fossil
        </Button>
      </Form> 
    </>
  )
}
export default DinosaurEdit