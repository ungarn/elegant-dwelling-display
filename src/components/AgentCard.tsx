const AgentCard = ({ agent }: { agent: { name: string; title: string; image: string; phone: string } }) => {
  return (
    <div className="flex flex-col items-center shadow-xl rounded-lg p-6 bg-white/90 backdrop-blur-sm">
      <img
        src={agent.image}
        alt={agent.name}
        className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
      />
      <h3 className="text-2xl font-light text-gray-900 mb-2">{agent.name}</h3>
      <p className="text-gray-600 mb-4">{agent.title}</p>
      <p className="text-gray-600">{agent.phone}</p>
    </div>
  );
};

export default AgentCard;