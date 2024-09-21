import { PostContext, PostProvider } from "@/contexts/PostContext/PostContext";
import { Media } from "@/interfaces/Media";
import { Post } from "@/interfaces/Post";
import * as React from "react";

export type ModalWrapperPostProps = {
  post?: Post;
  medias?: Media[];
  files?: FileList;
};

const ModalWrapperPost = (props: ModalWrapperPostProps) => {
  //
  return (
    <PostProvider>
      <ContainerModalPost {...props} />
    </PostProvider>
  );
};

const ContainerModalPost = ({ post, medias, files }: ModalWrapperPostProps) => {
  const { posts, postsDispatch, postsAction } = React.useContext(PostContext);
  React.useEffect(() => {
    const props = [
      "id",
      "activity",
      "answer_question",
      "background",
      "tags",
      "local",
      "time_created",
    ];
    if (files?.length > 0 || medias) {
      postsDispatch(postsAction.updateData("imageVideoUpload", true));
    }
    postsDispatch(
      postsAction.updateData("imageVideo", {
        ...posts.imageVideo,
        new: files || null,
        old: medias || [],
      })
    );
    postsDispatch(postsAction.updateData("content", post?.content?.text));
    post &&
      props.forEach((item) => {
        postsDispatch(postsAction.updateData(item, post[item]));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return posts.component;
};

export default ModalWrapperPost;
