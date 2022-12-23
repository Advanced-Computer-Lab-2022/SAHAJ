import React, { useState } from 'react';
import { useSignup } from "../hooks/useSignup"
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [justifyActive, setJustifyActive] = useState('tab1');
    const [justifyActive2, setJustifyActive2] = useState('tab3');
    const [show, setShow] = useState(false)
    const [flagFname, setflagFname] = useState(false)
    const [flagLname, setflagLname] = useState(false)
    const [flagPassword, setflagPassword] = useState(false)
    const [flagUsername, setflagUsername] = useState(false)
    const [flagUsername2, setflagUsername2] = useState(false)
    const [flagCondition, setflagCondition] = useState(false)
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    var [type,setType] = useState("instructor")
    var [id, setid] = useState("")
    const [inst, setinst] = useState("")
    const { signup, error, isLoading } = useSignup()
    const { login, errorL, isLoadingL } = useLogin()

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        if(value === "tab3"||value === "tab4"||value === "tab5"){
            setJustifyActive('tab1');
            setJustifyActive2(value);
            if(value === "tab3"){
                setType("instructor")
            }
            else if(value === "tab4"){
                setType("indiv")
            }
            else{
                setType("coorp")
            }
        }
        else{
            setJustifyActive(value);
            
        }
        

    };
    const handleSignup = async (e) => {
        e.preventDefault()

        await signup(Fname, Lname, Email, Password)
        // const inst = {Fname,Lname,Email,Password}

        // const response = await fetch('/api/instructor/signup' , {
        //     method: 'POST',
        //     url: '/api/instructor/signup',
        //     body: JSON.stringify(inst),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },


        // })
        // const json = await response.json()

        // alert("d")
        // console.log(json)
        // if(!response.ok){
        //     console.log(json)
        //     if(Fname === ""){
        //         setflagFname(true)
        //     }
        //     if(Lname === ""){
        //         setflagLname(true)
        //     }
        //     if(Email === ""){
        //         setflagUsername(true)
        //     }
        //     if(Password === ""){
        //         setflagPassword(true)
        //     }
        // }
        // if(response.ok){
        //     const response2 = await fetch('/api/instructor')

        //     const json2 = await response2.json()
        //     setid(json2.slice(-1)[0]._id)
        //     console.log(json2.slice(-1)[0]._id)
        //     id = json2.slice(-1)[0]._id
        //     alert("id:"+id)
        //     alert(json2.slice(-1)[0]._id)

        //     if (response2.ok) {

        //         window.location.href='/instructor/'+id
        //     }

        //     console.log('new Instructor added',json)

        // }
    }
    const handleSigin = async (e) => {

        e.preventDefault()

        await login(Email, Password, type)

        // const inst = {Email,Password}
        // const response = await fetch('/api/instructor/login' , {
        //     method: 'POST',
        //     url: '/api/instructor/login',
        //     body: JSON.stringify(inst),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },


        // })
        // const json = await response.json()

        // alert("d")
        // console.log(json)
        // if(!response.ok){
        //     console.log(json)
        //     if(Email === ""){
        //         setflagUsername(true)
        //     }
        //     if(Password === ""){
        //         setflagPassword(true)
        //     }
        //     console.log("not")
        // }
        // if(response.ok){
        //     const response2 = await fetch('/api/instructor')

        //     const json2 = await response2.json()

        //     if (response2.ok) {

        //         setinst(json2.filter(c => { return c.Email === Email }))
        //         window.location.href='/instructor/'+inst._id
        //     }



        // }
    }

    console.log(type)
    return (
        <div>
            <nav class="navbar  navbar-dark bg-dark">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">E-Learning</span>
                </div>
            </nav>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                            Login
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                            Register
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>

                    <MDBTabsPane show={justifyActive === 'tab1'}>

                        <div className="text-center mb-3">
                            <p>Sign in as:</p>

                            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                                    <MDBTabsItem>
                                        <MDBTabsLink  onClick={() => handleJustifyClick('tab3')}active={justifyActive2 === 'tab3'}>
                                            Instructor
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleJustifyClick('tab4')} active={justifyActive2 === 'tab4'}>
                                            Individual 
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleJustifyClick('tab5')} active={justifyActive2 === 'tab5'}>
                                            Coorp 
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                </MDBTabs>
                                {/* <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='facebook-f' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='twitter' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='google' size="sm" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon='github' size="sm" />
                            </MDBBtn> */}
                            </div>

                            {/* <p className="text-center mt-3">or:</p> */}
                        </div>

                        <MDBInput onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                        <MDBInput onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form2' type='password' />

                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                        </div>

                        <MDBBtn onClick={(e) => handleSigin(e)} className="mb-4 w-100">Sign in</MDBBtn>
                        <p className="text-center">Not a member? <a href="#!">Register</a></p>

                    </MDBTabsPane>

                    <MDBTabsPane show={justifyActive === 'tab2'}>

                        <div className="text-center mb-3">
                            <p>Sign up with:</p>

                            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                
                            </div>

                    
                        </div>

                        <MDBInput onChange={(e) => setFname(e.target.value)} wrapperClass='mb-4' label='Name' id='form1' type='text' />
                        <MDBInput onChange={(e) => setLname(e.target.value)} wrapperClass='mb-4' label='Username' id='form1' type='text' />
                        <MDBInput onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email' id='form1' type='email' />
                        <MDBInput onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form1' type='password' />

                        <div className='d-flex justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                        </div>

                        <MDBBtn onClick={(e) => handleSignup(e)} className="mb-4 w-100">Sign up</MDBBtn>

                    </MDBTabsPane>

                </MDBTabsContent>

            </MDBContainer>
        </div>
    )
}

export default Login