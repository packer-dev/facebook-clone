import * as React from "react";
import { View, Dimensions, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Post } from "@/interfaces/Post";
import { Media } from "@/interfaces/Media";
import tailwind from "@/tailwind";
import MediaDisplay from "../MediaDisplay";
import AvatarContent from "./Content/AvatarContent";
import CoverContent from "./Content/CoverContent";
import BackgroundContent from "./Content/BackgroundContent";
import AnswerQuestionContent from "./Content/AnswerQuestionContent";
import { CommentDTO } from "@/interfaces/Comment";

const width = Dimensions.get("window").width;

type ContentProps = {
  post: Post;
  medias: Media[];
  feel: string[];
  loading?: boolean;
  comments: CommentDTO[];
};

const Content = ({
  post,
  medias = [],
  feel = [],
  comments = [],
  loading,
}: ContentProps) => {
  return (
    <View style={tailwind(`flex-col gap-3 pb-3 border-b border-gray-300`)}>
      {loading && (
        <View
          style={tailwind(`w-40 h-2 rounded-lg bg-gray-200 rounded-lg ml-3`)}
        />
      )}
      {loading && <View style={tailwind(`h-80 bg-gray-200 rounded-lg`)} />}
      {!loading && !post?.background && (
        <Text style={tailwind(`px-3`)}>
          {post?.content?.text || "Hello world"}
        </Text>
      )}
      {!loading && post?.answer_question && (
        <AnswerQuestionContent
          answerQuestion={post?.answer_question}
          user={post.user}
        />
      )}
      {!loading &&
        (post?.type === 0 || post?.type === 1) &&
        !post.background && (
          <MediaDisplay
            medias={medias.map((item) => ({ ...item, uri: item?.url }))}
            width={width}
            real
          />
        )}
      {post?.background && (
        <BackgroundContent
          background={post.background}
          content={post.content.text}
        />
      )}
      {!loading && post?.type === 3 && medias.length > 0 && (
        <CoverContent uri={medias[0].url} />
      )}
      {!loading && post?.type === 2 && medias.length > 0 && (
        <AvatarContent uri={post?.user?.cover} />
      )}
      {!loading && (
        <View style={tailwind(`flex-row justify-between pr-3`)}>
          {feel?.length > 0 && (
            <View style={tailwind(`flex-row items-center`)}>
              <Text style={tailwind(`px-3 text-gray-700 font-bold`)}>
                {feel?.length}
              </Text>
              <AntDesign
                name="heart"
                size={16}
                style={tailwind(`text-primary -ml-1`)}
              />
            </View>
          )}
          {!!comments.length && (
            <View style={tailwind(`flex-row items-center`)}>
              <Text style={tailwind(`px-1 text-gray-700 font-bold`)}>
                {comments.length}
              </Text>
              <Text style={tailwind(`text-gray-700`)}>Comments</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Content;
