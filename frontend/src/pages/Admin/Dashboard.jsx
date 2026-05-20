import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Download, Trash2, Users, ClipboardList, Clock, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalRequests: 0, pending: 0, inProgress: 0, completed: 0 });
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const API_URL = import.meta.env.VITE_API_URL || '';

  const fetchData = async () => {
    try {
      setLoading(true);
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      
      const statsRes = await axios.get(`${API_URL}/api/contacts/stats`, config);
      setStats(statsRes.data);
      
      const contactsRes = await axios.get(`${API_URL}/api/contacts`, config);
      setContacts(contactsRes.data);
      
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.token]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusChange = async (id, newStatus) => {
    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      await axios.put(`${API_URL}/api/contacts/${id}/status`, { status: newStatus }, config);
      fetchData(); // Refresh data to update stats
    } catch (error) {
      console.error('Failed to update status', error);
      alert('Failed to update status');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      try {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        await axios.delete(`${API_URL}/api/contacts/${id}`, config);
        fetchData();
      } catch (error) {
        console.error('Failed to delete', error);
        alert('Failed to delete request');
      }
    }
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (contact.serviceType && contact.serviceType.toLowerCase().includes(searchTerm.toLowerCase())) ||
    contact.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportCSV = () => {
    const headers = ['Date', 'Name', 'Email', 'Phone', 'Service Type', 'Status', 'Message'];
    const csvContent = [
      headers.join(','),
      ...contacts.map(c => [
        new Date(c.date).toLocaleDateString(),
        `"${c.name}"`,
        `"${c.email}"`,
        `"${c.phone || ''}"`,
        `"${c.serviceType || ''}"`,
        `"${c.status}"`,
        `"${c.message.replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `service_requests_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
            <p className="text-slate-500 mt-1">Welcome back, {user?.username}.</p>
          </div>
          <button 
            onClick={exportCSV} 
            className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-700 transition shadow-sm"
          >
            <Download size={18} />
            Export CSV
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<ClipboardList className="text-blue-500"/>} title="Total Requests" value={stats.totalRequests} />
          <StatCard icon={<Clock className="text-amber-500"/>} title="Pending" value={stats.pending} />
          <StatCard icon={<Users className="text-indigo-500"/>} title="In Progress" value={stats.inProgress} />
          <StatCard icon={<CheckCircle className="text-green-500"/>} title="Completed" value={stats.completed} />
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-lg font-bold text-slate-800">Recent Service Requests</h3>
            <input 
              type="text" 
              placeholder="Search by name, email, or status..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg text-sm w-full sm:w-64 focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Client</th>
                  <th className="px-6 py-4 font-semibold">Service Type</th>
                  <th className="px-6 py-4 font-semibold">Message</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-slate-500">Loading data...</td>
                  </tr>
                ) : filteredContacts.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-slate-500">No requests found.</td>
                  </tr>
                ) : (
                  filteredContacts.map(contact => (
                    <tr key={contact._id} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                        {new Date(contact.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-900">{contact.name}</div>
                        <div className="text-sm text-slate-500">{contact.email}</div>
                        <div className="text-sm text-slate-400">{contact.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700">
                        <span className="bg-slate-100 px-3 py-1 rounded-full">{contact.serviceType || 'IT Support'}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 max-w-xs truncate" title={contact.message}>
                        {contact.message}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select 
                          value={contact.status}
                          onChange={(e) => handleStatusChange(contact._id, e.target.value)}
                          className={`text-sm font-semibold rounded-full px-3 py-1 border-0 ring-1 ring-inset focus:ring-2 focus:ring-primary-500 ${getStatusClass(contact.status)}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          onClick={() => handleDelete(contact._id)}
                          className="text-red-400 hover:text-red-600 transition p-2 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
    <div>
      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">{title}</p>
      <h4 className="text-3xl font-bold text-slate-800">{value}</h4>
    </div>
    <div className="p-4 bg-slate-50 rounded-xl">
      {icon}
    </div>
  </div>
);

const getStatusClass = (status) => {
  switch(status) {
    case 'Pending': return 'bg-amber-50 text-amber-700 ring-amber-600/20';
    case 'In Progress': return 'bg-indigo-50 text-indigo-700 ring-indigo-600/20';
    case 'Completed': return 'bg-green-50 text-green-700 ring-green-600/20';
    default: return 'bg-slate-50 text-slate-700 ring-slate-600/20';
  }
};

export default Dashboard;
