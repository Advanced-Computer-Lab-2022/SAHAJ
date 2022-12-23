import { useState, useEffect } from "react"
const Requests = () => {
    var [Course_requests, setReq] = useState([])
    var [show,setshow] = useState(true)
    var [w,setw] = useState(0);
    const [coorp, setcoorp] = useState([])
    useEffect(() => {
        const fetchAdmin = async () => {
            const response = await fetch('/api/admin')
            const json = await response.json()
            setReq(json[0].Course_requests)
            // .filter(c => {return c.UserId != id && c.UserType === "Coorprate"})
            console.log(Course_requests)
        }
        const fetchcoorp = async () => {
            const response = await fetch('/api/coorp')
            const json = await response.json()
            setcoorp(json)
            console.log(json)
            // setRef(json[0].Refund_Requests)
        }           
        fetchAdmin();
        fetchcoorp();

    }, [])
    
    // const fetchcoorp = async (id) => {
    //     alert(id)

    //     const response = await fetch('/api/coorp/'+id)
    //     console.log(response)
    //     const json = await response.json()
    //     console.log(json)
    //     setw(json.Wallet)
    //     console.log(w)
    // }
    const toWallet = async(id,type)=>{
        // alert(id +  " "+ type +" " + amount  )
        console.log(Course_requests)
      
           
          
            var reqcourses = (  coorp.filter(c => { return c._id === id })[0].Registered_Course)
            const i = reqcourses.findIndex(el => el.Course_id === type)
            reqcourses[i].IsApproved = true
            await fetch('/api/coorp/' + id, {
                method: 'PATCH',
                body: JSON.stringify({ Registered_Course:reqcourses }),
                headers: {
                    'Content-Type': 'application/json'
                },
    
    
            })
            console.log(Course_requests)
           const Refund_Requests2 = [...Course_requests.filter(c => {return c.UserId === id && c.Course_id !== type})]
           console.log(Refund_Requests2)
           await fetch('/api/admin/' , {
            method: 'PATCH',
            body: JSON.stringify({ Course_requests:Refund_Requests2}),
            headers: {
                'Content-Type': 'application/json'
            },


        })
        
    }
    return (

        <main >
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Refunds</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar" class="align-text-bottom"></span>
                        This week
                    </button>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>

                            <th scope="col">User ID</th>
                            <th scope="col">CourseId</th>
                            <th scope="col"></th>
                            {/* <th scope="col">State</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {Course_requests.map((refund) => (
                         show === true?    <tr>

                              <td>{refund.UserId}</td>
                                <td>{refund.Course_id}</td>
                                <td><button onClick={()=>toWallet(refund.UserId,refund.Course_id)}type="button"  class="btn btn-dark">Accept</button></td>
                                

                            </tr>:<p></p>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </main>
    );
}
export default Requests