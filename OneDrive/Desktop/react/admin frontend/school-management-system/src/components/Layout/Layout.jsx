import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="flex">
				<Sidebar />
				<div className="flex-1">
					{/* Header is typically rendered inside pages but provide a small global header placeholder */}
					<Header breadcrumbs={['Dashboard']} />
					<main className="p-6">{children}</main>
				</div>
			</div>
		</div>
	);
};

export default Layout;
