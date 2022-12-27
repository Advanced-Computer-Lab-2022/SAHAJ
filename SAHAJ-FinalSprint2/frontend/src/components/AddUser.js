import { Add } from "@mui/icons-material"

import { useState } from "react"
const AddUser = () => {
    const [Email, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [Fname, setFname] = useState('')
    const [Lname, setLname] = useState('')
    const [type, setType] = useState('Choose User')
    function handleAdd(type) {
        setType(type)
    }
    const add = async () => {
        console.log(type)
        if (type === "Coorpate Trainee") {
            const coorp = { Fname, Lname, Email, Password }
            console.log(coorp)
            const response = await fetch('/api/coorp', {
                method: 'POST',
                url: '/api/admin',
                body: JSON.stringify(coorp),
                headers: {
                    'Content-Type': 'application/json'
                },


            })
            const json = await response.json()
            if (!response.ok) {
                console.log(json)

            }
            if (response.ok) {
                setUsername('')
                setPassword('')
                setFname('')
                setLname('')

                console.log('new Corporate Trainee added', json)

            }
        }
        else if(type==="Instructor") {
            console.log("Instructor")
            const coorp = { Fname, Lname, Email, Password }
            console.log(coorp)
            const response = await fetch('/api/instructor', {
                method: 'POST',
                url: '/api/admin',
                body: JSON.stringify(coorp),
                headers: {
                    'Content-Type': 'application/json'
                },


            })
            const json = await response.json()
            if (!response.ok) {
                console.log(json)

            }
            if (response.ok) {
                setUsername('')
                setPassword('')
                setFname('')
                setLname('')

                console.log('new Instructor added', json)

            }
        }
         else if(type === "Admin"){
            console.log("Admin")
            const coorp = { Fname, Lname, Email, Password }
            console.log(coorp)
            const response = await fetch('/api/admin', {
                method: 'POST',
                url: '/api/admin',
                body: JSON.stringify(coorp),
                headers: {
                    'Content-Type': 'application/json'
                },


            })
            const json = await response.json()
            if (!response.ok) {
                console.log(json)

            }
            if (response.ok) {
                setUsername('')
                setPassword('')
                setFname('')
                setLname('')

                console.log('new Admin added', json)

            }
        }
       
    }


    return (
        <main >
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Add Users</h1>
                <div class="btn-toolbar mb-2 mb-md-0">

                    <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle " data-bs-toggle="dropdown">
                        <span data-feather="calendar" class="align-text-bottom"></span>
                        {type}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a onClick={() => handleAdd("Coorpate Trainee")} class="dropdown-item" href="#">Coorpate Trainee</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a onClick={() => handleAdd("Instructor")} class="dropdown-item" href="#"  >Instructor</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a onClick={() => handleAdd("Admin")} class="dropdown-item" href="#"  >Admin</a></li>
                    </ul>
                </div>
            </div>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">First Name</label>
                        <input onChange={(e) => setFname(e.target.value)} type="name" class="form-control" placeholder="First Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Last Name</label>
                        <input onChange={(e) => setLname(e.target.value)} type="name" class="form-control" placeholder="Last Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input onChange={(e) => setUsername(e.target.value)} type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                    </div>

                </div>

                <br />
                <button onClick={() => add()} type="submit" class="btn btn-primary">ADD</button>
            </form>
        </main>
    )
}
export default AddUser