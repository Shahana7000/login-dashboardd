import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Admin Auth Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminSignup from './pages/admin/AdminSignup';
import AdminForget from './pages/admin/AdminForget';
import AdminResetpassword from './pages/admin/AdminResetpassword';
import AdminOtp from './pages/admin/AdminOtp';

// User Auth Pages
import UserLogin from './pages/user/UserLogin';
import UserForget from './pages/user/UserForget';
import UserOtp from './pages/user/UserOtp';
import UserResetPassword from './pages/user/UserResetPassword';

// Dashboard Pages
import EmployeeDetails from "./pages/Dashboardpages/EmployeeDetails";
import PracticeManagement from "./pages/Dashboardpages/PracticeManagement"
import Profile from './pages/Dashboardpages/Profile';
import WorkCentre from './pages/Dashboardpages/WorkCentre'
import NotFound from './pages/404Error/NotFound'
import User from './pages/Dashboardpages/User'

// Layouts
import AuthLayout from './layout/Admin/AuthLayout';           // Admin - centered card layout
import UserAuthLayout from './layout/User/UserAuthLayout';   // User - full screen split layout
import DashboardLayout from './layout/Dashboard/DashboardLayout';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>

        {/* ✅ ADMIN Auth Flow - centered card layout */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/signup" element={<AdminSignup />} />
          <Route path="/forget" element={<AdminForget />} />
          <Route path="/otp/:id" element={<AdminOtp />} />
          <Route path="/reset-password/:id" element={<AdminResetpassword />} />
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