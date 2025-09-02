import { useState, useEffect } from "react";
import { MdAddToPhotos, MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Input = () => {
    const [website, setWebsite] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [savedEntries, setSavedEntries] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [visiblePasswords, setVisiblePasswords] = useState(new Set());

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("passwords")) || [];
        setSavedEntries(saved);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!website.trim() || !username.trim() || !password.trim()) {
            alert("Please fill in all fields!");
            return;
        }

        const saved = JSON.parse(localStorage.getItem("passwords")) || [];

        if (editingId) {
            const updatedEntries = saved.map(entry =>
                entry.id === editingId
                    ? { ...entry, website: website.trim(), username: username.trim(), password: password.trim() }
                    : entry
            );
            localStorage.setItem("passwords", JSON.stringify(updatedEntries));
            setSavedEntries(updatedEntries);
            setEditingId(null);
            alert("Password updated successfully!");
        } else {
            const entry = {
                id: Date.now(),
                website: website.trim(),
                username: username.trim(),
                password: password.trim()
            };
            saved.push(entry);
            localStorage.setItem("passwords", JSON.stringify(saved));
            setSavedEntries(saved);
            alert("Password saved successfully!");
        }

        setWebsite("");
        setUsername("");
        setPassword("");
    };

    const handleEdit = (entry) => {
        setWebsite(entry.website);
        setUsername(entry.username);
        setPassword(entry.password);
        setEditingId(entry.id);
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this password?")) {
            const saved = JSON.parse(localStorage.getItem("passwords")) || [];
            const filtered = saved.filter(entry => entry.id !== id);
            localStorage.setItem("passwords", JSON.stringify(filtered));
            setSavedEntries(filtered);
        }
    };

    const togglePasswordVisibility = (id) => {
        setVisiblePasswords(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <div>
            <div className="mx-auto m-5 w-full max-w-6xl px-4">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            className="bg-white w-full md:w-1/3 text-black rounded-xl p-3"
                            type="text"
                            placeholder="Website"
                            name="website"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                        <input
                            className="bg-white w-full md:w-1/3 text-black rounded-xl p-3"
                            type="text"
                            placeholder="Username or Email"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            className="bg-white w-full md:w-1/3 text-black rounded-xl p-3"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="m-4 text-lg md:text-xl mx-auto bg-blue-600 text-white px-6 py-3 rounded-lg flex justify-center gap-2 items-center w-full md:w-auto min-w-[120px] transition-all ease-in hover:scale-110 cursor-pointer"
                    >
                        <MdAddToPhotos /> {editingId ? "Update" : "Add"}
                    </button>
                </form>
            </div>

            <div className="overflow-x-auto p-4 md:p-8 lg:p-20">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 whitespace-nowrap">
                        <tr>
                            <th className="p-2 md:p-4 text-left text-sm md:text-lg font-medium text-white">
                                Website
                            </th>
                            <th className="p-2 md:p-4 text-left text-sm md:text-lg font-medium text-white">
                                Username or Email
                            </th>
                            <th className="p-2 md:p-4 text-left text-sm md:text-lg font-medium text-white">
                                Password
                            </th>
                            <th className="p-2 md:p-4 text-left text-sm md:text-lg font-medium text-white">
                                <div className="flex gap-1 md:gap-2 text-sm md:text-lg justify-around">
                                    <p>Edit</p>
                                    <p>Delete</p>
                                </div>

                            </th>
                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                        {savedEntries.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="p-2 md:p-4 text-center text-gray-500 text-sm md:text-base">
                                    No passwords saved yet
                                </td>
                            </tr>
                        ) : (
                            savedEntries.map((entry) => (
                                <tr key={entry.id} className="even:bg-blue-50">
                                    <td className="p-2 md:p-4 text-xs md:text-sm text-slate-900 font-medium break-words max-w-[100px] md:max-w-none">
                                        {entry.website}
                                    </td>
                                    <td className="p-2 md:p-4 text-xs md:text-sm text-slate-600 font-medium break-words max-w-[120px] md:max-w-none">
                                        {entry.username}
                                    </td>
                                    <td className="p-2 md:p-4 text-xs md:text-sm text-slate-600 font-medium">
                                        <div className="flex items-center gap-1 md:gap-2">
                                            <span className="break-all max-w-[80px] md:max-w-none">
                                                {visiblePasswords.has(entry.id) ? entry.password : '••••••••'}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => togglePasswordVisibility(entry.id)}
                                                className="text-gray-500 hover:text-gray-700 hover:scale-110 text-sm md:text-base"
                                            >
                                                {visiblePasswords.has(entry.id) ? <IoEyeOff /> : <IoEye />}
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-2 md:p-4 text-xs md:text-sm text-slate-600 font-medium cursor-pointer">
                                        <div className="flex gap-1 md:gap-2 text-lg md:text-xl justify-around">
                                            <CiEdit className="hover:scale-110" onClick={() => handleEdit(entry)} />
                                            <MdDelete className="hover:scale-110" onClick={() => handleDelete(entry.id)} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Input;
