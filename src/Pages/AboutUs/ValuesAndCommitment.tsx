
import { FaHandshake, FaLeaf, FaUserShield, FaChartLine, FaRecycle, FaHandsHelping } from 'react-icons/fa';

const ValuesAndCommitment = () => {
    const values = [
        {
          title: 'Customer Care',
          description: 'We focus on delivering exceptional service and support, ensuring our customers are always satisfied.',
          icon: <FaHandshake className="text-4xl text-orange-500" />,
        },
        {
          title: 'Eco-Friendliness',
          description: 'Our commitment to eco-friendly practices helps reduce our environmental footprint and promote sustainability.',
          icon: <FaLeaf className="text-4xl text-orange-500" />,
        },
        {
          title: 'Honesty',
          description: 'Honesty is the cornerstone of our business, guiding our actions and decisions with transparency and integrity.',
          icon: <FaUserShield className="text-4xl text-orange-500" />,
        },
        {
          title: 'Development',
          description: 'We are dedicated to continuous development and innovation, always seeking to enhance and expand our services.',
          icon: <FaChartLine className="text-4xl text-orange-500" />,
        },
        {
          title: 'Reusability',
          description: 'We advocate for recycling and responsible waste management to support environmental conservation.',
          icon: <FaRecycle className="text-4xl text-orange-500" />,
        },
        {
          title: 'Community Engagement',
          description: 'We are deeply committed to our community, actively participating in local initiatives and support programs.',
          icon: <FaHandsHelping className="text-4xl text-orange-500" />,
        },
      ];
      

      
    return (
        <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl font-bold text-[#020C29] dark:text-white underline italic mb-8">
          Values & <span className='text-orange-500'>Commitment</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 shadow-lg rounded-lg p-6">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ValuesAndCommitment;