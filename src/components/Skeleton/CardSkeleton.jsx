import React from "react";

const CardSkeleton = ({ length = 3, imgSkeletonPosition = "top" }) => {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: length }).map((_value, index) => (
        <div key={index} className="flex w-full flex-col gap-4">
          {imgSkeletonPosition === "top" && (
            <div className="skeleton h-32 w-full"></div>
          )}
          <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
            <div className="flex flex-col flex-1 gap-4">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
          {imgSkeletonPosition === "bottom" && (
            <div className="skeleton h-32 w-full"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
