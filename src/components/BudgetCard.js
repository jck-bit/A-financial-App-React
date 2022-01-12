import { Card } from 'react-bootstrap'
import { currencyFormatter } from './utils'

export default function BudgetCard({name, amount, max}) {
    return (
      <Card>
          <Card.Body>
              <Card.Title className='d-flex justify-content-between
              align-items-baseline fw-normal mb-3'>
                  <div>{name}</div>
                  <div>{currencyFormatter.format(amount)} / {max}</div>
              </Card.Title>
          </Card.Body>
      </Card>
    )
}
