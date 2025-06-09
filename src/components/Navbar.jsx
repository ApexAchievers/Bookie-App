export default function Navbar() {
    return(
        <nav className="flex flex-row justify-around mt-10">
            <h1 className="flex flex-row text-2xl gap-2 font-bold">
                <span>Bookie</span>
                <span className="text-purple-800">App</span>
            </h1>
            <div className="flex flex-row gap-4">
                <button className="cursor-pointer">Login</button>
                <button className="cursor-pointer border py-2 px-6 bg-purple-800 text-white rounded-">Signup</button>
            </div>
        </nav>
    );
}