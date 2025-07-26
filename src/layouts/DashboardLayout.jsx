// src/layouts/DashboardLayout.jsx
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="p-4 bg-gray-100 h-full overflow-y-auto">
                    <Form />
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
