const LineSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 5 }).map((_value, index) => (
        <div key={index} className="skeleton h-14 w-full"></div>
      ))}
    </div>
  );
};

export default LineSkeleton;
