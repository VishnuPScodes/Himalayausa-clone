
import { useEffect, useState } from 'react'
import '../components/styles/oral.css'
import { BsHandbag } from 'react-icons/bs'
import axios from 'axios'
import { useDispatch ,useSelector} from 'react-redux'
import { productLoadingFalse, productLoadingTrue } from '../redux/action'
import { Spinner } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { RadioGroup,Radio } from '@chakra-ui/react'

export const PersonalCare=(()=>{
    const [change,setChange]=useState(false)
    const navigate=useNavigate()
    const loading=useSelector(state=>state.productLoading)
    const[items,setItems]=useState(12)
    const handleNext=(()=>{
        productLoadingTrue()
        setItems(items+6)
    })
    const handleCheck=((v)=>{
        if(v==''){
            setChange(!change)
        }   
        axios.get(`https://himalayausa-clone.herokuapp.com/personal?q=${v}`).then((res)=>{
            setData(res.data)
        })
    })
    const [data,setData]=useState([])
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(productLoadingTrue())
      axios.get(`https://himalayausa-clone.herokuapp.com/personal?_limit=${items}`).then((res)=>{
         setData(res.data)
         dispatch(productLoadingFalse())
      })
    },[items,change])
    return <div
    > 
    {loading==true?<Spinner/>:<div style={{display:"flex"}}>
       
       <div id="side-1">
       <div id='health-interest'>Product Type</div>
       <div id='all-property'> 
           <RadioGroup id='single-property' onChange={handleCheck} >
               <Radio value={''} >All</Radio> <br />
               <Radio value={'face'} >Face Care</Radio> <br />
               <Radio value={'bar'} >Cleansing Bars</Radio> <br />
               <Radio value={'balm'} >Balms</Radio> <br />
               
           </RadioGroup>
           </div>
       </div>
       <div id="contend">
       <div id='sort' >Personal Care</div>
       <div id='sort-2'></div>    
           <div id='data-map'>
               {data.map((e)=>{
                   return (
                       <div onClick={(()=>{
                           navigate(`/ProductDetailsPersonal/${e.id}`)
                       })} key={e.id} id='single-data'>
                  
                       <img src={e.url} alt="image" />
                   
                   <div style={{textAlign:"left"}}>{e.name}</div>
                   <div style={{display:"flex",height:"45px",marginTop:"20px"}}>
                       <div style={{width:"50px",backgroundColor:"#a3b49b"}} >
                        <BsHandbag style={{margin:"auto",marginTop:"5px",height:"30px"}} />
                       </div>
                       <div id='price-3'>${e.price}</div>
                       <div id='hover-cart' style={{backgroundColor:"#a3b49b",width:"110px"}}>ADD TO CART</div>
                   </div>
               </div>

                   )
               })}
           
           </div>
           <button id='btn-so' onClick={handleNext}>{loading==false?"Show more":<Spinner/>}</button>
       </div>
   </div>}
        
     
    </div>
})