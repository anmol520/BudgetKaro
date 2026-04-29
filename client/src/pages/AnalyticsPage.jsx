import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pie, PieChart, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import api from '../api';

const colors = ['#2563eb', '#16a34a', '#f59e0b', '#db2777', '#6d28d9'];

export default function AnalyticsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/budgets/analytics').then((res) => setData(res.data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Spending Analytics</h1>
        <Link to="/" className="bg-slate-700 text-white px-3 py-2 rounded">Back</Link>
      </div>
      <div className="bg-white rounded shadow p-4 h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="total" nameKey="_id" cx="50%" cy="50%" outerRadius={130} label>
              {data.map((_, idx) => <Cell key={idx} fill={colors[idx % colors.length]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
