const CardImg = ({
  children,
  className,
  img,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  img: string;
  onClick: () => void;
}) => {
  return (
    <div
      className={`rounded-xl w-fit ${className} hover:scale-105 transition-all duration-300 bg-white dark:border-gray-700 dark:bg-gray-800`}
      onClick={onClick}
    >
      <div>
        <img src={img} alt="" className="w-44 h-60 object-cover rounded-t-lg" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CardImg;
