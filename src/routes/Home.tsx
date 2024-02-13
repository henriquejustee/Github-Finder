import { Search } from "../components/Search";
import { useState } from "react";
import { User } from "../types/user";
import { UserComponent } from "../components/User";

export default function Home() {
    const [user, setUser] = useState<User | null>(null);

    const loadUser = async(userName : string) => {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json()
        console.log(data)

        const {avatar_url, name, bio, location, followers, following, username, blog, login, public_repos } = data;
        const userData = {
            avatar_url,
            username,
            location,
            followers,
            following,
            name,
            bio,
            login,
            blog,
            public_repos
        }
        setUser(userData);
    }

    return (
        <div>
            <Search loadUser={loadUser} />
            { user && <UserComponent {...user}/>}
        </div>
    );
};