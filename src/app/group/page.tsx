export default function Home() {
  return (
    <div className="flex gap-3">
      <div className="peer group grid place-items-center h-40 w-40 bg-blue-400 hover:bg-purple-400">
        <div className="h-10 w-20 bg-black group-hover:bg-red-600"></div>
        <div className="h-10 w-20 bg-black group-hover:bg-red-600"></div>
      </div>
      <div className="h-40 w-40 bg-green-400 peer-hover:bg-red-600"></div>
      <div className="peer/name group/other-name grid place-items-center h-40 w-40 bg-blue-400 hover:bg-purple-400">
        <div className="h-10 w-20 bg-black group-hover/other-name:bg-red-600"></div>
        <div className="h-10 w-20 bg-black group-hover/other-name:bg-red-600"></div>
      </div>
      <div className="h-40 w-40 bg-green-400 peer-hover/name:bg-red-600"></div>
    </div>
  );
}
