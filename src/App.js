import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

import Filter from './components/Filter';
import Produtos from './components/Products';

function App() {
  return (
    <Container>
      <Filter />
      <Produtos />
    </Container>
  )
}

export default App;
