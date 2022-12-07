import React from 'react'
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis} from 'recharts'

const Array =[
{ name: "Hello",
  student: "1",
  fees: "40",

},
{
    name: "Hello1",
    student: "2",
    fees: "60",
},
{
    name: "Hello2",
    student: "6",
    fees: "90",
},
{
    name: "Hello3",
    student: "5",
    fees: "80",
}




]

function Chart2() {
  return (
    <div>
        <ResponsiveContainer width="100%" aspect={3}>
            <BarChart data={Array} width={400} height={400}>
            <XAxis dataKey="name" />
            <YAxis /> 
                <Bar dataKey="fees"  />
            </BarChart>
        </ResponsiveContainer>




    </div>
  )
}

export default Chart2