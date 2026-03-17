import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forget from './pages/Forget';
import ResetPassword from './pages/ResetPassword';
import EmployeeDetails from './pages/EmployeeDetails';
import PracticeManagement from './pages/PracticeManagement';
import DashboardLayout from './layout/DashboardLayout';
import './App.css';
import SendOtp from './pages/SendOtp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Pages (no sidebar) */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/forget' element={<Forget />} />
        <Route path="/otp" element={<SendOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard Pages (with sidebar) */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<EmployeeDetails />} />
          <Route path="/employee-details" element={<EmployeeDetails />} />
          <Route path="/roles-permission" element={<EmployeeDetails />} />
          <Route path="/team-management" element={<EmployeeDetails />} />
          <Route path="/add-location" element={<EmployeeDetails />} />
          <Route path="/practice-management" element={<PracticeManagement />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
