import * as React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import moment from "moment";
import { Comment } from "@/interfaces/Comment";
import tailwind from "@/tailwind";
import Avatar from "@/components/Avatar";
import Animation from "@/components/Commons/Animation";

type ItemCommentProps = {
  comment: Comment;
  children?: React.ReactNode;
};

const ItemComment = ({ comment, children }: ItemCommentProps) => {
  return (
    <View>
      <View style={tailwind(`flex-row gap-2`)}>
        <View>
          <Avatar size={12} uri={comment?.user?.avatar} />
        </View>
        <View
          style={tailwind(
            `flex-1 rounded-lg ${
              comment?.content?.type === 1 ? "bg-gray-200" : ""
            } p-2`
          )}
        >
          <Text style={tailwind(`font-bold mb-1`)}>
            {comment?.user?.name || "Packer Tra"}
          </Text>
          {comment?.content?.type === 1 && (
            <Text>{comment?.content?.text || "Good job."}</Text>
          )}
          {comment?.content?.type === 2 && (
            <Animation sticker={JSON.parse(comment?.content?.text)} />
          )}
          {comment?.content?.type === 3 && (
            <TouchableOpacity style={tailwind(`mt-2`)}>
              <Image
                style={tailwind(`w-48 h-60 rounded-lg`)}
                source={{ uri: `https://picsum.photos/536/354` }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {comment?.loading ? (
        <View style={tailwind(`flex-row gap-4 pl-12 ml-4 mt-2`)}>
          <Text style={tailwind(`font-semibold text-gray-600`)}>
            Writing...
          </Text>
        </View>
      ) : (
        <View style={tailwind(`flex-row gap-4 pl-12 ml-4 mt-2`)}>
          <Text style={tailwind(`font-semibold text-gray-600`)}>
            {moment(comment?.time_created).fromNow()}
          </Text>
          {/* <TouchableOpacity>
            <Text style={tailwind(`font-semibold text-gray-600`)}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={tailwind(`font-semibold text-gray-600`)}>Reply</Text>
          </TouchableOpacity> */}
        </View>
      )}
      {children && (
        <View style={tailwind(`flex-1 pl-12 ml-2 mt-2 mb-2 flex-col gap-2`)}>
          {children}
        </View>
      )}
    </View>
  );
};

export default ItemComment;
