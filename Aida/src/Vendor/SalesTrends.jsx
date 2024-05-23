import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Example data
const dataThisYear = [
  { name: 'Jan', value: 24000 },
  { name: 'Feb', value: 20000 },
  { name: 'Mar', value: 28000 },
  { name: 'Apr', value: 35000 },
  { name: 'May', value: 40000 },
  { name: 'Jun', value: 30000 },
  { name: 'Jul', value: 27000 },
  { name: 'Aug', value: 31000 },
  { name: 'Sep', value: 20000 },
  { name: 'Oct', value: 28000 },
  { name: 'Nov', value: 35000 },
  { name: 'Dec', value: 32000 },
];

const dataLastYear = [
  { name: 'Jan', value: 21000 },
  { name: 'Feb', value: 18000 },
  { name: 'Mar', value: 26000 },
  { name: 'Apr', value: 34000 },
  { name: 'May', value: 39000 },
  { name: 'Jun', value: 28000 },
  { name: 'Jul', value: 26000 },
  { name: 'Aug', value: 30000 },
  { name: 'Sep', value: 19000 },
  { name: 'Oct', value: 27000 },
  { name: 'Nov', value: 33000 },
  { name: 'Dec', value: 31000 },
];

const SalesTrends = () => {
  const [year, setYear] = useState('thisYear');
  const [period, setPeriod] = useState('year');
  const data = year === 'thisYear' ? dataThisYear : dataLastYear;

  const monthlyAverage = data.reduce((acc, item) => acc + item.value, 0) / data.length;
  const totalThisYear = dataThisYear.reduce((acc, item) => acc + item.value, 0);
  const totalLastYear = dataLastYear.reduce((acc, item) => acc + item.value, 0);
  const percentageChange = ((totalThisYear - totalLastYear) / totalLastYear) * 100;

  return (
    <div className="p-6 bg-white shadow-md rounded-md w-full">
     <div className="text-2xl font-semibold bg-teal text-white inline-block p-2"> <FontAwesomeIcon icon={faChartSimple} className="mr-1" /> Sales Trends</div>

      <div className="mb-6 flex justify-between">
    
        <div className="bg-white p-4 rounded text-center">
          <div className="text-lg font-semibold text-gray">Monthly Average</div>
          <div className="text-2xl font-bold">${monthlyAverage.toLocaleString()}K</div>
          <div className="text-teal flex items-center justify-center">
            <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
            12.56%
          </div>
        </div>
      
        <div className="bg-white p-4 rounded text-left">
          <div className="text-lg font-semibold text-gray">This Year</div>
          <div className="text-2xl font-bold">${totalThisYear.toLocaleString()}K</div>
          <div className={`flex items-center justify-center ${percentageChange >= 0 ? 'text-teal' : 'text-salmon'}`}>
            <FontAwesomeIcon icon={percentageChange >= 0 ? faArrowUp : faArrowDown} className="mr-1" />
            {percentageChange.toFixed(2)}%
          </div>
        </div>

        <div className="flex-row space-x-0">
        <div className="flex border border-teal">
  <button
    className={`flex-1 px-4 py-1 rounded-none ${period === 'year' ? 'bg-white text-black border-black' : 'bg-teal text-white'}`}
    onClick={() => setPeriod('year')}
  >
    Year
  </button>
  <button 
    className={`flex-1 px-3 py-1 rounded-none ${period === 'month' ? 'bg-white text-black border-black' : 'bg-teal text-white'}`}
    onClick={() => setPeriod('month')}
  >
    Month
  </button>
  <button
    className={`flex-1 px-4 py-1 rounded-none ${period === 'week' ? 'bg-white text-black' : 'bg-teal text-white'}`}
    onClick={() => setPeriod('week')}
  >
    Week
  </button>
</div>

</div>

      </div>


      <BarChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `${value / 1000}K`} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#00c2c2" />
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
