import styled from 'styled-components';
import Navbar from './components/Navbar';
import UsersList from './components/UsersList';

function App() {

  return (
    <Container >
      <Navbar />
      <UsersList />
  
    </Container>
  );
}
const Container = styled.div`
  background-color: #1f2327;
  display: flex;
`;

export default App;
