import Avatar1 from "../img/me.jpg";
import Avatar2 from "../img/luffy.jpeg";
import Avatar3 from "../img/naruto.jpeg";

const profiles = [
  {
    auth: true,
    name: "Yusuf Dönmez",
    username: "yusuvf",
    follower: "342",
    bio: `Hi 👋, I'm Yusuf and I'm a Software Engineer from Turkey

blog: yusufdonmez.com`,
    following: "224",
    avatar: Avatar1,
    posts: [
      {
        postId: "4521",
        content: "Hi I'm Yusuf and this is my hobby project",
        date: new Date(),
      },
      {
        postId: "12312",
        content: ":DDD",
        date: new Date(),
      },
    ],
  },
  {
    auth: false,
    name: "Monkey D. Luffy",
    username: "luffy",
    follower: "8873573",
    bio: "I'm Luffy! The Man Who Will Become the Pirate King!",
    following: "1",
    avatar: Avatar2,
    posts: [
      {
        postId: "1282",
        content: "If you don't take risks, you can't create a future !",
        date: new Date(13000000000000),
      },
    ],
  },
  {
    auth: false,
    name: "Uzumaki Naruto",
    username: "naruto",
    bio: "A man who will become Hokage!",
    follower: "3427548",
    following: "4",
    avatar: Avatar3,
    posts: [
      {
        postId: "7321",
        content:
          "Hard work is worthless for those that don't believe in themselves.",
        date: new Date(13000000000000),
      },
    ],
  }
];

export default profiles;
