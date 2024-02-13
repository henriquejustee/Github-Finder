import { User } from "../types/user"

export const UserComponent = ({
    avatar_url,
    location,
    followers,
    following,
    name,
    bio,
    blog,
    public_repos
} : User ) => {
  return (
    <div className="flex justify-center mt-2">
        <div className="bg-blue-500 p-6 rounded-lg w-[28rem] shadow-lg flex flex-col items-center text-white">
            <img src={avatar_url} className="h-24 w-24 rounded-full shadow-lg mb-4" alt="avatar" />
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>{bio}</p>
            <p className="mt-2">{location}</p>
            <div className="mt-4 flex justify-between w-full">
                <div>
                    <p className="font-bold">Followers</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p className="font-bold">Following</p>
                    <p>{following}</p>
                </div>
                <div>
                    <p className="font-bold">Blog</p>
                    <p>{blog}</p>
                </div>
                <div>
                    <p className="font-bold">Repositories</p>
                    <p>{public_repos}</p>
                </div>
            </div>
        </div>
    </div>
  )
}