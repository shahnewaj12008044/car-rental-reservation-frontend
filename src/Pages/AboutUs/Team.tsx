

type TTeamMembers = {
  image: string;
  name: string;
  post: string;
};
const Team = () => {
  const teamMembers = [
    {
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "John Doe",
      post: "CEO",
    },
    {
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Jane Smith",
      post: "CTO",
    },
    {
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Emily Johnson",
      post: "CFO",
    },
    {
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "Michael Brown",
      post: "COO",
    },
    {
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Sarah Davis",
      post: "CMO",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold italic underline text-[#020C29] dark:text-white text-center mb-2">
        Our <span className="text-orange-500">Team</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-between ">
      {teamMembers?.map((team: TTeamMembers, index) => (
        
        
          <div key= { index} className="flex flex-col gap-2 h-64 relative items-center bg-white p-5 rounded-md shadow-xl shadow-blue-200 custom-transition">
            <img
              className="rounded-full hover:ring-2 ring-orange-600"
              src={team?.image}
              alt=""
            />
            <div className="mt-auto">
                <h1 className="font-bold italic text-[#020C29]">Name: {team?.name}</h1>
                <p className="text-xs">Post: {team?.post}</p>
            </div>
          </div>
      ))}
      </div>
    </div>
  );
};

export default Team;
