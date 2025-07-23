import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

const Input = () => {
    const [website, setWebsite] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();

        if (!website.trim() || !username.trim() || !password.trim()) {
            alert("Please fill in all fields!");
            return;
        }

        const entry = { website, username, password };

        const saved = JSON.parse(localStorage.getItem("passwords")) || [];
        saved.push(entry);
        localStorage.setItem("passwords", JSON.stringify(saved));

        setWebsite("");
        setUsername("");
        setPassword("");
    };


    return (
        <div className="mx-auto m-5 w-[80vw] h-[5vh]">
            <form>
                <div className="flex gap-4">
                    <input
                        className="bg-white w-[33%] text-black rounded-xl p-3"
                        type="text"
                        placeholder="Website"
                        name="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                    <input
                        className="bg-white w-[33%] text-black rounded-xl p-3"
                        type="text"
                        placeholder="Username or Email"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="bg-white w-[33%] text-black rounded-xl p-3"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    onClick={handleAdd}
                    className="m-4 text-xl mx-auto bg-blue-600 text-white px-4 py-2 rounded-lg flex justify-center gap-2 items-center w-[10vw] transition-all ease-in hover:scale-110 cursor-pointer"
                >
                    <MdAddToPhotos /> Add
                </button>
            </form>
        </div>
    );
};

export default Input;
