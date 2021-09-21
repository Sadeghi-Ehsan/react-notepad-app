import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";


export function GistsChart(dataCharts) {
let data=[];
 Object.keys(dataCharts).map((item)=>{
   data.push({
     name: dataCharts[item].created_at.split('T'),
     uv: dataCharts[item].comments,
     pv: Object.keys(dataCharts).length
   })
 });

  return (
    <div>
      <h2 className="my-notes text-center p-2 m-2">Gist Created</h2>
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{fontSize: 12}}  />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>

      <h2 className="my-notes text-center p-2 m-2">Files per Gist</h2>
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{fontSize: 12}}  />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
