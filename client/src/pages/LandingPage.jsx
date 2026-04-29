import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">BudgetKaro</h1>
        <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Login / Register
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Smart Budgeting Made Simple</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Track budgets, control spending, and grow your savings.
          </h2>
          <p className="text-slate-600 text-lg">
            BudgetKaro helps you manage expense categories, add or remove budget entries instantly, and visualize spending analytics with clean charts.
          </p>
          <div className="flex gap-3">
            <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium">
              Get Started
            </Link>
            <a href="#features" className="border border-slate-300 px-5 py-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50">
              Explore Features
            </a>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 border border-slate-100">
          <h3 className="text-xl font-semibold mb-4">Why BudgetKaro?</h3>
          <ul className="space-y-4 text-slate-700">
            <li>✅ Secure JWT authentication for personal accounts</li>
            <li>✅ Quick add/delete budget items by category</li>
            <li>✅ Real-time spending analytics in charts</li>
            <li>✅ Clean and responsive UI with Tailwind CSS</li>
          </ul>
        </div>
      </main>

      <section id="features" className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border"><h4 className="font-semibold mb-2">Budget Dashboard</h4><p className="text-sm text-slate-600">Manage your budgets from a single place with clear actions.</p></div>
        <div className="bg-white p-5 rounded-xl shadow-sm border"><h4 className="font-semibold mb-2">Analytics</h4><p className="text-sm text-slate-600">Understand spending patterns by category with visual insights.</p></div>
        <div className="bg-white p-5 rounded-xl shadow-sm border"><h4 className="font-semibold mb-2">Fast Setup</h4><p className="text-sm text-slate-600">Login, start adding entries, and monitor your financial progress.</p></div>
      </section>
    </div>
  );
}
