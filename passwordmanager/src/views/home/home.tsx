import React, { useState } from 'react'
import Add from '../../components/add/add'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import '../../views/home/home.css'
import '../../components/add/add.css'
import Button from '../../components/buttons/button'

function Home() {
  const [pswrd, setpswrd] = useState(false)
  const togglePassword = () => {
    setpswrd(!pswrd)
  }
  const [modal, setModal] = useState(false)
  // const [data, setData] = useState(true)
  const showModal = () => {
    setModal(!modal)
  }
  const toggleBody = false
  return (
    <div className='container'>
      <Sidebar />
      <Header />
      <div className='rectangle10'>
        <div className='oval'></div>
        <div className='rectangle2'>
          <h1 className='site'>Sites</h1>
          <div className='box'></div>
          <input type="text" className='text' placeholder='Search' /><i className="fa-solid fa-magnifying-glass" id='sicon'></i>
          <div className='line'></div>
          <div className='add'>
            <img src={require("../../assets/images/add_btn.png")} alt="" onClick={showModal} />

          </div>

          {/* <Add /> */}


        </div>
        {toggleBody ? <div className='addtxt'>
          <div className='info'> Please Click on the "+" symbol to add sites</div>


        </div> :
          <div className='rectangle3'>
            <div className='smedia'>Social Media
              <div className='round'>07</div>
              <div className='arrow'><img src={require("../../assets/images/Path Copy.png")} alt="" /></div>
            </div>

            <div className='card'>
              <div className='tab'>
                <div className='smallrect'>
                <div><img src={require("../../assets/images/Facebook.png")} alt="" className='fimg' /></div>
                <div><div className='facebook'>Facebook</div>
                <div className='copy'><i className="fa-regular fa-clone" id='cpy'></i>Copy password</div>
                </div>
                </div>
                <div className='web'>www.facebook.com</div>
                
              </div>
              <div className='tab'>
              <div className='smallrect'>
                <div><img src={require("../../assets/images/YouTube.png")} alt="" className='fimg' /></div>
                <div><div className='facebook'>YouTube</div>
                <div className='copy'><i className="fa-regular fa-clone" id='cpy'></i>Copy password</div>
                </div>
                </div>
                <div className='yweb'>www.youtube.com/ssmroak</div>
              </div>
              <div className='tab'>
              <div className='smallrect'>
                <div><img src={require("../../assets/images/Twitter.png")} alt="" className='fimg' /></div>
                <div><div className='facebook'>Twitter</div>
                <div className='copy'><i className="fa-regular fa-clone" id='cpy'></i>Copy password</div>
                </div>
                </div>
                <div className='web'>www.twitter.com</div>
              </div>
            </div>
            <div className='card'>
              <div className='tab'>
              <div className='smallrect'>
                <div><img src={require("../../assets/images/Instagram.png")} alt="" className='fimg' /></div>
                <div><div className='facebook'>Instagram</div>
                <div className='copy'><i className="fa-regular fa-clone" id='cpy'></i>Copy password</div>
                </div>
                </div>
                <div className='web'>www.instagram.com</div>
              </div>
              <div className='tab'>
              <div className='smallrect'>
                <div><img src={require("../../assets/images/Pinterest.png")} alt="" className='fimg' /></div>
                <div><div className='facebook'>Pinterest</div>
                <div className='copy'><i className="fa-regular fa-clone" id='cpy'></i>Copy password</div>
                </div>
                </div>
                <div className='web'>www.pinterest.com</div>
              </div>
              <div className='tab'>
              <div className='smallrect'>
                <div><img src={require("../../assets/images/LinkdIn.png")} alt="" className='fimg' /></div>
                <div><div className='facebook'>Linkedin</div>
                <div className='copy'><i className="fa-regular fa-clone" id='cpy'></i>Copy password</div>
                </div>
                </div>
                <div className='web'>www.linkedin.com</div>
              </div>
            </div>
            <div className='card'>
              <div className='tab'>
              <div className='smallrect'>
                <div><img src={require("../../assets/images/Gmail.png")} alt="" className='gimg' /></div>
                <div><div className='gmail'>Gmail</div>
                <div className='copy'><i className="fa-regular fa-clone" id='cpy'></i>Copy password</div>
                </div>
                </div>
                <div className='web'>www.gmail.com</div>
              </div>
             
            </div>

          </div>}


        {
          modal &&
          <>
            {/* <Modal modelState={getModalState} /> */}
            <div className="modal">
              <div className="overlay" onClick={showModal}></div>
              <div className="modal-content">
                <div className='addsite'>Add Site</div>
                <div className='url'>
                  <label className="url-title">URL</label>
                  <input type="text" className='urlinput'/>
                </div>
                <div className='bigcontainer'>
                <div className='sitename'>
                  <div><label className="url-title">Site Name</label></div>
                  <input className='siteinput' type="text" />
                </div>
                <div className='sitename'>
                  <div><label className="url-title">Sector/Folder</label></div>
                  <input className='siteinput' type="text" />
                  <div className='downarrow'><img src={require("../../assets/images/Path Copy.png")} alt="" /></div>
                </div>
                </div>
                <div className='bigcontainer'>
                <div className='sitename'>
                  <div><label className="url-title">User Name</label></div>
                  <input className='siteinput' type="text" />
                </div>
                <div className='sitename'>
                  <div><label className="url-title">Site Password</label></div>
                  <input type={pswrd ? "text" : "password"} className='siteinput'  /><i className="fa-regular fa-eye" id='modaleye'
                  onClick={togglePassword}></i>
                  
                </div>
                </div>
                <div className='notes'>
                  <label className="url-title">Notes</label>
                  <input type="text" className='urlinput'/>
                </div>
                <div className='resabtn'>
                <div className='submitbtn'><Button value="Reset"/></div>
                <div className='savebtn' onClick={showModal}>Save </div>

                </div>
                {/* <div className="close-modal" onClick={showModal}  ></div> */}
                <img src={require("../../assets/images/close_btn.png")} alt="" onClick={showModal} className ="close-modal"/>
                {/* <button className="close-modal" onClick={showModal} >
                  CLOSE
                </button> */}
              </div>
            </div>
          </>
        }


      </div>

    </div>
  )
}

export default Home