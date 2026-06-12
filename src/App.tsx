/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import ClassroomDashboard from "./components/ClassroomDashboard";

export default function App() {
  const [studentName, setStudentName] = useState<string | null>(null);

  const handleLogin = (name: string) => {
    setStudentName(name);
  };

  const handleLogout = () => {
    setStudentName(null);
  };

  return (
    <div className="min-h-screen text-neutral-800 antialiased selection:bg-neutral-900 selection:text-white">
      {studentName ? (
        <ClassroomDashboard studentName={studentName} onLogout={handleLogout} />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </div>
  );
}

