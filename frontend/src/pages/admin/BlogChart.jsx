import { formateDate } from "../../utils/FormateDate";
import {AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer} from 'recharts'

function BlogChart(blogs) {
  return  blogs.map(blogs => ({
    name : formateDate(blogs.createdat),
    post : blogs.title.length,
    pv : blogs.pageViews || 0,
    amt : blogs.amt || 0
  }))
}
const BlogsChart = ({blogs})=>{
    const data = formateDate(blogs)
    return (
        <div className="p-6 bg-bgPrimary rounded-lg shadow-md ">
            <h2 className="text-xl font-semibold mb-4">Blogs Chart !</h2>
            <div className="h-80">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                    data={data}
                    margin={{
                        top : 10,
                        right :30,
                        left : 0,
                        bottom : 0
                    }}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type="monotone" dataKey ="post" stroke="#8884d8" fill="#8884d8"/>
                    </AreaChart>
                 </ResponsiveContainer>
            </div>
        </div>
    )
}    
export default BlogChart