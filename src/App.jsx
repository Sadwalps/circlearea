
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function App() {
  const [radius, setRadius] = useState("")
  const [area, setArea] = useState("")
  const [areavalue, setAreavalue] = useState(0)

  const validate = (e) => {
    const { name, value } = e.target
    console.log(name);
    console.log(value);

    if (!!value.match('^[0-9]*$')) {
      if (name == "area") {
        setArea(value)
        console.log(area);
      } else {
        setRadius(value)
        console.log(area);
      }
    }
  }
  const handleSubmit = () => {
    setAreavalue(3.14*((radius) * (radius)))
  }
  console.log(areavalue);

  const handleCancel = () => {
    setAreavalue("")
    setRadius("")
  }

  return (
    <>
      <div className='container-fluid bg-dark' >
        <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className='p-3 text-center rounded bg-primary'>
              <h2 className='pt-2' style={{ color: "white", fontWeight: "900" }}>Let's calculate the area of circle</h2>
              <div className='d-flex justify-content-center'>
                <input type="text" value={radius} onChange={(e) => validate(e)} name='radius' className='form-control w-75 mt-3 ' placeholder='Enter the radius of the circle' style={{ fontWeight: "bold" }} />
              </div>

              {/* result section*/}
              <div className=" d-flex justify-content-center align-items-center">
                <div id='resultcircle' className='mt-4 mb-3 d-flex flex-column justify-content-center align-items-center text-white' >
                  <h3 name="area" value={radius} onChange={(e) => validate(e)}>Result</h3>
                  <h4>{areavalue}</h4>
                </div>
              </div>

              {/* buttons */}
              <div className='d-flex justify-content-around'>
                <button className='btn btn-success rounded-circle ' style={{ height: "50px", width: "50px" }} onClick={handleSubmit} >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <button className='btn btn-danger rounded-circle ' style={{ height: "50px", width: "50px" }} onClick={handleCancel}>
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
