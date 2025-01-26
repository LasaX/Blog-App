import { useState } from "react"
import { useSelector } from "react-redux"
import { useFetchBlogsQuery } from "../../redux/features/blogsApi";
import {FaBlog} from "react-icons/fa";
import {RiAdminLine} from  "react-icons/ri"
import { useGetCommentsQuery } from "../../redux/features/commentApi.js";
import { useGetUserQuery } from "../../redux/features/Auth/authApi";
import BlogChart from "./BlogChart";
import { FiUsers } from 'react-icons/fi'; 

function Dashboard() {
    const [query,setQuery]= useState({search : '',category : ''})
    const {user} = useSelector((state)=> state.auth);
    const {data : blogs = [],error,isLoading}=useFetchBlogsQuery(query);
    const {data: comments = []} = useGetCommentsQuery();
    const {data : users={}}=useGetUserQuery()
    const adminCount = users.users?.filter(user => user.role === 'admin').length

  return (
    <>
    {isLoading && (<div>Loading...</div>)}
    
    <div className="space-y-6">
        <div className="bg-bgPrimary p-5">
            <h1>Hi, {user?.username}</h1>
            <p>Welcome to the admin dashboard</p>
            <p>Here you can manage your hotel's post ,manage rooms and other administrative task</p>

        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 pt-8">
            <div className="bg-indigo-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
                <FiUsers className = "size-8 text-indigo-600"/>
                <p>User</p>
            </div>
            <div className="bg-indigo-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
                <FaBlog className = "size-8 text-red-600"/>
                <p>{blog.length} Blogs</p>
            </div>
            <div className="bg-indigo-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
                <RiAdminLine className = "size-8 text-lime-600"/>
                <p>{adminCount} Admins {adminCount !== 1 ? 's' : ''}</p>
            </div>
            <div className="bg-indigo-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
                <FiUsers className = "size-8 text-indigo-600"/>
                <p>{comments?.totalcomment} Comments</p>
            </div>
         
        </div>
        <div className="pt-5 pb-5">
         <BlogChart blogs={blogs}/>
        </div>
    </div>
    </>
  )
}
export default Dashboard