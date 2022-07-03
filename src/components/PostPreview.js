import { Link } from "react-router-dom";
import { LoopIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { MemoizedAvatar } from "./Avatar";
import { Separator } from "./Separator";
import days from "../config/days";

const PostPreview = ({ postId, avatar, author, username, content, date }) => {
  return (
    <div className="min-h-[240px] h-auto w-[90%] border-[1px] md:border-[1.5px] md:w-5/6 rounded-lg mt-8 border-slate-600 hover:bg-slate-700">
      <div className="flex ml-[24px] mt-[16px] items-center">
        <div className="w-[56px]">
          <Link to={username}>
            <MemoizedAvatar width={56} url={avatar} alt={author} />
          </Link>
        </div>

        <div className="ml-4 flex flex-col w-full">
          <div className="flex w-full">
            <div>
              <div className="font-semibold text-slate-50 w-full whitespace-nowrap">
                <Link to={"/" + username}>{author}</Link>
              </div>

              <div className="text-slate-400 text-sm">
                <Link to={"/" + username}>
                  {"@"}
                  {username}
                </Link>
              </div>
            </div>

            <div className="flex-end w-full text-end pr-4 text-slate-300 font-semibold text-xs">
              <div>
                {date.getUTCDate()} {days[date.getUTCDay()]}
              </div>
              <div className="mt-1">{date.getFullYear()}</div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="mt-[16px]" decorative orientation="horizontal" />
      <div className="pl-6 text-slate-50 font-medium text-sm h-[160px] flex">
        <div className="w-full h- pt-4 pr-4 border-r-[1px] text-[14px] sm:text-[15px] border-slate-600 whitespace-pre-wrap">
          <Link to={"/" + username + "/post/" + postId}>{content}</Link>
        </div>
        <div className="w-[70px] justify-center items-center flex flex-col">
          <div
            onClick={(e) => e.target.classList.toggle("animate")}
            className="HeartAnimation"
          ></div>
          <LoopIcon className="mt-4 cursor-pointer" width={20} height={20} />
          <DotsHorizontalIcon
            className="mt-3 cursor-pointer"
            width={22}
            height={22}
          />
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
