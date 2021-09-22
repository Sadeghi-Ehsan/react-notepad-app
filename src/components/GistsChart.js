import React from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";


export function GistsChart(dataCharts) {
  const {loading, gists} = dataCharts;
  let data = [];
  gists.map((item) => {
    data.push({
      name: item.created_at.split('T')[1].replace(/Z/gi, ""),
      comments: item.comments,
      files:Object.keys(item.files).length
    })
  });
  /*  let result = gists.reduce(function(acc, val){
      let o = acc.filter(function(obj){
        console.log('obj.created_at',obj)
        console.log('val.created_at',val.created_at)
        debugger;
        return obj.name.created_at == val.created_at;
      }).pop() || {name:val.created_at, value:0};

      o.value += val.comments;
      acc.push(o);
      return acc;
    },[]);
    console.log('result',result)*/

  return (
    <div>
      {loading ? <h2 className="text-center my-notes p-5 min-vh-100"> Loading ...</h2> :
        <div className="col-sm-8">
          <h2 className="my-notes text-center p-2 m-2">Gist Created</h2>
          <ResponsiveContainer width="99%" aspect={3}>
            <LineChart
              width={750}
              height={280}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name" tick={{fontSize: 12}}/>
              <YAxis/>
              <Tooltip/>
              <Line
                type="monotone"
                dataKey="comments"
                stroke="#8884d8"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="d-flex justify-content-center m-3">
            <button type="button" className="btn btn-outline" onClick={() => dataCharts.loadMore()}>Load More</button>
          </div>
          <h2 className="my-notes text-center p-2 m-2">Files per Gist</h2>
          <ResponsiveContainer width="99%" aspect={3}>
            <LineChart
              width={750}
              height={280}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name" tick={{fontSize: 12}}/>
              <YAxis/>
              <Tooltip/>
              <Line
                type="monotone"
                dataKey="files"
                stroke="#8884d8"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      }
    </div>
  );
}
