
import { appContext } from '../App';
import { useContext } from 'react';

function Home() {
    const {user} = useContext(appContext)
    return (
        <div>
            this {user} Component
        </div>
    );
}

export default Home;