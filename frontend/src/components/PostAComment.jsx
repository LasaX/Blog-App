import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { usePostCommentMutation } from "../redux/features/commentApi";
import { useFetchBlogsByIdQuery } from "../redux/features/blogsApi";

function PostAComment() {
    const {id}= useParams();
    const [comment,setComment]= useState('');
    const {user} = useSelector((state)=> state.auth);
    const navigate =useNavigate();
    const [postComment]=usePostCommentMutation();
    const {refetch} = useFetchBlogsByIdQuery(id,{skip: !id})

    const handlesubmit = async(e) => {
      e.preventDefault();
      if(!user){
        alert('Please login to comment on this post');
        navigate("/login");
        return;  
      }
      const newComment = {
        comment : comment,
        user : user?._id,
        postId : id
      }
      try{
        const response = await postComment(newComment).unwrap();
         alert('Comment posted sucessfully')
         setComment('')
         refetch()

      }catch(error){
        alert('An error occured while posting comment')

      }


    }
  return (
    <div className="mt-8">
        <h3 className="text-lg font-medium mb-3">Leave a Comment</h3>
        <form onSubmit={handlesubmit}>
            <textarea name="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            cols="30"
            rows="10"
            placeholder="share your opinion about this post..."
            className="w-full bg-bgPrimary focus:outline-none p-5"
            />
            <button type="submit" className="w-full bg-primary hover:bg-indigo-500
            text-white font-medium py-3 rounded-md ">Submit</button>
        </form>
    </div>
  )
}
export default PostAComment