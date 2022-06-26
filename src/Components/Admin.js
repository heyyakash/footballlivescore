import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, } from "firebase/firestore";
import { db } from '../Firebase';
import './Styles/admin.css';
import logo from '../logo.svg';


const Admin = () => {
    const [teamList, setTeamList] = useState([
        Name1: "" ,
        score1: "",
        Name2: "" ,
        score2: ""
    ]);


    useEffect(() => {

        const getData = async () => {
            const data = []
            const querySnapshot = await getDocs(collection(db, "teams"));
            querySnapshot.forEach((doc) => {
                data.push({ data: doc.data(), id: doc.id });
            });
            setTeamList(data);
        }

        getData();

    }, [])



    // const [team1, setTeam1] = useState("");
    // // const [score1, setScore1] = useState("");

    // const [team2, setTeam2] = useState("");
    // // const [score2, setScore2] = useState("");

    let name , value;
    const postTeamList = (Event) => {
        name = Event.target.name;
        value = Event.target.value;

        setTeamList({...teamList, [name]: value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log("Clicked");
    //     if (team1.length !== 0 && team2.length !== 0) {
    //         try {
    //             await addDoc(collection(db, 'teams'), {
    //                 team: { team: team1, score: 0 }
    //             })
    //             await addDoc(collection(db, 'teams'), {
    //                 team: { team: team2, score: 0 }
    //             })
    //             console.log("Done");
    //         }
    //         catch (err) {
    //             console.log("Some error occurred")
    //         }
    //     }

    // }

    //Connect with Firebase
    const submitData = async(Event) =>{
        Event.preventDefault();
        if(Name1 && score1 && Name2 && score2){
        const {Name1 ,score1,Name2 ,score2} = teamList
        const rest = await fetch('
        https://pblivescore-default-rtdb.firebaseio.com/scoreRecords.json',
        {
            method : "POST",
            headers: {
                "Content-Type" : "application/json",
            }, 
            body: JSON.stringify({
                Name1 ,score1,Name2 ,score2
            }),
        }
        );
        if(res){
            setTeamList({
                Name1: "" ,
                score1: "",
                Name2: "" ,
                score2: ""
            })
            alert("Data Stored");
        }
        else{
            alert("Fill Scores ");
        }
    }
    else{
        alert("Fill Scores ");
    }
    }
}
    return (
        // <div className='adminpage'>
        // <div className='adminpanel'>
        //     <input type="text" placeholder='team1' value={team1} onChange={(e) => setTeam1(e.target.value)} />
        //     <input type="text" placeholder='team1' value={team2} onChange={(e) => setTeam2(e.target.value)} />
        //     <button onClick={(e) => handleSubmit(e)} disabled = {teamList.length!==0?true:false}>Submit</button>
        // </div>
        // </div>
        <div className='adminBody'>
            <div className="bar">
                <ul>
                    <li><a href="/"><img style={{width: "300px"}} src={logo} alt="PointBlank" /></a></li>
                    <li><a id="heading" href = "/">Update Score</a></li>
                </ul>
            </div>
            <div className="Form">
                {/* <!-- Team 01 --> */}
                <form action="" method="get">
                    <h1>Team 1</h1>
                    <label htmlFor="name1">Name</label>
                    <input type="text" name="Name1" id="name1" required placeholder="FC Barcelona" value = {teamList.Name1} onChange={postTeamList} />
                    <label htmlFor="score1">Score</label>
                    <input type="number" name="score1" id="score1" required placeholder="0" value = {teamList.score1} onChange={postTeamList} />
                </form>
                {/* <!-- Team 02 --> */}
                <form action="" method="get">
                    <h1>Team 2</h1>
                    <label htmlFor="name2">Name</label>
                    <input type="text" name="Name2" id="name2" required placeholder="Manchester United FC" value = {teamList.Name2} onChange={postTeamList} />
                    <label htmlFor="score1">Score</label>
                    <input type="number" name="score2" id="score2" required placeholder="0" value = {teamList.score2} onChange={postTeamList} />
                </form>


            </div>
            <button type="submit" onClick={submitData}>Update</button>

        </div>
    )
}

export default Admin
