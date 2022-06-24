import React, { useEffect, useState } from 'react';
import { collection, addDoc,getDocs,} from "firebase/firestore";
import { db } from '../Firebase';
import './admin.css';


const Admin = () => {
    const [teamList, setTeamList] = useState([]);
    

    useEffect(() => {

        const getData = async () => {
            const data = []
            const querySnapshot = await getDocs(collection(db, "teams"));
            querySnapshot.forEach((doc) => {
               data.push({data:doc.data(),id:doc.id});
            });
            setTeamList(data);
        }

        getData();

    }, [])



    const [team1, setTeam1] = useState("");
    // const [score1, setScore1] = useState("");

    const [team2, setTeam2] = useState("");
    // const [score2, setScore2] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Clicked");
        if (team1.length !== 0 && team2.length !== 0) {
            try {
                await addDoc(collection(db, 'teams'), {
                    team: { team:team1, score: 0 }
                })
                await addDoc(collection(db, 'teams'), {
                    team: { team:team2, score: 0 }
                })
                console.log("Done");
            }
            catch (err) {
                console.log("Some error occurred")
            }
        }

    }
    return (
        <div className='adminpage'>
        <div className='adminpanel'>
            <input type="text" placeholder='team1' value={team1} onChange={(e) => setTeam1(e.target.value)} />
            <input type="text" placeholder='team1' value={team2} onChange={(e) => setTeam2(e.target.value)} />
            <button onClick={(e) => handleSubmit(e)} disabled = {teamList.length!==0?true:false}>Submit</button>
        </div>
        </div>
    )
}

export default Admin