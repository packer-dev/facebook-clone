import { User } from "./User";

export interface Notification {
  id?: string;
  type?: number;
  content?: string;
  user?: User;
  time_created?: string;
  is_read?: boolean;
  last_time_update?: string;
  main_id?: string;
}

export const emulator = (type: number) => {
  let content = {};
  switch (type) {
    case 1:
      content = {
        name: "Pink Thai",
        content: "1000 others reacted to your post. \nPost: xxx_content",
      };
      break;
    case 2:
      content = {
        name: "Pink Thai",
        content: "2000 others commented to your post. \nPost: xxx_content",
      };
      break;
    case 3:
      content = {
        name: "Pink Thai",
        content: "3000 others commented to your post. \nPost: xxx_content",
      };
      break;
    default:
      break;
  }
  return {
    id: "1",
    type: 1,
    content: JSON.stringify(content),
    user: {
      avatar:
        "https://res.cloudinary.com/ensonet-dev/image/upload/v1641124176/default-avatar_leprc2.png",
      bio: "siuuuu",
      cover:
        "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMDktYWRqLTA1LmpwZw.jpg",
      description: "",
      email: "packer.tra@gmail.com",
      favorites: "",
      id: "13858f91-6ba1-44ab-95bb-0a11828e1081",
      is_dark: false,
      last_time_active: "2024-10-08 21:03:11.189404",
      name: "Packer Tra",
      password: "d5077bcc9cf4851ac86ea4fccbc66c9a",
      time_created: "2024-08-13 14:35:22",
    },
    time_created: "2024-10-10T08:30:00",
    is_read: false,
    last_time_update: "2024-10-10T09:00:00",
    main_id: "b43e9136-d494-4dcb-8ba2-94e7caf085bf",
  };
};
