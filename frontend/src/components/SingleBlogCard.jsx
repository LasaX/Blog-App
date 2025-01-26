import { formateDate } from "../utils/FormateDate";
import EditorjSHTML from 'editorjs-html'
const  editorjSHTML= EditorjSHTML();

function SingleBlogCard(blog) {
    const {title,description,content,coverImg,category,rating,author,createdat}=blog || {};
    const htmlContent = editorjSHTML.parse(content).join('')
  return (
    <>
    <div className="bg-white p-8">
        <div>
            <h1 className="md:text-4xl text-3xl font-medium mb-4">{title}</h1>
            <p className="mb-6">{formateDate(createdat)} by
                <span className="text-blue-400 cursor-pointer">Admin 1</span>
            </p>
        </div>
    <div>
       <img src={coverImg} alt="cover Image" className="w-full md:h-[520px] bg-cover" />
    </div>
    <div className="mt-8 space-y-4">
        <div dangerouslySetInnerHTML={{_html:htmlContent}} className="space-y-3 editorjsdiv"/>
        <div>
            <span className="text-lg font-medium">Rating :</span>
            <span>{rating}(based on 300 reviews)</span>
        </div>
        
    </div>
    </div>
    </>
  )
}
export default SingleBlogCard