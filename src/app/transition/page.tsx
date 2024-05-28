export default function Home() {
    return (
        <div className="flex gap-10 items-center justify-center h-screen">
            <div className="peer group grid place-items-center h-40 w-40 bg-blue-400 hover:bg-purple-400 transition-colors duration-300 ease-in-out deplay-300">
                <div className="h-10 w-20 bg-black group-hover:bg-red-600"></div>
                <div className="h-10 w-20 bg-black group-hover:bg-red-600"></div>
            </div>
            <div className="h-20 w-20 bg-green-100 animate-spin grid place-items-center">Spin</div>
            <div className="h-20 w-20 bg-green-100 animate-ping grid place-items-center">Ping</div>
            <div className="h-20 w-20 bg-green-100 animate-pulse grid place-items-center">Pulse</div>
            <div className="h-20 w-20 bg-green-100 animate-bounce grid place-items-center">Bounce</div>
        </div>
    );
}
