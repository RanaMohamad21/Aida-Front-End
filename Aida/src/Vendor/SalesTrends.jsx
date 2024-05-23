import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const dataThisYear = [
  { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
  // Add more data for each month
];

const dataLastYear = [
  { name: 'January', uv: 3000, pv: 2400, amt: 2400 },
  { name: 'February', uv: 2500, pv: 1398, amt: 2210 },
  { name: 'March', uv: 1500, pv: 9800, amt: 2290 },
  { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
  // Add more data for each month
];

const SalesTrends = () => {
  const [year, setYear] = useState('thisYear');
  const data = year === 'thisYear' ? dataThisYear : dataLastYear;

  const monthlyAverage = data.reduce((acc, item) => acc + item.uv, 0) / data.length;
  const raiseOrSink = (monthlyAverage - dataLastYear.reduce((acc, item) => acc + item.uv, 0) / dataLastYear.length).toFixed(2);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <div className="bg-white p-4 rounded shadow-md text-center">
          <div className="text-lg font-semibold">Monthly Average</div>
          <div className="text-2xl font-bold">${monthlyAverage.toFixed(2)}K</div>
        </div>
        <div className="bg-white p-4 rounded shadow-md text-center">
          <div className="text-lg font-semibold">Raise/Sink</div>
          <div className={`text-2xl font-bold ${raiseOrSink >= 0 ? 'text-green-500' : 'text-red-500'}`}>{raiseOrSink >= 0 ? '+' : ''}${raiseOrSink}K</div>
        </div>
      </div>

      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `${value}K`} />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>

      <div className="mt-4 flex justify-center">
        <div>
          <label className="mr-4">
            <input
              type="radio"
              value="thisYear"
              checked={year === 'thisYear'}
              onChange={() => setYear('thisYear')}
            />
            This Year
          </label>
          <label>
            <input
              type="radio"
              value="lastYear"
              checked={year === 'lastYear'}
              onChange={() => setYear('lastYear')}
            />
            Last Year
          </label>
        </div>
      </div>
    </div>
  );
};

export default SalesTrends;

