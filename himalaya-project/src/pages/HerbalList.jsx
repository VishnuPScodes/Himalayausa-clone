
import { useEffect, useState } from 'react'
import '../components/styles/oral.css'
import { BsHandbag } from 'react-icons/bs'
import axios from 'axios'
import { useDispatch ,useSelector} from 'react-redux'
import { productLoadingFalse, productLoadingTrue } from '../redux/action'
import { Spinner } from '@chakra-ui/react'
import { useNavigate } from 'react-router'


export const HerbalList=(()=>{
    const navigate=useNavigate()
    const handleSort=((name)=>{
        axios.get(`http://localhost:8080/herbal?q=${name}`).then((res)=>{
            setData(res.data)
        })
    })
    const loading=useSelector(state=>state.productLoading)
    const[items,setItems]=useState(12)
    const handleNext=(()=>{
        productLoadingTrue()
        setItems(items+6)
    })
    const [data,setData]=useState([])
    const dispatch=useDispatch()
    useEffect(()=>{
      axios.get(`http://localhost:8080/herbal?_limit=${items}`).then((res)=>{
         setData(res.data)
         dispatch(productLoadingFalse())
      })
    },[items])
    return <div
    > 
        <div style={{display:"flex"}}>
       
            <div id="side-1">
                <div id='health-interest'>Health Interests</div>
                <div id='all-property'>
                <div id='single-property' onClick={(()=>{
                    handleSort('blood')
                })} >Blood Sugar</div>
                <div id='single-property'onClick={(()=>{
                    handleSort('brain')
                })} >Brain and Congnitive</div>
                <div id='single-property'onClick={(()=>{
                    handleSort('digest')
                })} >Digestion</div>
                <div id='single-property'onClick={(()=>{
                    handleSort('energy')
                })} >Energy and Vitality</div>
                <div id='single-property' onClick={(()=>{
                    handleSort('skin')
                })}>Skin Hair & Nails</div>
                <div id='single-property' onClick={(()=>{
                    handleSort('heart')
                })}>Heart and Cardio</div>
                <div id='single-property' onClick={(()=>{
                    handleSort('immune')
                })}>Immune Support</div>
                <div id='single-property' onClick={(()=>{
                    handleSort('urinary')
                })}>Urinary</div>
                <div id='single-property' onClick={(()=>{
                    handleSort('joint')
                })}>Joint and Mobility</div>
                <div id='single-property' onClick={(()=>{
                    handleSort('liver')
                })}>Liver and Cleanse</div>
                <div id='single-property' onClick={(()=>{
                    handleSort('wellness')
                })}>Mens and Wellness</div>
                <div id='single-property' onClick={(()=>{
                    handleSort('respiratory')
                })}>Respiratory</div>
                <div id='single-property' onClick={(()=>{
                    handleSort('sleep')
                })}>Sleep</div>
                </div>
                
            </div>
            <div id="contend">
                <div id='sort' >Herbal Supplements</div>
                <div id='data-map'>
                    {data.map((e)=>{
                        return (
                            <div onClick={(()=>{
                                navigate(`/ProductDetailsHerbal/${e.id}`)
                            })} key={e.id} id='single-data'>
                       
                            <img src={e.url} alt="image" />
                        
                        <div style={{textAlign:"left"}}>{e.name}</div>
                        <div style={{display:"flex",height:"45px",border:"1px solid blue",marginTop:"20px"}}>
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
        </div>
     
    </div>
})