import React, { useState } from 'react';
import DashboardCard01 from '../../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../../partials/dashboard/DashboardCard05';

function Home() {

    return (
        <main className="grow">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                {/* Dashboard actions */}
                <div className="sm:flex sm:justify-between sm:items-center mb-8">

                    {/* Left: Title */}
                    <div className="mb-4 sm:mb-0">
                        <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Dashboard</h1>
                    </div>
                </div>


                {/* Cards */}
                <div className="grid grid-cols-12 gap-6">

                    {/* Line chart (Acme Plus) */}
                    <DashboardCard01 />
                    {/* Line chart (Acme Advanced) */}
                    <DashboardCard02 />
                    {/* Line chart (Acme Professional) */}
                    <DashboardCard03 />
                    {/* Bar chart (Direct vs Indirect) */}
                    <DashboardCard04 />
                    {/* Line chart (Real Time Value) */}
                    <DashboardCard05 />
                </div>

            </div>
        </main>
    );
}

export default Home;