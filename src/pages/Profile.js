import Avatar from "../components/Avatar";
import BannerImage from "../img/banner.jpeg";
import EditButton from "../components/EditButton";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import profiles from "../data/profiles";
import FollowButton from "../components/FollowButton";
import PostPreview from "../components/PostPreview";

const Profile = () => {
  let { profileId } = useParams();
  const [profile, setProfile] = useState(
    profiles.filter((profile) => profile.username === profileId)[0]
  );

  useEffect(() => {
    setProfile(profiles.filter((profile) => profile.username === profileId)[0]);
  }, [profileId]);

  return (
    <div className="w-full h-screen min-h-[1100px]">
      <div className="h-[141px] w-auto border-slate-600 border-b-[1px] relative">
        <img
          src={BannerImage}
          className="w-full h-[140px] sm:h-[220px]"
          alt="profile"
        />
        <div className="z-2 absolute top-[80px] sm:top-[160px] left-4 md:left-8 border-slate-800 border-[5px] rounded-full">
          <Avatar width={120} alt="bannerImage" url={profile.avatar} />
        </div>
        <div className="w-full h-[220px] sm:h-[240px] border-b-[1px] border-slate-600">
          <div className="ml-[150px] md:ml-[170px] pt-4 flex flex-row items-center">
            <div className="w-full">
              <div className="text-slate-50 font-semibold text-sm sm:text-lg">
                {profile.name}
              </div>
              <div className="text-sm sm:text-base">@{profile.username}</div>
            </div>
            <div className="mr-14">
              {profile.auth ? (
                <div className="w-[60px]">
                  <EditButton profile={profile} setProfile={setProfile} />
                </div>
              ) : (
                <div>
                  <FollowButton />
                </div>
              )}
            </div>
          </div>
          <div className="mt-10 ml-6 mr-2 sm:ml-10 text-slate-200 text-sm sm:text-base font-medium whitespace-pre-wrap">
            {profile.bio}
          </div>
        </div>
      </div>
      <div className="mt-[230px] sm:mt-[320px] bg-slate-800 flex flex-col items-center">
        {profile?.posts.map((post) => (
          <PostPreview
            avatar={profile.avatar}
            username={profile.username}
            author={profile.name}
            key={Math.floor(Math.random() * 1000)}
            {...post}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
