import React from 'react';
import ChangeProfile from './ChangeProfile/changeProfile'
import { appContext } from '../App';
import { useContext } from 'react';

function Profie() {
    const {user} = useContext(appContext)
    return (
        <div>
            this {user} Component
            <ChangeProfile />
        </div>
    );
}

export default Profie;