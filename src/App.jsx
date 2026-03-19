import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Admin Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forget from './pages/Forget';
import ResetPassword from './pages/ResetPassword';
import SendOtp from './pages/SendOtp';

// User Auth Pages
import UserLogin from './pages/UserLogin';
import UserForget from './pages/UserForget';
import UserOtp from './pages/UserOtp';
import UserResetPassword from './pages/UserResetPassword';

// Dashboard Pages
import EmployeeDetails from './pages/EmployeeDetails';
import PracticeManagement from './pages/PracticeManagement';
import Profile from './pages/Profile';
import WorkCentre from './pages/WorkCentre';
import NotFound from './pages/NotFound';
import User from './pages/User';

// Layouts
import AuthLayout from './layout/AuthLayout';           // Admin - centered card layout
import UserAuthLayout from './layout/UserAuthLayout';   // User - full screen split layout
import DashboardLayout from './layout/DashboardLayout';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>

        {/* ✅ ADMIN Auth Flow - centered card layout */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/otp/:id" element={<SendOtp />} />
          <Route path="/reset-password/:id" element={<ResetPassword />} />
        </Route>

        {/* ✅ USER Auth Flow - full screen split layout */}
        <Route element={<UserAuthLayout />}>
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-forget" element={<UserForget />} />
          <Route path="/user-otp/:id" element={<UserOtp />} />
          <Route path="/user-reset-password/:id" element={<UserResetPassword />} />
        </Route>

        {/* Dashboard Pages */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Navigate to="/work-centre" replace />} />
          <Route path="/work-centre" element={<WorkCentre />} />
          <Route path="/employee-details" element={<EmployeeDetails />} />
          <Route path="/roles-permission" element={<EmployeeDetails />} />
          <Route path="/team-management" element={<EmployeeDetails />} />
          <Route path="/add-location" element={<EmployeeDetails />} />
          <Route path="/practice-management" element={<PracticeManagement />} />
          <Route path="/profile" element={<Profile />} />
            <Route path='/users' element={<User />} />
        </Route>
      
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;