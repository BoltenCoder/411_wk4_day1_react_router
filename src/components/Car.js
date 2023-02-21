import React from 'react'
import cars from '../cars.json'
import {useParams} from "react-router-dom"


import Container from '@mui/material/Container';
import { Chip } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const Car = (props) => {
    const {id} = useParams()
    const car = cars.find((car) => car.id.toString() === id) // Turns the car's ID as an identifiabe string.

    return (
        <Container maxWidth="md" sx={{ mt: 20}}>
            <Card>
                <CardContent sx={{m: 5}}>
                    <h1>{car.Name}</h1>
                    <Chip label={"ID: " + car.id}/>
                    <Chip label={"Miles per Gallon: " + car.Miles_per_Gallon}/>
                    <Chip label={"Cylinders: " + car.Cylinders}/>
                    <Chip label={"Displacement: " + car.Displacement}/>
                    <Chip label={"Horsepower: " + car.Horsepower}/>
                    <Chip label={"Weight in lbs: " + car.Weight_in_lbs}/>
                    <Chip label={"Acceleration: " + car.Acceleration}/>
                    <Chip label={"Year: " + car.Year}/>
                    <Chip label={"Origin: " + car.Origin}/>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Car