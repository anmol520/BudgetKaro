import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';

export default function DashboardPage() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: '', amount: '', category: '' });
  const navigate = useNavigate();

  const loadBudgets = async () => {
    const { data } = await api.get('/budgets');
    setItems(data);
  };

  useEffect(() => {
    loadBudgets();
  }, []);

  const addBudget = async (e) => {
    e.preventDefault();
    await api.post('/budgets', { ...form, amount: Number(form.amount) });
    setForm({ title: '', amount: '', category: '' });
    loadBudgets();
  };

  const deleteBudget = async (id) => {
    await api.delete(`/budgets/${id}`);
    loadBudgets();
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Budget Dashboard</h1>
        <div className="space-x-2">
          <Link to="/analytics" className="bg-indigo-600 text-white px-3 py-2 rounded">Analytics</Link>
          <button onClick={logout} className="bg-slate-700 text-white px-3 py-2 rounded">Logout</button>
        </div>
      </header>

      <form onSubmit={addBudget} className="grid md:grid-cols-4 gap-2 bg-white p-4 rounded shadow">
        <input className="border p-2 rounded" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <input className="border p-2 rounded" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required />
        <input className="border p-2 rounded" type="number" step="0.01" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} required />
        <button className="bg-emerald-600 text-white rounded p-2">Add Budget</button>
      </form>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Budget Items</h2>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item._id} className="flex items-center justify-between border-b pb-2">
              <span>{item.title} ({item.category}) - ${item.amount.toFixed(2)}</span>
              <button onClick={() => deleteBudget(item._id)} className="text-red-600">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
