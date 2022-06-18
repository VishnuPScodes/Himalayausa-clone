
import { useEffect, useState } from 'react'
import '../components/styles/oral.css'
import { BsHandbag } from 'react-icons/bs'
import axios from 'axios'
import { useDispatch ,useSelector} from 'react-redux'
import { productLoadingFalse, productLoadingTrue } from '../redux/action'
import { Spinner } from '@chakra-ui/react'
import { useNavigate } from 'react-router'


export const PersonalCare=(()=>{
    const navigate=useNavigate()
    const loading=useSelector(state=>state.productLoading)
    const[items,setItems]=useState(12)
    const handleNext=(()=>{
        productLoadingTrue()
        setItems(items+6)
    })
    const [data,setData]=useState([])
    const dispatch=useDispatch()
    useEffect(()=>{
      axios.get(`http://localhost:8080/personal?_limit=${items}`).then((res)=>{
         setData(res.data)
         dispatch(productLoadingFalse())
      })
    },[items])
    return <div
    > <h1>Oral Care</h1>
        <div style={{display:"flex"}}>
       
            <div id="side-1">Filter</div>
            <div id="contend">
                <div id='sort' >ff</div>
                <div id='data-map'>
                    {data.map((e)=>{
                        return (
                            <div onClick={(()=>{
                                navigate(`/ProductDetailsPersonal/${e.id}`)
                            })} key={e.id} id='single-data'>
                       
                            <img src={e.url} alt="image" />
                        
                        <div style={{textAlign:"left"}}>Bamboo & Sea Salt Whitening Antiplaque Toothpaste</div>
                        <div style={{display:"flex",height:"45px",border:"1px solid blue",marginTop:"20px"}}>
                            <div style={{width:"50px",backgroundColor:"#a3b49b"}} >
                             <BsHandbag style={{margin:"auto",marginTop:"5px",height:"30px"}} />
                            </div>
                        </div>
                    </div>

                        )
                    })}
                
                </div>
                <button id='btn-so' onClick={handleNext}>{loading==false?"Show more":<Spinner/>}</button>
            </div>
        </div>
     
    </div>
})