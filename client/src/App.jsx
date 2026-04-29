import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import LandingPage from './pages/LandingPage';

const isLoggedIn = () => Boolean(localStorage.getItem('token'));

const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" replace />;
};

const HomeRoute = () => {
  return isLoggedIn() ? <Navigate to="/dashboard" replace /> : <LandingPage />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <AnalyticsPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
