export default function Loading() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
        return (
          <div
            key={value}
            className="flex-1 rounded-md h-40 mb-2 mr-2 bg-gray-50  animate-pulse"
          ></div>
        );
      })}
    </>
  );
}
