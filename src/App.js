import  { Button, Container, Stack }  from 'react-bootstrap'
import AddBudgetModal from './components/AddBudgetModal';
import BudgetCard from './components/BudgetCard';
import{useState} from 'react'

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  return (
    <>
      <Container className='my-4'>
           <Stack direction='horizontal' gap ='2' className='mb-4'>
             <h1 className='me-auto'>Budget</h1>
             <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
             <Button variant='outline-primary'>Add Expense</Button>
           </Stack>

           <div style={{dispaly:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px, 1fr))", gap:"1rem" ,alignItems:"flex-start"}}>           
           
           <BudgetCard name="Entertainment" 
           gray
           amount={500} 
           max={1000}
           ></BudgetCard>
           </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
    </>
  );
}
 
export default App;
