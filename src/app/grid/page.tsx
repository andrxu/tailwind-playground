export default function Home() {
    return (
        <>
            <div className="grid grid-cols-2 gap-10 p-5 sm:grid-cols-3">
                <div className="w-full aspect-video bg-purple-400 shadow-neon"></div>
                <div className="w-full aspect-video bg-purple-400"></div>
                <div className="w-full aspect-video bg-purple-400"></div>
                <div className="w-full aspect-video bg-purple-400"></div>
                <div className="w-full aspect-video bg-purple-400"></div>
                <div className="w-full aspect-video bg-purple-400"></div>
            </div>
            <div className="grid grid-cols-2 gap-10 p-5 sm:max-md:grid-cols-3">
                <div className="w-full aspect-video bg-green-400"></div>
                <div className="w-full aspect-video bg-green-400"></div>
                <div className="w-full aspect-video bg-green-400"></div>
                <div className="w-full aspect-video bg-green-400"></div>
                <div className="w-full aspect-video bg-green-400"></div>
                <div className="w-full aspect-video bg-green-400"></div>
            </div>
            <div className="grid grid-cols-2 gap-10 p-5 custom:grid-cols-3">
                <div className="w-full aspect-video bg-red-400"></div>
                <div className="w-full aspect-video bg-red-400"></div>
                <div className="w-full aspect-video bg-red-400"></div>
                <div className="w-full aspect-video bg-red-400"></div>
                <div className="w-full aspect-video bg-red-400"></div>
                <div className="w-full aspect-video bg-red-400"></div>
            </div>
        </>
    );
}