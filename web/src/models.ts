import { Comment } from "./interfaces/Comment";
import { Feel } from "./interfaces/Feel";
import { Group } from "./interfaces/Group";
import { Media } from "./interfaces/Media";
import { Member } from "./interfaces/Member";
import { Message } from "./interfaces/Message";
import { Post } from "./interfaces/Post";
import { Story } from "./interfaces/Story";
import { User } from "./interfaces/User";
import { getCurrentDateTime } from "./utils";

export const loginDTO = (obj: { email: string; password: string }) => ({
  email: obj?.email ?? "",
  password: obj?.password ?? "",
});

export const userModel = (obj?: User | null) => ({
  id: obj?.id ?? "",
  name: obj?.name ?? "",
  email: obj?.email ?? "",
  password: obj?.password ?? "",
  avatar: obj?.avatar ?? "",
  cover: obj?.cover ?? getCurrentDateTime(),
  last_time_active: obj?.last_time_active ?? getCurrentDateTime(),
  time_created: obj?.time_created ?? getCurrentDateTime(),
  bio: obj?.bio ?? "",
  description: obj?.description || "{}",
  favorites: obj?.favorites || "[]",
  is_dark: obj?.is_dark || false,
});

export const memberModel = (obj: Member) => ({
  id: obj?.id ?? "",
  nickname: obj?.nickname ?? "",
  user: userModel(obj?.user),
  is_owner: obj?.is_owner ?? false,
});

export const messageModel = (obj?: Message | null) => ({
  id: obj?.id ?? "",
  content: obj?.content ?? null,
  user: userModel(obj?.user),
  time_created: obj?.time_created ?? getCurrentDateTime(),
});

export const groupModel = (obj: Group) => ({
  id: obj?.id ?? "",
  name: obj?.name ?? "",
  members: obj?.members
    ? obj?.members?.map((item) => ({ ...item, user: userModel(item?.user) }))
    : [],
  last_message: messageModel(obj?.last_message) ?? null,
  data: obj.data ?? {
    color: "",
    emoji: "",
  },
  time_created: obj?.time_created ?? getCurrentDateTime(),
  last_time_update: obj?.last_time_update ?? getCurrentDateTime(),
  image: obj?.image ?? "",
  seen: obj?.seen ?? {},
  multiple: obj?.multiple ?? false,
});

export const postModel = (obj: Post) => ({
  id: obj?.id ?? "",
  user: userModel(obj?.user),
  content: obj?.content ?? { text: "", media: [] },
  time_created: obj?.time_created ?? getCurrentDateTime(),
  last_time_update: obj?.last_time_update ?? "",
  type: obj?.type ?? 0,
  tags: obj?.tags || [],
  feel: obj?.feel || null,
  background: obj.background || null,
  answer_question: obj.answer_question || null,
  local: obj.local || null,
  activity: obj.activity || null,
  share_id: obj?.share_id || "",
  is_share_memory: obj?.is_share_memory || false,
});

export const mediaModel = (obj: Media) => ({
  id: obj?.id ?? "",
  url: obj?.url ?? "",
  status: obj?.status ?? 0,
  type: obj?.type ?? 0, // 1 for image, 2 for video
  folder: obj?.folder ?? "",
});

export const feelModel = (obj: Feel) => ({
  id: obj?.id ?? "",
  user: userModel(obj?.user),
  type: obj?.type ?? 0,
});

export const commentModel = (obj: Comment) => ({
  id: obj?.id ?? "",
  user: userModel(obj?.user),
  content: obj?.content ?? "",
  time_created: obj?.time_created ?? getCurrentDateTime(),
  last_time_update: obj?.last_time_update ?? getCurrentDateTime(),
  level: obj?.level ?? 0,
  parent: obj?.parent ?? "",
});

export const postResponseModel = ({
  post,
  medias,
  feel,
}: {
  post: Post;
  medias?: Media[];
  feel?: Feel;
}) => ({
  post: postModel(post),
  medias: [...(medias || [])].map((item) => mediaModel(item)),
  feel,
});

export const storyModel = (story?: Story) => ({
  id: story?.id || "",
  music: story?.music || "",
  type: story?.type || 1,
  url: story?.url || "",
  user: story?.user || null,
  time_created: story?.time_created || "",
});
