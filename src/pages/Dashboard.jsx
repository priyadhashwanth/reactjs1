import { Outlet } from 'react-router';
import SideBar from '../components/SideBar';

const Dashboard = () => {
    return (
        <>
            <h1 className="text-4xl p-4 ml-4">Dashboard</h1>
            <div className='min-h-screen flex gap-8'>
                <SideBar />
                <div className='border-r min-h-screen'></div>
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard;