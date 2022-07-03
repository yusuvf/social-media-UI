import { useState, useEffect } from "react";
import PostPreview from "../components/PostPreview";
import profiles from "../data/profiles";
import { Separator } from "../components/Separator";
import { MemoizedAvatar } from "../components/Avatar";
import ProfileAvatar from "../img/me.jpg";

const Home = () => {
  const [isLoading, setIsloading] = useState(false);
  const [createPostValue, setCreatePostValue] = useState("");
  const [posts, setPosts] = useState([]);

  const CreateNewPost = () => {
    setPosts((state) => [
      <PostPreview
        key={Math.floor(Math.random() * 1000)}
        username={profiles[0].username}
        avatar={profiles[0].avatar}
        author={profiles[0].name}
        content={createPostValue}
        postId={Math.floor(Math.random() * 1000)}
        date={new Date()}
      />,
      ...state,
    ]);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsloading(false), 1500);
    return () => {
      if (isLoading === true) {
        CreateNewPost();
      }
      return clearTimeout(timer);
    };
  }, [isLoading]);

  useEffect(() => {
    setPosts(
      profiles.map((profile) =>
        profile.posts.map((post, index) => (
          <PostPreview
            key={index}
            username={profile.username}
            avatar={profile.avatar}
            author={profile.name}
            {...post}
          />
        ))
      )
    );
  }, []);

  return (
    <div className="w-full pb-[80px] sm:pb-12">
      <div className="h-[180px]">
        <h1 className="ml-6 mt-6 text-xl text-slate-50 font-bold">Main Page</h1>
        <div className="flex flex-col">
          <div className="flex flex-row ml-6 mt-4">
            <MemoizedAvatar width={56} url={ProfileAvatar} alt="profile" />
            <textarea
              placeholder="Create a post"
              type="text"
              id="createPostTextArea"
              onChange={(e) => setCreatePostValue(e.target.value)}
              className="w-full ml-4 mr-2 h-[76px] bg-transparent focus:outline-none text-slate-100 font-semibold resize-none"
            ></textarea>
          </div>
          {isLoading ? (
            <button className="w-[90px] rounded-md text-base self-end font-semibold mr-4 btn loading h-[80px}"></button>
          ) : (
            <button
              onClick={() => setIsloading(!isLoading)}
              className="bg-gray-100 text-gray-900 hover:text-gray-400 w-[90px] py-2 px-4 rounded-md text-base self-end font-semibold mr-4 btn capitalize"
            >
              Create
            </button>
          )}
        </div>
      </div>
      <Separator decorative orientation="horizontal" />
      <div className="flex flex-col items-center">{posts}</div>
    </div>
  );
};

export default Home;
