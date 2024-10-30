import React, { useState } from "react";
import DashboardCard12 from "../../partials/dashboard/DashboardCard12";

function Home() {
  return (
    <main className="grow">
      <div className="px-4 sm:px-6 lg:px-8 w-full max-w-9xl mx-auto">
        {/* Dashboard actions */}
        <div className="flex items-center">
          <div className="flex justify-end items-end">
            <h2 className="font-bold mx-8 pt-5 text-lg font-lg text-gray-800 dark:text-white mb-4">
              System Logs
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Line chart (Real Time Value) */}
          <DashboardCard12 />
        </div>
      </div>
    </main>
  );
}

export default Home;
