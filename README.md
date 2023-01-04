# SAHAJ

### ==> SAHAJ Online Learning System
This website is designed to help people share their knowledge with each other, This is done by our **Online courses system** that allow multiple instructors to post their youtube courses therefore users can register for them and study the videos of the course and take the exams for the courses.


### ==> Why did we put our effort in this website?
We are geeks for knowledge, and we love to make it easy for all people to learn new skills and develop their brain. That is why we were so eagre to complete this project with best user experience possible.

### ==> Build status:
* One of the missing features in our project is the user can't select a country that he is living in and change the currency of the prices, thus he can't pay according to his/her preferred currency, he/she can only pay in us dollars.
* We have a search engine that is used to find the subject(s) of the course that the user is searching for and it works properly but it has a small problem, when selecting the course from the search result to view it's content it goes to an error page (not found) because we didn't handle the route properly.
* UI is not that professional   


### ==> code style:
* Model View Controller architecture was used.
* 


### ==> ScreenShots:

<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_2.png" width ="400" height = "200">
<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_3.png" width ="400" height = "200">
<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_4.png" width ="400" height = "200">
<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_2 - Copy.png" width ="400" height = "200">
<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_3 - Copy.png" width ="400" height = "200">
<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_4 - Copy.png" width ="400" height = "200">
<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_5.png" width ="400" height = "200">
<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_6.png" width ="400" height = "200">
<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_7.png" width ="400" height = "200">
<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_1.png" width ="400" height = "200">


### ==> MERN-Stack was used as the framework (Mongo, Express, React, Node)


### ==> Our Features:
In our E-learning system user interface and experience is **Crucial**, Making the website easy for the user to use was our main objective.
The website is Highly secured and safe for the user to put sensitive information.
Our Database can handle a large amount of courses which means a lot of new things to learn.

### ==> Code Example:
**Here is a page example from our project which is the Login page :**


**////////////////////////////////////////// CODE ///////////////////////////////////////////////////////////////**

**/////////////////////// LOGIN COMPONENT //////////////////////**


import React, { useState, useEffect } from 'react';
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
import { getStaticContextFromError } from '@remix-run/router';

const Login = () => {
    const [email, setEmaill] = useState("")
    const [justifyActive, setJustifyActive] = useState('tab1');
    const [justifyActive2, setJustifyActive2] = useState('');
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
    var [type, setType] = useState("")
    var [id, setid] = useState("")
    const [inst, setinst] = useState("")
    const { signup, error, isLoading } = useSignup()
    const { login, errorL, isLoadingL } = useLogin()
    const [empty, setem] = useState(false)
    const [sentt, setsentt] = useState(false)
    const [EmailIndiv, setEmailIndiv] = useState([])
    const [EmailCoorp, setEmailCoorp] = useState([])
    const [EmailInst, setEmailInst] = useState([])
    const [err, seterr] = useState(false);
    const[errr,seterrr] = useState(false);
    const [roro,setRoro] = useState(false)

    console.log(type)

    useEffect(() => {


        const fetchindiv = async () => {

            const response = await fetch('/api/indiv/')

            const json = await response.json()

            if (response.ok) {
                // console.log(json.filter(c => { return c._id === cid }))
                
                setEmailIndiv(json)
                console.log(json)

            }
            // console.log(coorp[0].Fname)


        }
        const fetchcoorp = async () => {
            const response = await fetch('/api/coorp/')

            const json = await response.json()

            if (response.ok) {
                // console.log(json.filter(c => { return c._id === cid }))

                setEmailCoorp(json)
                console.log(json)

            }
            // console.log(coorp[0].Fname)


        }
        const fetchinst = async () => {
            const response = await fetch('/api/instructor/')

            const json = await response.json()

            if (response.ok) {
                // console.log(json.filter(c => { return c._id === cid }))

                setEmailInst(json)
                console.log(json)

            }
            // console.log(coorp[0].Fname)


        }



        fetchcoorp();

        fetchinst();
        fetchindiv();






    }, [])

    const handleJustifyClick = (value) => {
        console.log(value)
        if (value === justifyActive) {
            return;
        }
        if (value === "tab3" || value === "tab4" || value === "tab5") {
            setJustifyActive('tab1');
            setJustifyActive2(value);
            if (value === "tab3") {
                setType("instructor")
            }
            else if (value === "tab4") {
                setType("indiv")
            }
            else {
                setType("coorp")
            }
        }
        else {
            setJustifyActive(value);

        }

    };
    const handleSignup = async (e) => {
        e.preventDefault()

        const res = await signup(Fname, Lname, Email, Password)

    }
    const handleSigin = async (e) => {

        e.preventDefault()
        // if(Indiv.findIndex(e => {return e.Email === Email}) === -1 && Coorp.findIndex(e => {return e.Email === Email}) === -1 && Inst.findIndex(e => {return e.Email === Email}) === -1){
            console.log(EmailInst.findIndex(e => {return e.Email === Email}))
            if(EmailIndiv.findIndex(e => {return e.Email === Email}) !== -1){
                seterrr(false)
                setRoro(true)
                await login(Email, Password, "indiv")
            } 
             if(EmailInst.findIndex(e => {return e.Email === Email}) !== -1){
                setRoro(true)
                seterrr(false)
                await login(Email, Password, "instructor")
            }    
            if(EmailCoorp.findIndex(e => {return e.Email === Email}) !== -1){
                setRoro(true)
                seterrr(false)
            console.log("hna corpr")
                await login(Email, Password, "coorp")
            }
            if(EmailIndiv.findIndex(e => {return e.Email === Email}) === -1 && EmailInst.findIndex(e => {return e.Email === Email}) === -1 && EmailCoorp.findIndex(e => {return e.Email === Email}) === -1){
                setRoro(false)
                seterrr(true)
                
            }
        setem(false)
        

    }
    console.log("Error  !!!!!" + errorL)
  
    const senttt = async () => {
        if (EmailCoorp.findIndex(e => { return e.Email === email}) !== -1) {
            const i = EmailCoorp.findIndex(e => { return e.Email === email}) 
            console.log(EmailCoorp[i])
            const e = { email }
            console.log(e)
            await fetch('/api/sendemail/coorp', {
                method: 'POST',
                body: JSON.stringify(e),
                headers: {
                    'Content-Type': 'application/json'
                },

            })
           
                
            
            localStorage.setItem('id',EmailCoorp[i]._id )
            localStorage.setItem('type', "coorp")
            setsentt(true)
            seterr(false)
        }
        else if (EmailIndiv.findIndex(e => { return e.Email === email }) !== -1) {
            const i = EmailIndiv.findIndex(e => { return e.Email === email}) 
            console.log(EmailIndiv[i])
            const e = { email }
            console.log(e)
            await fetch('/api/sendemail/indiv', {
                method: 'POST',
                body: JSON.stringify(e),
                headers: {
                    'Content-Type': 'application/json'
                },

            })
            localStorage.setItem('id',EmailIndiv[i]._id )
            localStorage.setItem('type', "indiv")
            setsentt(true)
            seterr(false)
        }
        else if (EmailInst.findIndex(e => { return e.Email === email }) !== -1) {
            const i = EmailInst.findIndex(e => { return e.Email === email}) 
            console.log(EmailInst[i])
            const e = { email }
            
            console.log(e)
            await fetch('/api/sendemail/inst', {
                method: 'POST',
                body: JSON.stringify(e),
                headers: {
                    'Content-Type': 'application/json'
                },

            })
            localStorage.setItem('id',EmailInst[i]._id )
            localStorage.setItem('type', "instructor")
            setsentt(true)
            seterr(false)
        }
        else {
            seterr(true)
        }

    }

    return (
        <div>

            <nav class="navbar  navbar-dark bg-dark">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">E-Learning</span>
                </div>
            </nav>

            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

               

                <MDBTabsContent>

                    <MDBTabsPane show={justifyActive === 'tab1'}>
                  <strong>  <p>Login:</p> </strong>
                  <hr />
                        <div className="text-center mb-3">
                            
                            {errorL && roro && <div class="alert alert-danger" role="alert">{errorL}</div>}
                 {errr &&  <div class="alert alert-danger" role="alert">Invalid Email</div>}
                            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                              
                            </div>

                            {/* <p className="text-center mt-3">or:</p> */}
                        </div>

                        <MDBInput onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                        <MDBInput onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form2' type='password' />

                        <div className="d-flex justify-content-between mx-4 mb-4">

                            <button data-bs-toggle="modal" data-bs-target="#exampleModal4" type="button" class="btn btn-link">Forgot Password?</button>
                            <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Terms & Policy</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <strong><label>Please Enter Your Email:</label></strong>
                                            {sentt && <div class="alert alert-success" role="alert">
                                                An Email has been sent to {email}
                                            </div>}
                                            {err && <div class="alert alert-danger" role="alert">
                                               Incorrect Email
                                            </div>}
                                            <input onChange={(e) => setEmaill(e.target.value)} type='email' placeholder='Email' />
                                            <hr />
                                            <button onClick={() => senttt()} type="button" class="btn btn-dark">Submit</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <MDBBtn onClick={(e) => handleSigin(e)} className="mb-4 w-100">Sign in</MDBBtn>
                        <p className="text-center">Not a member? <a href="/register">Register</a></p>

                    </MDBTabsPane>

                   

                </MDBTabsContent>

            </MDBContainer>
        </div>
    )
}

export default Login






**/////////////// USELOGIN HOOK ////////////////**
import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const [errorL, setError] = useState(null)
  const [isLoadingL, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const {user } = useAuthContext()
  const navigate = useNavigate()

  const login = async (Email, Password, UserType) => {
    setIsLoading(true)
    setError(null)

    console.log("Email:  " + Email)
    console.log("Pass: "+ Password)
    console.log("Type: "+ UserType)
    console.log(user)

    const response = await fetch('/api/'+UserType+'/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ Email, Password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      // alert(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      console.log(json.UserType)
      
      // update the auth context
      dispatch({type: 'LOGIN' , payload: json , UserType:UserType})

      // update loading state
      setIsLoading(false)

     
     
    }
  }
  console.log(errorL)
  return { login, isLoadingL, errorL }
}


**/////////// AuthContextProvider //////////////**


import { createContext, useReducer, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {


  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null };
      
    default:
      return state
  }

}

export const AuthContextProvider = ({ children }) => {
  // console.log(children)
  const [state, dispatch] = useReducer(authReducer, { user: null })
  const xtype = Object.keys(state)[0]

  

  useEffect(() => {
     
  
    const user = JSON.parse(localStorage.getItem('user'))
    
    if (user) {
      dispatch({ type: 'LOGIN', payload: user }) 
    }
  }, [])

  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}


**/////////////////// useAuthContext ////////////**

import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export const useAuthContext = () => {
  
  const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}



**////////////////////////////////////////// CODE ///////////////////////////////////////////////////////////////**


### ==> installations :
first you want to install VScode and then pull the branch or get the .zip file, then open a new terminal and type the following commands:
* npm install react ==> or if you using yarn type: yarn add react
* npm install react-router-dom ==> or if you using yarn type: yarn add react-router-dom
* npm install react-scripts ==> or if you using yarn type: yarn add react-scripts
* npm install -g ==> or if you using yarn type: yarn add -g
* npm i bootstrap@5.3.0-alpha1 ==> or if you using yarn type: yarn add bootstrap@5.3.0-alpha1
* npm install -g nodemon # or using yarn: yarn global add nodemon
-if there is any missing installations an error will appear in the terminal in the following form "can't resolve xxxx" , just type "npm install xxxx" command.
-To start the application open two terminals:
=> Type cd backend in the first terminal and then nodemon server.js
=> Type "cd frontend" in the second terminal and then "npm start"
**Here is a video to help you with your first setup** https://www.youtube.com/watch?v=-ERWlp828kY



### ==> API references:
=> Stripe API used for payments: https://stripe.com/docs/stripe-js/react
=> Youtube API for playing youtube videos: https://youtube-data-api.readthedocs.io/en/latest/youtube_api.html
=> Nodemailer for sending E-mails API: https://nodemailer.com/about/


### ==> Test Our Login page:
To be able to view our awsome error page follow the following steps:
1- Open src folder in the frontend folder and then create a .js file in the pages folder.
2- copy paste the code in the .js file
3- import the component using "import {ErrorPage} from ./pages/'filename.js' " in the app.js in the frontend.
4- specify a route for <ErrorPage/>
5- open localhost and type the route you specified and that's it !!


### How to use :
In our project we have two main folders: backend and frontend.
The **backend** folder also contains three main folders: models , controllers, routes:
* **Models** : Is the folder where add .js files that include the schema for the specified Object(instructor , admin , course....). here is a link to help you https://blog.logrocket.com/quickly-build-schema-based-forms-in-react-with-uniforms/

* **Controllers** : this is where you add the functions you want to implement when you recieve a post or delete or get requests.

* **Routes**: it is where you specify the route for a post or get or etc request.
for example: "router.get("/" , Home)" => it means when recieve a get request and the path is '/' call the Home function implemented in the controller

and of course the main js file for the backend is the server.
here is a link to guide you through all steps ==> https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/


The **frontend** main folder is the src folder, it contains:
* **components** : which you add .js files for the components you want to use.
* **pages** : which are the pages that will be visiable in the website.
here is a link to help https://reactjs.org/tutorial/tutorial.html.


### We welcome your contribution:
we will be grateful to you if uou help us developing the project to make it one of the best E-learning sites.
**How to contribute ?**
* You can run the website and check it for any errors or glitches and then report to us.
* If you have any comments to help enhance our user interface and experience please don't hesitate to contact us.
 **Mail:** 
* *abdelrahman.12345@hotmail.com
* *leemodx@gmail.com


### Credits:
* **TheNetNinja** youtube channel helped us more than you can imagine building this project. here is the link => https://www.youtube.com/@NetNinja/featured
* **Stackoverflow website** => https://stackoverflow.com/

### License:
====> SAHAJ E-learning
