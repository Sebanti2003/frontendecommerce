import { useNavigate, useParams } from 'react-router-dom'
export interface param{
    id:number
}
const EachProduct = () => {
    const params=useParams();
    const navigate=useNavigate();
  return (
    <div>
      Each Product of id {`${params.id}`}
      <button onClick={()=>navigate(-1)}>Back{`<`}</button>
    </div>
  )
}

export default EachProduct
