import React, {useState} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const DinosaurNew = ({ createDinosaur }) => {

  const navigate = useNavigate()

  const [newDinosaur, setNewDinosaur] = useState({
    name: "",
    age: "",
    diet: "",
    enjoys: "",
    image: "",
  })

  const handleChange = (e) => {
    setNewDinosaur({...newDinosaur, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createDinosaur(newDinosaur)
    navigate("/dinosaurindex")
  }

  return (
    <>
      <h1 className="new-header">Add a New Fossil to our Museum</h1>
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
            name="select"
            placeholder="What do you REALLY like to eat?"
            type="select"
          >
            <option>
              Carnivore
            </option>
            <option>
              Herbivore
            </option>
            <option>
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
              name="dinosaurImage"
              type="url"
              onChange={handleChange}
            />
        </FormGroup>
    
        <Button onClick={handleSubmit} name="submit">
              Submit
        </Button>
      </Form>
    </>
  )
}

export default DinosaurNew