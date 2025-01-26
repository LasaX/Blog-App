import { useParams } from "react-router-dom"
import { useFetchBlogsByIdQuery } from "../redux/features/blogsApi";
import SingleBlogCard from "../components/SingleBlogCard";
import CommentCard from "../components/CommentCard";
import RelatedBlog from "../components/RelatedBlog";

function SingleBlog() {
    const {id} =useParams();
    const {data:blog,error,isLoading}=useFetchBlogsByIdQuery(id);
    console.log(blog)
  return (
    <div className="text-primary container mx-auto mt-8">
        <div>
            {isLoading && <div>Loading ...</div> }
            {error && <div>Something went Wrong</div> }
            {
                blog?.post && (
                    <div className="flex flex-col lg:flex-row justify-between items-start md:gap-12 gap-8">
                        <div className="lg:w-2/3 w-full">
                        <SingleBlogCard blog={blog.post}/>
                        <CommentCard/>
                    </div>
                     <div className="bg-white lg:w-1/3 w-full">
                     <RelatedBlog/>
                     </div>
                </div>
                )
            }
        </div>
    </div>
  )
}
export default SingleBlog