import { Separator } from "../components/Separator";
import { useState, useEffect } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { MemoizedAvatar } from "../components/Avatar";
import { LoopIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import profiles from "../data/profiles";
import days from "../config/days";

const Post = () => {
  let { postId } = useParams();
  const location = useLocation();
  const [post, setPost] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});

  useEffect(() => {
    let firstIndex = location.pathname.indexOf("/", 0);
    let lastIndex = location.pathname.indexOf("/", 1);
    let profileName = location.pathname.slice(firstIndex + 1, lastIndex);

    let selectedProfile = profiles.filter(
      (profile) => profile.username === profileName
    );
    setSelectedProfile(selectedProfile[0]);

    setPost(
      selectedProfile[0].posts?.filter((post) => post.postId === postId)[0]
    );
  }, [postId]);

  return (
    <div className="w-full h-screen">
      <div className="h-[54px] w-auto">
        <div className="ml-6 mt-6 font-bold text-xl text-slate-50">
          Post Detail
        </div>
      </div>
      <Separator />
      <div className="min-h-[240px] h-auto w-full pt-4 rounded-lg border-b-[1px] border-slate-600 hover:bg-slate-700">
        <div className="flex ml-[24px] items-center">
          <div className="w-[56px]">
            <Link to={"/" + selectedProfile.username}>
              <MemoizedAvatar
                width={56}
                url={selectedProfile.avatar}
                alt={selectedProfile.name}
              />
            </Link>
          </div>

          <div className="ml-4 flex flex-col w-full">
            <div className="flex w-full">
              <div>
                <div className="font-semibold text-slate-50 w-full whitespace-nowrap">
                  <Link to={"/" + selectedProfile.username}>
                    {selectedProfile.name}
                  </Link>
                </div>

                <div className="text-slate-400 text-sm">
                  <Link to={"/" + selectedProfile.username}>
                    {"@"}
                    {selectedProfile.username}
                  </Link>
                </div>
              </div>

              <div className="flex-end w-full text-end pr-4 text-slate-300 font-semibold text-xs">
                <div>
                  {post.date?.getUTCDate()} {days[post.date?.getUTCDay()]}
                </div>
                <div className="mt-1">{post.date?.getFullYear()}</div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="mt-[16px]" decorative orientation="horizontal" />
        <div className="pl-6 text-slate-50 font-medium text-sm h-[160px] flex">
          <div className="w-full h- pt-5 pr-5 text-[14px] sm:text-[15px] border-r-[1px] border-slate-600">
            <Link to={selectedProfile.username + "/post/" + postId}>
              {post.content}
            </Link>
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
    </div>
  );
};

export default Post;
