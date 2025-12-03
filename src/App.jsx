import React, { useRef, useState } from 'react'
import Form from './Pages/Form.jsx'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Excel from './Pages/Excel.jsx'

function App() {
    const [data, setData] = useState([]);
    let navigate = useNavigate();

    let firstNameRef = useRef();
    let lastNameRef = useRef();
    let emailRef = useRef();
    let mobRef = useRef();
    let skillRef = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();

        // guard refs in case something is not mounted
        const firstName = firstNameRef?.current?.value ?? '';
        const lastName  = lastNameRef?.current?.value ?? '';
        const email     = emailRef?.current?.value ?? '';
        const mobile    = mobRef?.current?.value ?? '';
        const skills    = skillRef?.current?.value ?? '';
        if(!firstName || !lastName || !email || !mobile || !skills){
            alert("Please fill all the fields");
            return;
        }
        if (mobile.length !== 10 || isNaN(mobile)) {
            alert("Please enter a valid 10-digit phone number");
            return;
        }
        let dataObj = {
            firstName,
            lastName,
            email,
            mobile,
            skills : skills.split(',')
        }

        setData(prevData => {
            const newData = [...prevData, dataObj];
            return newData;
        });

        // clear inputs if refs exist
        if (firstNameRef?.current) firstNameRef.current.value = '';
        if (lastNameRef?.current) lastNameRef.current.value = '';
        if (emailRef?.current) emailRef.current.value = '';
        if (mobRef?.current) mobRef.current.value = '';
        if (skillRef?.current) skillRef.current.value = '';

        navigate('/excel');
    }


  return (
    <Routes>
      <Route path="/" element={<Form handleSubmit = {handleSubmit} firstNameRef={firstNameRef} lastNameRef={lastNameRef} emailRef={emailRef} mobRef={mobRef} skillRef={skillRef} />} />
      <Route path='/excel' element={<Excel data={data} />} />
    </Routes>
  )
}

export default App
