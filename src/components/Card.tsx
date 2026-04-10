const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-xl p-4 ${className} dark:bg-gray-800`}
    >
      {children}
    </div>
  );
};

export default Card;
