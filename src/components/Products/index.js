import React from 'react'
import { Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const filterColors = (colors) => (product) => !colors.length || colors.includes(product.color)

const filterPrices = (prices) => (product) =>
  (!prices.max || product.price <= prices.max) &&
  (!prices.min || product.price >= prices.min)

const filterProducts = ({ products }) => {
  const { data, filters } = products
  return data.filter(filterColors(filters.colors)).filter(filterPrices(filters.prices))
}

const Produtos = () => {
  const data = useSelector(filterProducts)

  return (
    <Row>
      <h5>Produtos</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cor</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, color, price }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{color}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Row>
  )
}

export default Produtos