import { Link } from "react-router-dom";
import { Separator } from "../components/Separator";
import topics from "../data/topics";

const Discover = () => {
  return (
    <div className="w-full h-screen pb-[80px] sm:pb-12">
      <div className="h-[54px] w-auto">
        <div className="ml-6 mt-6 mb-6 font-bold text-xl text-slate-50">
          Discover
        </div>
      </div>
      <Separator />
      <div className="px-6">
        <ul>
          {topics.map((topic, index) => (
            <Link key={index} to={"/topic/" + topic.topicId}>
              <li className="border-[1px] border-slate-700 p-4 mt-4 rounded text-slate-200 font-semibold">
                #{topic.title}{" "}
                <div className="text-slate-400 text-sm">
                  {topic.numberOfPosts} Post
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Discover;
