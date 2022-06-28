import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostPreview from "../components/PostPreview";
import { Separator } from "../components/Separator";
import topics from "../data/topics";
import Avatar1 from "../img/me.jpg";

const Topic = () => {
  let { topicId } = useParams();
  const [posts, setPosts] = useState([]);
  const [topicHeader, setTopicHeader] = useState("");

  useEffect(() => {
    setPosts(
      topics.map((topic) => {
        if (topic.topicId === topicId) {
          setTopicHeader(topic.title);
          return topic.posts.map((post, index) => (
            <PostPreview
              key={index}
              avatar={Avatar1}
              author="Yusuf Dönmez"
              username="yusuvf"
              {...post}
            />
          ));
        }
      })
    );
  }, [topicId]);

  return (
    <div className="w-full h-screen">
      <div className="h-[100px] pl-6 pt-8 text-xl font-semibold text-slate-50">
        {"#" + topicHeader}
      </div>
      <Separator />
      <div className="flex flex-col items-center">{posts}</div>
    </div>
  );
};

export default Topic;
