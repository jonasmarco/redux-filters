import React, { useEffect, useState } from 'react'
import { Form, Row, Stack } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilters, selectUniqueColors } from '../../redux/reducers/products'

const Filter = () => {
  const colors = useSelector(selectUniqueColors)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [selectedColors, setSelectedColors] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeFilters({ name: 'colors', value: selectedColors }))
  }, [selectedColors, dispatch])

  useEffect(() => {
    dispatch(
      changeFilters({
        name: 'prices',
        value: { min: Number(minPrice), max: Number(maxPrice) },
      })
    )
  }, [minPrice, maxPrice, dispatch])

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColors([...selectedColors, target.value])
    } else {
      setSelectedColors(selectedColors.filter(color => color !== target.value))
    }
  }

  function handleChecked(color) {
    return selectedColors.includes(color)
  }

  return (
    <Row>
      <h1>Redux com filtros</h1>
      <Form>
        <h5>Filtros</h5>
        <Form.Group className="mb-3" controlId="minPrice">
          <Form.Label>preço mínimo:</Form.Label>
          <Form.Control
            type="number"
            placeholder="mínimo"
            value={minPrice}
            onChange={({ target }) => setMinPrice(target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="maxPrice">
          <Form.Label>preço máximo:</Form.Label>
          <Form.Control
            type="number"
            placeholder="mínimo"
            value={maxPrice}
            onChange={({ target }) => setMaxPrice(target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>cor</Form.Label>
          <Stack direction="horizontal" gap={3}>
            {colors.map((color) => (
              <Form.Check
                key={color}
                type="checkbox"
                value={color}
                label={color}
                id={color}
                onChange={handleChange}
                checked={handleChecked(color)}
              />
            ))}
          </Stack>
        </Form.Group>
      </Form>
    </Row>
  )
}

export default Filter