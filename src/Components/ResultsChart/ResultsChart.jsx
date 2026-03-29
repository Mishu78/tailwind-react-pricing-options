import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  { student_id: 1, name: "Student1", physics: 78, chemistry: 82, math: 90 },
  { student_id: 2, name: "Student2", physics: 65, chemistry: 70, math: 75 },
  { student_id: 3, name: "Student3", physics: 88, chemistry: 92, math: 85 },
  { student_id: 4, name: "Student4", physics: 55, chemistry: 60, math: 58 },
  { student_id: 5, name: "Student5", physics: 91, chemistry: 89, math: 95 },
  { student_id: 6, name: "Student6", physics: 73, chemistry: 68, math: 80 },
  { student_id: 7, name: "Student7", physics: 84, chemistry: 79, math: 88 },
  { student_id: 8, name: "Student8", physics: 69, chemistry: 74, math: 72 },
  { student_id: 9, name: "Student9", physics: 95, chemistry: 93, math: 97 },
  { student_id: 10, name: "Student10", physics: 60, chemistry: 65, math: 70 }
];
const ResultsChart = () => {

    return (
        <div>
            <LineChart width={800} height={500} data={resultData}> 
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
            <Line dataKey={'math'}></Line>
            <Line dataKey={'chemistry'} stroke='red'></Line>
            <Line dataKey={'physics'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;