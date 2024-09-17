import { PostContext, PostProvider } from "@/contexts/PostContext/PostContext";
import { Media } from "@/interfaces/Media";
import { Post } from "@/interfaces/Post";
import * as React from "react";

export type ModalWrapperPostProps = {
  post?: Post;
  medias?: Media[];
  files?: FileList;
};

export default function ModalWrapperPost(props: ModalWrapperPostProps) {
  //
  //
  return (
    <PostProvider>
      <ContainerModalPost {...props} />
    </PostProvider>
  );
}

const ContainerModalPost = ({ post, medias }: ModalWrapperPostProps) => {
  const { posts, postsDispatch, postsAction } = React.useContext(PostContext);
  React.useEffect(() => {
    if (!post) return;
    const props = [
      "id",
      "activity",
      "answer_question",
      "background",
      "tags",
      "local",
    ];
    postsDispatch(postsAction.updateData("content", post?.content?.text));
    postsDispatch(postsAction.updateData("imageVideo", medias || []));
    props.forEach((item) => {
      postsDispatch(postsAction.updateData(item, post[item]));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return posts.component;
};
