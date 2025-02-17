import { useSelector } from 'react-redux'
import CommentIcon from '../assets/commentor.png'
import { formateDate } from '../utils/FormateDate'
import PostAComment from './PostAComment'

function CommentCart({comments}) {
  const user = useSelector ((state)=> state.auth.user)

  return (
    <div className="my-6 bg-white p-8">
      <div>
        {
          comments?.length > 0 ? <div>
            <h3 className="text-lg font-medium">All Comments</h3>
            <div>
            {
              comments.map((comment,index) =>{
                <div key={index} className='mt-4'>
                  <div className='flex gap-4 items-center'>
                    <img src={CommentIcon} alt=""  className='h-14'/>
                    <div>
                      <p className='text-lg font-medium underline capitalize underline-offset-4 text-blue-400'>{comment?.user?.username}</p>
                      <p className='text-[12px] italic'>{formateDate(comment.createdAt)}</p>
                    </div>
                  </div>
                  <div className='text-gray-600 mt-5 border'>
                    <p className='md:w-4/5'>{comment?.comment}</p>
                  </div>

                  </div>
              })
            }
            </div>
          </div> : <div className=" text-lg font-medium">No comment found ! </div>
        }
      </div>
       <PostAComment/>
    </div>
  )
}
export default CommentCart