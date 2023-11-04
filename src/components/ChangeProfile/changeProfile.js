import { useState, useContext } from 'react';
import { appContext } from '../../App'; 
function ChangeProfile() {
    const {setUser} = useContext(appContext)
    const [newUser, setNewUser] = useState("");
    return (
        <div>         
            <input onChange={(event) => { setNewUser(event.target.value); }} />
            <button onClick={()=>{setUser(newUser)}}>Update</button>
        </div>
    );
}

export default ChangeProfile;