// import React from 'react';
// import { ArrowLeft, Camera, Pencil } from 'lucide-react';

// const RegisterEmployeeModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div 
//         className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
//         onClick={onClose}
//       />
      
//       {/* Modal Content */}
//       <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
//         {/* Header */}
//         <div className="relative p-6 flex items-center justify-center border-b border-gray-50">
//           <button 
//             onClick={onClose}
//             className="absolute left-6 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <ArrowLeft className="w-6 h-6" />
//           </button>
//           <h2 className="text-xl font-semibold text-gray-800">Register Employee</h2>
//         </div>

//         <div className="p-10">
//           {/* Avatar Upload Section */}
//           <div className="flex flex-col items-center mb-8">
//             <div className="relative">
//               <div className="w-24 h-24 bg-[#e6f3f7] rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-sm">
//                 <div className="w-full h-full bg-[#157395]/10 flex items-center justify-center">
//                   <svg className="w-16 h-16 text-[#157395]/40" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//                   </svg>
//                 </div>
//                 {/* Small camera icon overlay on avatar */}
//                 <div className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow-md border border-gray-100">
//                   <Camera className="w-3 h-3 text-gray-500" />
//                 </div>
//               </div>
//             </div>
//             <button className="flex items-center gap-1.5 mt-3 text-sm font-medium text-gray-600 hover:text-[#157395] transition-colors">
//               <Pencil className="w-3.5 h-3.5" />
//               Edit
//             </button>
//           </div>

//           {/* Form Grid */}
//           <form className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* First Name */}
//               <div className="space-y-1.5">
//                 <label className="text-sm font-semibold text-gray-700">First Name</label>
//                 <input 
//                   type="text" 
//                   placeholder="Enter First Name"
//                   className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
//                 />
//               </div>
//               {/* Last Name */}
//               <div className="space-y-1.5">
//                 <label className="text-sm font-semibold text-gray-700">Last Name</label>
//                 <input 
//                   type="text" 
//                   placeholder="Enter Last Name"
//                   className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
//                 />
//               </div>
//               {/* Phone Number */}
//               <div className="space-y-1.5">
//                 <label className="text-sm font-semibold text-gray-700">Phone Number</label>
//                 <input 
//                   type="text" 
//                   placeholder="Enter Phone Number"
//                   className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
//                 />
//               </div>
//               {/* Email */}
//               <div className="space-y-1.5">
//                 <label className="text-sm font-semibold text-gray-700">Email</label>
//                 <input 
//                   type="email" 
//                   placeholder="Enter Email ID"
//                   className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
//                 />
//               </div>
//               {/* Password */}
//               <div className="space-y-1.5">
//                 <label className="text-sm font-semibold text-gray-700">Password</label>
//                 <input 
//                   type="password" 
//                   placeholder="Enter Password"
//                   className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
//                 />
//               </div>
//               {/* Confirm Password */}
//               <div className="space-y-1.5">
//                 <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
//                 <input 
//                   type="password" 
//                   placeholder="Re-Enter Password"
//                   className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
//                 />
//               </div>
//               {/* Roles */}
//               <div className="space-y-1.5">
//                 <label className="text-sm font-semibold text-gray-700">Roles</label>
//                 <input 
//                   type="text" 
//                   placeholder="Enter Roles"
//                   className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
//                 />
//               </div>
//               {/* Employee Code */}
//               <div className="space-y-1.5">
//                 <label className="text-sm font-semibold text-gray-700">Employee Code</label>
//                 <input 
//                   type="text" 
//                   placeholder="Enter Employee Code"
//                   className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
//                 />
//               </div>
//             </div>

//             {/* Save Button */}
//             <div className="pt-4">
//               <button 
//                 type="button"
//                 onClick={onClose}
//                 className="w-full bg-[#157395] text-white py-3 rounded-lg font-semibold hover:bg-[#126280] transition-colors shadow-lg shadow-[#157395]/20"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterEmployeeModal;


import React from 'react';
import { ArrowLeft, Camera, Pencil } from 'lucide-react';

const RegisterEmployeeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // const[formdata, setFormdata] = useState({
    
  // })

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">

        {/* Header */}
        <div className="relative p-4 sm:p-6 flex items-center justify-center border-b border-gray-50">
          <button
            onClick={onClose}
            className="absolute left-4 sm:left-6 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Register Employee
          </h2>
        </div>

        <div className="p-6 sm:p-10">

          {/* Avatar */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">

              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#e6f3f7] rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-sm">

                <div className="w-full h-full bg-[#157395]/10 flex items-center justify-center">
                  <svg className="w-14 h-14 sm:w-16 sm:h-16 text-[#157395]/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>

                <div className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow-md border border-gray-100">
                  <Camera className="w-3 h-3 text-gray-500" />
                </div>

              </div>
            </div>

            <button className="flex items-center gap-1.5 mt-3 text-sm font-medium text-gray-600 hover:text-[#157395] transition-colors">
              <Pencil className="w-3.5 h-3.5" />
              Edit
            </button>
          </div>

          {/* Form */}
          <form className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* First Name */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Re-Enter Password"
                  className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
                />
              </div>

              {/* Roles */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Roles</label>
                <input
                  type="text"
                  placeholder="Enter Roles"
                  className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
                />
              </div>

              {/* Employee Code */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Employee Code</label>
                <input
                  type="text"
                  placeholder="Enter Employee Code"
                  className="w-full bg-[#F0F3F8] border-2 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-[#157395]/20 outline-none"
                />
              </div>

            </div>

            {/* Save Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full bg-[#157395] text-white py-3 rounded-lg font-semibold hover:bg-[#126280] transition-colors shadow-lg shadow-[#157395]/20"
              >
                Save
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterEmployeeModal;