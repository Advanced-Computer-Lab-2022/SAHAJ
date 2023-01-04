# SAHAJ

### ==> SAHAJ Online Learning System
This website is designed to help people share their knowledge with each other, This is done by our **Online courses system** that allow multiple instructors to post their youtube courses therefore users can register for them and study the videos of the course and take the exams for the courses.


### ==> Why did we put our effort in this website?
We are geeks for knowledge, and we love to make it easy for all people to learn new skills and develop their brain. That is why we were so eagre to complete this project with best user experience possible.

### ==> Build status is completed


### ==> Standard code style is used


### ==> ScreenShots:

<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_2.png" width ="400" height = "200">
<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_3.png" width ="400" height = "200">
<img src="https://github.com/Advanced-Computer-Lab-2022/SAHAJ/blob/img/Screenshot_4.png" width ="400" height = "200">


### ==> MERN-Stack was used as the framework (Mongo, Express, React, Node)


### ==> Our Features:
In our E-learning system user interface and experience is **Crucial**, Making the website easy for the user to use was our main objective.
The website is Highly secured and safe for the user to put sensitive information.
Our Database can handle a large amount of courses which means a lot of new things to learn.

### ==> Code Example:
**Here is a page example from our project which is the error page :**
**////////////////////////////////////////// CODE ///////////////////////////////////////////////////////////////**
const ErrorPage = () => {

    return (
       
       
        <div >
            
            <div class="container bootstrap snippets bootdey"/>
    <div class="row">
        <div class="col-md-12">
            <div class="pull-right" >
                <div class="col-md-10 col-md-offset-1 pull-right">
                    <img class="img-error" src="https://bootdey.com/img/Content/fdfadfadsfadoh.png"/>
                    <h2 align = "center">404 Not Found</h2>
                    <p align = "center">Sorry, an error has occured, Requested page not found or cnat be accessed!</p>
                    <div >
                       
                         
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        

    )
}

export default ErrorPage
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


### ==> API references:
=> Stripe API used for payments: https://stripe.com/docs/stripe-js/react
=> Youtube API for playing youtube videos: https://youtube-data-api.readthedocs.io/en/latest/youtube_api.html
=> Nodemailer for sending E-mails API: https://nodemailer.com/about/


### ==> Test Our error page:
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


### Credits:
* **TheNetNinja** youtube channel helped us more than you can imagine building this project. here is the link => https://www.youtube.com/@NetNinja/featured
* **Stackoverflow website** => https://stackoverflow.com/

### License:
====> SAHAJ E-learning
