
import { useEffect, useState } from 'react'
import '../components/styles/oral.css'
import { BsHandbag } from 'react-icons/bs'
import axios from 'axios'
import { useDispatch ,useSelector} from 'react-redux'
import { productLoadingFalse, productLoadingTrue } from '../redux/action'
import { Checkbox, CheckboxGroup, Radio, RadioGroup, Spinner } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'


export const OralListPage=(()=>{
    const[change,setChange]=useState(false)
    const [searchParams,setSearchParams]=useSearchParams()
    const [categoryValue,setCategoryValue]=useState(searchParams.getAll('category'))
    const loading=useSelector(state=>state.productLoading)
    const[items,setItems]=useState(12)
    const handleNext=(()=>{
        productLoadingTrue()
        setItems(items+6)
    })
    const [data,setData]=useState([])
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    useEffect(()=>{
        if(categoryValue){
            setSearchParams({category:categoryValue},{replace:true})
            let params={
                category:searchParams.getAll('category')
            }
            axios.get(`http://localhost:8080/oral?_limit=${items}`,{
                params:{
                    ...params
                }
            })
            
            .
            
            then((res)=>{
         setData(res.data)
         dispatch(productLoadingFalse())
      })
        }
      
    },[items,change])
    const handleCheck=((v)=>{   
        if(v==''){
            setChange(!change)
        }   
        axios.get(`http://localhost:8080/oral?q=${v}`).then((res)=>{
            setData(res.data)
        })
    })
    return <div
    >
        <div style={{display:"flex"}}>
       
            <div id="side-1">
            <div id='health-interest'>Product Type</div>
          
          <div id='all-property'> 
                <RadioGroup id='single-property' onChange={handleCheck} >
                    <Radio value={'kids'} >Kids</Radio> <br />
                    <Radio value={'adult'} >Adult</Radio> <br />
                    <Radio value={'complete'} >Complete Care</Radio> <br />
                    <Radio value={'whitening'} >Whitening</Radio> <br />
                    <Radio value={'reset'} >reset</Radio> <br />
                </RadioGroup>
                </div>

                {/* second sorted datas */}
                <div id='health-interest-2'>Flavor</div>
          
          <div id='all-property'> 
                <RadioGroup id='single-property' onChange={handleCheck} >
                    <Radio value={''} >All</Radio> <br />
                    <Radio value={'mint'} >Mint</Radio> <br />
                    <Radio value={'peppermint'} >Peppermint</Radio> <br />
                    <Radio value={'spearmint'} >Spearmint</Radio> <br />
                    <Radio value={'cinnamon'} >Cinnamon</Radio> <br />
                    <Radio value={'bubble'} >Bubble Gum</Radio> <br />
                    <Radio value={'orange'} >Orange</Radio> <br />
                </RadioGroup>
                </div>    
            </div>
            <div id="contend">
                <div id='sort' >Oral Care</div>
                <div id='sort-2'></div>
                <div id='data-map'>
                    {data.map((e)=>{
                        return (
                            <div onClick={(()=>{
                                navigate(`/ProductDetails/${e.id}`)
                            })} key={e.id} id='single-data'>
                       
                            <img src={e.url} alt="image" />
                        
                        <div style={{textAlign:"left"}}>Bamboo & Sea Salt Whitening Antiplaque Toothpaste</div>
                        <div style={{display:"flex",height:"45px",marginTop:"20px"}}>
                            <div id='bag-btn-3' style={{width:"50px",backgroundColor:"#a3b49b"}} >
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
        </div>
     
    </div>
})