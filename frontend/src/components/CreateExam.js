import { useState } from "react"
import NavbarInstructor from "./NavbarInstructor"
import { useParams, useSearchParams } from 'react-router-dom';
import Select from 'react-select';

import QuestionForm from "./QuestionForm";
const CreateExam = ({ course }) => {
    var [show, setshow] = useState(false)

    const params = useParams();
    const insid = params.id


    const [error, setError] = useState("")


    var [Subtitle_id, setcid] = useState('')
    const [Exam_Name, setExamName] = useState("")


    // QUESTIONS******************
    const [Questions, setquestions] = useState([])
    const handleAddQuestions = () => {
        const abc = [...Questions, []]
        setquestions(abc)
    }

    const handleChangeQuestions = (onChangeValue, i) => {
        const inputdata = [...Questions]
        inputdata[i] = onChangeValue.target.value;
        setquestions(inputdata)
    }

    const handleDeleteQuestions = (i) => {
        const deletVal = [...Questions]
        deletVal.splice(i, 1)
        setquestions(deletVal)
    }

    // OPTIONS**************
    const [Options, setoptions] = useState([])
    const handleAddOptions = () => {

        handleAddOpABCD();
        const abc = [...Options, []]

        setoptions(abc)
    }

    const handleChangeOptions = (onChangeValue, i , n) => {

        const inputdata = [...Options]
        inputdata[i][n] = onChangeValue;
        setoptions(inputdata)
    }


    const handleDeleteOptions = (i) => {
        handleDeleteOpABCD(i);




        const deletVal = [...Options]
        deletVal.splice(i, 1)
        setoptions(deletVal)
    }



    // CORRECT ANSWERS*********************
    const [correct_Answers, setcorrectAns] = useState([])
    const [vcorrect,setvcorrect] = useState(null)
    const handleAddcorrect_Answers = () => {
        const abc = [...correct_Answers, []]
        setcorrectAns(setcorrectAns)
    }

    const handleChangecorrect_Answers = (onChangeValue, i) => {
        const inputdata = [...correct_Answers]
        inputdata[i] = onChangeValue.label;
        setcorrectAns(inputdata)
    }

    const handleDeletecorrect_Answers = (i) => {
        const deletVal = [...correct_Answers]
        deletVal.splice(i, 1)
        setcorrectAns(deletVal)
    }




    const handleAdd = () => {
        handleAddQuestions();
        handleAddOptions();
        handleAddcorrect_Answers();
    }

    const handleDelete = (i) => {
        handleDeleteOptions(i);
        handleDeleteQuestions(i);
        handleDeletecorrect_Answers(i);
    }


    const [qq, setqq] = useState("")



    // OPTIONS A,B,C,D
    const [opA, setopA] = useState([])
    const handleAddopA = () => {
        const abc = [...opA, []]
        setopA(abc)
        for(let i=0; i<opA.length; i++){
            Options[i][0] = opA[i]
        }
    }
    const handleChangeopA = (onChangeValue, i) => {

        const inputdata = [...opA]
        inputdata[i] = onChangeValue.target.value;
        setopA(inputdata)

        handleChangeOptions(inputdata[i], i,0)
    }
    const handleDeleteopA = (i) => {
        const deletVal = [...opA]
        deletVal.splice(i, 1)
        setopA(deletVal)
    }


    const [opB, setopB] = useState([])
    const handleAddopB = () => {
        
        const abc = [...opB, []]
        setopB(abc)

        for(let i=0; i<opB.length; i++){
            Options[i][1] = opB[i]
        }
    }
    const handleChangeopB = (onChangeValue, i) => {
   
        const inputdata = [...opB]
        inputdata[i] = onChangeValue.target.value;
        setopB(inputdata)

        handleChangeOptions(inputdata[i], i,1)
    }
    const handleDeleteopB = (i) => {
        const deletVal = [...opB]
        deletVal.splice(i, 1)
        setopB(deletVal)
    }


    const [opC, setopC] = useState([])
    const handleAddopC = () => {
        const abc = [...opC, []]
        setopC(abc)
        for(let i=0; i<opC.length; i++){
            Options[i][2] = opC[i]
        }
    }
    const handleChangeopC = (onChangeValue, i) => {

        const inputdata = [...opC]
        inputdata[i] = onChangeValue.target.value;
        setopC(inputdata)

        handleChangeOptions(inputdata[i], i,2)
    }
    const handleDeleteopC = (i) => {
        const deletVal = [...opC]
        deletVal.splice(i, 1)
        setopC(deletVal)
    }


    const [opD, setopD] = useState([])
    const handleAddopD = () => {
        const abc = [...opD, []]
        setopD(abc)

        for(let i=0; i<opD.length; i++){
            Options[i][3] = opD[i]
        }
    }
    const handleChangeopD = (onChangeValue, i) => {

        const inputdata = [...opD]
        inputdata[i] = onChangeValue.target.value;
        setopD(inputdata)
        

        handleChangeOptions(inputdata[i], i,3)
    }
    const handleDeleteopD = (i) => {
        const deletVal = [...opD]
        deletVal.splice(i, 1)
        setopD(deletVal)
    }

    const handleAddOpABCD = () => {
        handleAddopA();
        handleAddopB();
        handleAddopC();
        handleAddopD();
    }

    const handleChangeOpABCD = (onChangeValue, i) => {
        handleChangeopA(onChangeValue, i);
        handleChangeopB(onChangeValue, i);
        handleChangeopC(onChangeValue, i);
        handleChangeopD(onChangeValue, i);
    }
    const handleDeleteOpABCD = (i) => {
        handleDeleteopA(i);
        handleDeleteopB(i);
        handleDeleteopC(i);
        handleDeleteopD(i);
    }


    const [corr, setcorr] = useState("")

    const [insert, setinsert] = useState('')


    function calls() {
        // forms.push(<div><QuestionForm/></div>)
        // setforms(forms + <QuestionForm />)

        // console.log(forms.length)
        setshow(true)

    }

    function submitted() {
//    Questions.push(qq)
        console.log(Questions)
//        Options.push([opA, opB, opC, opD])
        console.log(Options)
//        correct_Answers.push(corr)
        console.log(Subtitle_id)
        console.log(correct_Answers)
        setinsert('/api/instructor/' + insid + '/createExam')
        // if (examName || cid || opA || opB || opC || opD || qq === "") {
        //     alert('Please fill the form')
        // }
        handleSubmit()

    }

    const handleSubmit = async () => {
        console.log(Exam_Name)
        console.log(Questions)
        console.log(Options)
        console.log(correct_Answers)
        console.log(insid)
        setcid(Subtitle_id)
        console.log(Subtitle_id)
        const exam = { Subtitle_id, Exam_Name, Questions, Options, correct_Answers }
        const response = await fetch('/api/instructor/' + insid + '/createExam', {
            method: 'POST',
            url: '/api/instructor/' + insid + '/createExam',
            body: JSON.stringify(exam),
            headers: {
                'Content-Type': 'application/json'
            },



        })
        const json = await response.json()
        if (!response.ok) {
            console.log(json)
            setError(json.error)
            alert('please complete the form')
        }
        if (response.ok) {
            setcid('')
            setExamName("")
            setquestions([])
            setoptions([])
            setcorrectAns([])
            setqq("")
            setopA("")
            setopB("")
            setopC("")
            setopD("")

            setError(null)
            console.log('new Exam added', json)
            alert('Your exam has been added')

        }

    }

    const actions = [

        { label: "A" },

        { label: "B" },

        { label: "C" },

        { label: "D" }

    ];
    


    console.log("////QUESTIONS    "+Questions)
    console.log("////COORRECTANSWERS    "+correct_Answers)
    console.log("////OPTIONS    " + Options)
    console.log(Subtitle_id)
    return (


        <div>
            <NavbarInstructor />

            <h4>New Exam for instructor: {insid}</h4>

            <strong> Subtitle ID:</strong><input class="form-control me-2" placeholder="ID..." type="text"

                onChange={(e) => setcid(e.target.value)} value={Subtitle_id} />

            <strong> Exam Name:</strong><input class="form-control me-2" placeholder="Name..." value={Exam_Name} type="text"

                onChange={(e) => setExamName(e.target.value)} />

            <br></br>
            <button onClick={handleAdd}>Add a new Question</button>

            {Questions&&Questions.map((data, i) => {
                return (
                    <div>

                        <strong> Question:</strong><input class="form-control me-2" placeholder="Question..." value={data} type="text"

                            onChange={(e) => handleChangeQuestions(e, i)} />

                        Option A: <input class="form-control me-2" placeholder="A.."type="text" value={opA[i]}

                            onChange={(e) => handleChangeopA(e, i)} />

                        Option B:<input class="form-control me-2" placeholder="B.." type="text" value={opB[i]}

                            onChange={(e) => handleChangeopB(e, i)} />

                        Option C:<input class="form-control me-2" placeholder="C.." type="text" value={opC[i]}

                            onChange={(e) => handleChangeopC(e, i)} />

                        Option D: <input class="form-control me-2" placeholder="D.." type="text" value={opD[i]}

                            onChange={(e) => handleChangeopD(e, i)} />
                        <br></br>
                        Correct Answer:<Select options={actions}  

                            id="drpdwn"

                            onChange={(e) => handleChangecorrect_Answers(e, i)} />
                        
                       <button onClick={()=>handleDelete(i)}>Delete Question</button>
                        <br></br>
                       
                    </div>
                )
            })}
            
            
          <div>
          <br></br>
                <button onClick={submitted}>submit exam</button>
            </div> 


        </div>
    )
}

export default CreateExam