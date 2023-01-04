# SAHAJ

## ==> SAHAJ Online Learning System
This website is designed to help people share their knowledge with each other, This is done by our **Online courses system** that allow multiple instructors to post their youtube courses therefore users can register for them and study the videos of the course and take the exams for the courses.


## ==> Why did we put our effort in this website?
We are geeks for knowledge, and we love to make it easy for all people to learn new skills and develop their brain. That is why we were so eagre to complete this project with best user experience possible.

## ==> Build status:
* One of the missing features in our project is the user can't select a country that he is living in and change the currency of the prices, thus he can't pay according to his/her preferred currency, he/she can only pay in us dollars.
* We have a search engine that is used to find the subject(s) of the course that the user is searching for and it works properly but it has a small problem, when selecting the course from the search result to view it's content it goes to an error page (not found) because we didn't handle the route properly.
* UI is not that professional   
* There is no option for a user to pay for a course using his/her wallet


## ==> code style:
* Model View Controller architecture was used.
* When naming the variables we followed rhe convention that there must not be any dummy names, each name of any variable is self explanatory, we did that so the code can be easily reusable.
* When naming .js files, the first letter of each file is a Capital litter while the rest are small letters, however, if a file is composed of two words (i.e Filter subject), the first letter of each word is capital while the rest are small -> FilterSubject.js
* To make the code organized as possible, whenever we write a piece of code we use the command "ctrl + shift + f" in the keyboard in order to enable auto identation for that piece of code.
* All the variables and constants are within the first lines of the class, followed by useEffect method with all api requests that we need, followed by all the functions that we want to use.
* The **fronend** folder contains src folder which contains multiple other folders:
- **Components** Folder: in that folder we write the components we use frequently (i.e, NAVBAR, Search, etc...)
- **Pages** Folder: We put inside of it the pages that we want to be displayed (i.e, Admin, Instructor, etc....)

*The **backend** folder also contains three main folders: models , controllers, routes:
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

## ==> ScreenShots from our website:

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


## ==> MERN-Stack was used as the framework (Mongo, Express, React, Node)


## ==> Our Features:
* In our E-learning system user interface and experience is **Crucial**, Making the website easy for the user to use was our main objective.
* The website is Highly secured and safe for the user to put sensitive information.
* Our Database can handle a large amount of courses which means a lot of new things to learn.
* As a guest you can see all the courses and read their descriptions and then You can Register as a new user or login as an existing one.
* The user can see All the available and can filter courses by price or ratings and can search for a certain subject and then he/she can choose to register for a course
* Once the user chose to register for a course he/she can pay for it using the credit card.
* The user can see all the subtitles and topics of the course that he/she is registered to.
* The user can watch the videos of the relavent course.
* The user can take an exam about the relavent topic.
* The user can Write notes and saves them as a pdf while watching video.
* The user can Rate a Course or an instructor.
* The user can report any problem that he/she faces.
* Once The user finishes he/she can download his/her cerificate as a pdf or recieve it via mail.
* The user can refund a course if his/her progress was less than 50%.
* The user recieves The money of the refunded course in his/her wallet.
* The user can edit his/her profile (change name, change password, change Email, etc.....)
* The can view his/her reported problems.
* If the user is an instructor, he/she can create a new course and set it's price.
* If the user is an instructor, he/she can add a promotion fir his/her courses.
* If the user is an instructor, he/she can view his/her reviews as an instructor
* If the user is an instructor, he/she can can view his/her course reviews.
* And many more features to discover!!!




## ==> Code Example:
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



**/////////////////// Login method ////////////////**
const login = async (req, res) => {
    // TODO: Login the user
    
    try {
        const { Email, Password } = req.body
    console.log(req.body)
    if (!Email || !Password) {
        throw Error('All fields must be filled')
      }
    console.log(req.body)
    const user = await Indiv.findOne({ Email: Email })
    if (user == null) {
        throw Error('Email not correct')
      
        
    }
        if (await bcrypt.compare(Password, user.Password)) {
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 });
            res.status(200).json({ id:user._id,Email,token,UserType:"indiv" , courses: user.Registered_Course })
            console.log("LOGGED IN")
            // res.status(200).json({Email, token})
        }
        else{
            console.log("wkjebdekjbdkj")
            throw Error('Password not correct')

        }
    }
    catch (error) {
        console.log("NOT hhh CORRECT")
        res.status(400).json({ error: error.message })
    }
}


**////////////// Login Route ////////////////**
    **router.post('/indiv/login',login)**


**////////////////////////////////////////// CODE ///////////////////////////////////////////////////////////////**


## ==> installations :
first you want to install VScode and NodeJs and then pull the branch or get the .zip file, then open a new terminal and type the following commands:
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



## ==> API references:
Here is a link which showes all our API references -> https://drive.google.com/file/d/1xT32JggrdTqvMTFhEB8YKaonmwJcWKia/view?usp=sharing


## ==> Test Our Login page:
To be able to Test our Login There are two methods that you can do:
**in both methods you are going to do the following :**
* 1-create a new .js file in the backend folder in the controllers folder and name it 'IndividualController.js'
* 2-Paste Login method showed above in the folder and export it using 'module.exports = { login }'
* 3- create a new .js file in the backend folder in the routes folder and name it 'Indiv.js'
* 4- import the login method from the IndividualController to the Indiv using 'const{ login } = require('../controllers/IndividualController')'
* 5- define 'const router = express.Router()' in order to be able to be able to recieve http requests
* 6- specify the route 'router.post('/indiv/login',login)' which tells the server whenever you get a post request and the path is 'api/indiv/login' use the method 'login'.

**Once you finish the following, you test the login using two methods:**


* **METHOD 1 (Using postman):** Download postman from the following link -> https://www.postman.com/downloads/ ,Open it and then you will be asked to type a path and a body, Type the following:
<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot (240).png" width ="400" height = "200">
You should get the response as shown in image Which means the login was a success!!.


* **METHOD 2 (Test The frontend):**
* 1- Open src folder in the frontend folder and then create a 'login.js' file in the components folder and paste LOGIN COMPONENT code showen above .
* 2- Create a folder called 'hooks' and create inside a file and call it 'useLogin.js' and paste our code for USELOGIN HOOK 
* 3- create another file in the hooks folder and call it 'useAuthContext.js' and paste our code for useAuthContext
* 4- create a folder called 'context' and inside it create a file and call it 'AuthContextProvider.js' and copy our code shown above for AuthContextProvider.
* 5- import the 'login; component using "import {Login} from ../components/'login.js' " in the app.js in the frontend.
* 6- specify a route for <Login/>
* 5- open localhost and type the route you specified and that's it !!


## How to use :
Here is a simple video that shows you to register and use multiple features in the website:
https://drive.google.com/file/d/12BoqyLx938P06bXUhRX5JWsThH8zOdPp/view?usp=sharing



## We welcome your contribution:
we will be grateful to you if uou help us developing the project to make it one of the best E-learning sites.
**How to contribute ?**
* You can run the website and check it for any errors or glitches and then report to us.
* If you have any comments to help enhance our user interface and experience please don't hesitate to contact us.
 **Our E-Mails:** 
* abdelrahman.12345@hotmail.com
* leemodx@gmail.com


## Credits:
* **TheNetNinja** youtube channel helped us more than you can imagine building this project. here is the link => https://www.youtube.com/@NetNinja/featured
* **Stackoverflow website** => https://stackoverflow.com/

## License:
* => Stripe API used for payments: https://stripe.com/docs/stripe-js/react
* => Youtube API for playing youtube videos: https://youtube-data-api.readthedocs.io/en/latest/youtube_api.html
* => Nodemailer for sending E-mails API: https://nodemailer.com/about/
* ====> SAHAJ E-learning
