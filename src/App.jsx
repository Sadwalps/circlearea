
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function App() {
  const [radius, setRadius] = useState("")
  const [area, setArea] = useState("")
  const [areavalue, Setareavalue] = useState(0)

 const validate = (e)=>{
  const {name,value} = e.target
  console.log(name);
  console.log(value);

  if(!!value.match('^[0-9]*$')){
    if(name==radius){
      setRadius(value)
    }else{
       setArea(value)
    }
  }
 }

  return (
    <>
      <div className='container-fluid bg-dark' >
        <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className='p-3 text-center rounded bg-primary'>
              <h2 className='pt-2' style={{ color: "white", fontWeight: "900" }}>Let's calculate area of circle</h2>
              <div className='d-flex justify-content-center'>
                <input type="text" onChange={(e)=>validate(e)}  name='radius' className='form-control w-75 mt-3' placeholder='Enter the radius of the circle' />
              </div>

              {/* result section*/}
              <div className=" d-flex justify-content-center align-items-center">
                <div id='resultcircle' className='mt-4 mb-3 d-flex flex-column justify-content-center align-items-center' >
                  <h3>Result</h3>
                  <h4 onChange={(e)=>validate(e)} name='area'></h4>
                </div>
              </div>

              {/* buttons */}
              <div className='d-flex justify-content-around'>
                <button className='btn btn-success rounded-circle ' style={{ height: "50px", width: "50px" }}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <button className='btn btn-danger rounded-circle ' style={{ height: "50px", width: "50px" }}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>

              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  )
}

export default App
