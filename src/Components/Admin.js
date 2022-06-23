import React, { useState } from 'react';

const Admin = () => {

    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();   
    }
    return (
        <div>
            <input type="text" placeholder='team1' value={team1} onChange = {(e)=>setTeam1(e.target.value)} />
            <input type="text" placeholder='team1' value={team2} onChange = {(e)=>setTeam2(e.target.value)} />
            <button className='' type = "submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
        </div>
    )
}

export default Admin