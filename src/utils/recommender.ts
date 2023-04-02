import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import randomize from "./randomize";
import { GetRequest } from "./request";

export default async (
  no: number = 1,
  views: number = 0,
  title?: string,
  recommend: boolean = true,
  archived: boolean = true,
  author?: string
) => {
  const [isLoading, setLoading] = useState(true);
  const [_posts, setPost] = useState([]);
  const { status, statusText, data } = await GetRequest("/posts");
  // const interests = Cookies.get("interests") || "podcast, Tech";

  useEffect(() => {
    if (status == 200) {
      const posts: any[] = data.data.filter((post, i) => {
        return (
          post.archived == archived &&
          post.views >= views &&
          post.title.match(new RegExp(title, "ig")) &&
          //   interests
          //     .split(",")
          //     .map((interest) => interest.match(new RegExp(interest, "ig"))) &&
          post.author.match(new RegExp(author, "ig")) //no
        );
      });
      // console.log(posts);
      setPost(posts);
    }
  }, []);
  return _posts;
};
