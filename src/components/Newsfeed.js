import { Link } from "react-router-dom";
import topics from "../data/topics";
import { BarChartIcon } from "@radix-ui/react-icons";
import { Separator } from "./Separator";

const Newsfeed = () => {
  return (
    <div className="w-[800px] h-auto bg-slate-800 pt-16 border-l-[1px] border-slate-600 hidden sm:hidden md:hidden lg:flex lg:flex-col">
      <div className="text-slate-100 font-bold text-xl flex justify-center items-end">
        <span className="mr-2 pb-[2px]">
          <BarChartIcon width="36" height="36" />
        </span>
        What is Trending?
      </div>
      <div className="border-[1px] border-slate-600 rounded-md ml-8 mr-8 mt-12 p-4 bg-gray-800">
        <ul className="flex flex-col justify-center">
          {topics.map((link, index) => (
            <div key={index}>
              <li className="mt-3 mb-3">
                <Link to={"/topic/" + link.topicId}>
                  <div className="flex flex-col">
                    <div className="text-slate-300 font-semibold text-sm">
                      {"#"}
                      {link.title}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {link.numberOfPosts + " Posts"}
                    </div>
                  </div>
                </Link>
              </li>
              {index === 7 ? (
                <></>
              ) : (
                <Separator height="2.5px" decorative orientation="horizontal" />
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Newsfeed;
