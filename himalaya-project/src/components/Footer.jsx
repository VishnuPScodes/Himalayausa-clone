
import { Link } from 'react-router-dom'
import '../components/styles/footer.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiFacebookFill} from 'react-icons/ri'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import { useState } from 'react'
import { auth } from './firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
export const Footer=(()=>{
    const [user,setUser]=useState({})
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return <div>
        <div id="footer-main">
            <div id='footer-inner-div'>
                <div><div id='header-f'>Info</div> 
                    <div id='link-footer'>
                        <Link to={'#'}>Link is</Link>  <br />
                        <Link to={'#'}>Contact us</Link> <br />
                        <Link to={'#'}>FAQ</Link> <br />
                        <Link to={'#'}>BLOG</Link> <br /> 
                        <Link to={'#'}>Store locator</Link> <br />
                        <Link to={'#'}>Carreers</Link>
                    </div>
                </div>
                <div>  <div id='header-f'>Policies</div>  
                <div id='link-footer'>
                        <Link to={'#'}>Link is</Link>  <br />
                        <Link to={'#'}>Contact us</Link> <br />
                        <Link to={'#'}>FAQ</Link> <br />
                        <Link to={'#'}>BLOG</Link> <br /> 
                        <Link to={'#'}>Store locator</Link> <br />
                        <Link to={'#'}>Carreers</Link>
                    </div>
                </div>
                <div><div id='header-f'>Contact Us</div> 
                    <div id='email-footer'>
                        <div id='f-e'>Email:</div>
                        <div id='f-2-e'>writetous@himalayausa.com</div>
                    </div>
                    <div id='email-footer'>
                        <div id='f-e'>Phone:</div>
                        <div id='f-2-e'>1-800-869-4640</div>
                    </div>
                    <div id='email-footer'>
                        <div id='f-e'>Mail:</div>
                        <div id='f-2-e'>1101 Gillingham Lane <br />
Sugar Land, TX 77478​</div>
                    </div>
                </div>
                <div><div id='header-f'>Subscribe to Our Newsletter!</div>
                <div id='mail-b-f'>{user?.email}<AiOutlineMail style={{fontSize:"30px",marginLeft:"15px"}} /> </div>
                <div id='f-des'>By entering your email, you agree to our Terms & Conditions and Privacy Policy.</div>
                <div id='folo-f' >Follow Us:  <RiFacebookFill style={{marginLeft:"10px"}} id='s-icon' /> <AiOutlineTwitter id='s-icon'/><AiOutlineInstagram id='s-icon'/><AiFillYoutube id='s-icon'/></div>
                 </div>
            </div>
        </div>
    </div>
})