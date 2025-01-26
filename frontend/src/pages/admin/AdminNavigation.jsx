import { NavLink } from 'react-router-dom'
import AdminImg from '../../assets/admin.png'
import { useLogOutUserMutation } from '../../redux/features/Auth/authApi'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/features/Auth/authSlice';

function AdminNavigation() {
    const [logOutUser] = useLogOutUserMutation();
    const dispatch = useDispatch();
    const handleLogout = async ()=>{
        try {
            await logOutUser().unwrap();
            dispatch(logout())
            
        } catch (error) {
            console.error("failed to Log Out",error);
            
        }
    }

  return (
    <div className="space-y-5 bg-white p-8 md:h-[calc(100vh-98px)] flex flex-col justify-between">
        <div>
        <div className="mb-5">
            <img src={AdminImg} alt=""  className="size-14"/>
            <p className="font-semibold">Admin</p>
        </div>
        <hr />
        <ul className='space-y-5 pt-5'>
            <li>
                <NavLink to = "/dashboard" end className={({isActive})=> isActive ? 'text-blue-600 font-bold' : 'text-black'}>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to = "/dashboard/add-new-post" className={({isActive})=> isActive ? 'text-blue-600 font-bold' : 'text-black'}>Add New Post</NavLink>
            </li>
            <li>
                <NavLink to = "/dashboard/manage-items" className={({isActive})=> isActive ? 'text-blue-600 font-bold' : 'text-black'}>Manage Items</NavLink>
            </li>
            <li>
                <NavLink to = "/dashboard/users" className={({isActive})=> isActive ? 'text-blue-600 font-bold' : 'text-black'}>Users</NavLink>
            </li>
        </ul>
        </div>
        <div className='mb-3'>
            <hr className='mb-3' />
            <button onClick={handleLogout} className='text-white bg-red-500 font-medium px-5 py-1 rounded-sm'>LogOut</button>
        </div>
    </div>
  )
}
export default AdminNavigation