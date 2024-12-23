// import { useState } from "react";
function BrokerStatsModal({ isOpen, onClose, brokerStats }) {
  
  // const [commission, setCommission] = useState(brokerStats?.commissionPercentage || 2);

  // const handleCommissionChange = async (value) => {
  //   const newCommission = parseFloat(value);
  //   if (newCommission >= 0 && newCommission <= 100) {
  //     setCommission(newCommission);
  //     if (onCommissionUpdate && brokerStats.brokerInfo) {
  //       console.log("HII WORLD");
  //       console.log(brokerStats.brokerInfo);
  //       onCommissionUpdate(brokerStats.brokerInfo.email, newCommission);
  //     }
  //   }
  // };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Broker Statistics</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="text-sm text-gray-600">Broker Code</h3>
              <p className="text-lg font-semibold">{brokerStats?.brokerCode || 'N/A'}</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h3 className="text-sm text-gray-600">Total Referrals</h3>
              <p className="text-lg font-semibold">{brokerStats?.totalReferrals || 0}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded">
              <h3 className="text-sm text-gray-600">Total Investment</h3>
              <p className="text-lg font-semibold">
                ₹{brokerStats?.referredUsers?.reduce(
                  (sum, ref) => sum + (ref.investment || 0), 
                  0
                ).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Referred Users</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Signup Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Investment</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {brokerStats?.referredUsers?.map((referral, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">{referral.user?.name || 'N/A'}</td>
                      <td className="px-6 py-4">{referral.user?.email || 'N/A'}</td>
                      <td className="px-6 py-4">{referral.user?.phone || 'N/A'}</td>
                      <td className="px-6 py-4">
                        {new Date(referral.signupDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 font-medium">
                        ₹{(referral.investment || 0).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default BrokerStatsModal;