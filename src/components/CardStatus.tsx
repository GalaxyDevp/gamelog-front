import Card from "./Card";

interface CardStatusProps {
  item: {
    id: number;
    title: string;
    number: number;
    border: string;
    color: string;
    icon: React.ReactNode;
  };
}

const CardStatus = ({ item }: CardStatusProps) => {
  return (
    <Card
      key={item.id}
      className={`border border-1 ${item.border} bg-white w-44`}
    >
      <div className="flex items-center gap-4">
        <div className={`${item.color} p-2 rounded-lg`}>{item.icon}</div>
        <div>
          <p className="text-lg font-semibold">{item.number}</p>
          <p className="text-sm">{item.title}</p>
        </div>
      </div>
    </Card>
  );
};
export default CardStatus;
