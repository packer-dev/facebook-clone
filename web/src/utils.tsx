import { Group } from "./interfaces/Group";
import { Message } from "./interfaces/Message";
import { User } from "./interfaces/User";

export const validateEmail = ({ value }: { value: string }) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value) ? "" : "Email invalid.";
};

export const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const formatDate = (date: Date) => {
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  let year = date.getFullYear();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

export const getCurrentDateTime = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const getRandomName = () => {
  const firstNames = ["Lâm", "Anh", "Khoa", "Minh", "Tú", "Vy", "Huy", "Linh"];
  const lastNames = [
    "Nguyễn",
    "Trần",
    "Lê",
    "Phạm",
    "Huỳnh",
    "Hoàng",
    "Vũ",
    "Đặng",
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${firstName} ${lastName}`;
};

const removeAccents = (str: string) => {
  let AccentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
    "dđ",
    "DĐ",
    "eèẻẽéẹêềểễếệ",
    "EÈẺẼÉẸÊỀỂỄẾỆ",
    "iìỉĩíị",
    "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
    "uùủũúụưừửữứự",
    "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ",
    "YỲỶỸÝỴ",
  ];
  for (const item of AccentsMap) {
    let re = new RegExp("[" + item.substring(1) + "]", "g");
    let char = item[0];
    str = str.replace(re, char);
  }
  return str;
};

const getRandomEmail = (name: string) => {
  const emailProviders = ["example.com", "mail.com", "inbox.com", "email.com"];
  const provider =
    emailProviders[Math.floor(Math.random() * emailProviders.length)];
  const cleanName = removeAccents(name.toLowerCase().replace(" ", "."));
  const email = cleanName + "@" + provider;
  return email;
};

export const randomUser = () => {
  const randomName = getRandomName();
  const randomEmail = getRandomEmail(randomName);
  return {
    email: randomEmail,
    name: randomName,
  };
};

export const emojiList = [
  "💌",
  "💘",
  "💝",
  "💖",
  "💗",
  "💓",
  "💞",
  "💕",
  "💟",
  "❣️",
  "💔",
  "❤️‍🔥",
  "❤️‍🩹",
  "❤️",
  "🩷",
  "🧡",
  "💛",
  "💚",
  "💙",
  "🩵",
  "💜",
  "🤎",
  "🖤",
  "🩶",
  "🤍",
  "💋",
  "💯",
  "💢",
  "💥",
  "💦",
  "💨",
  "🕳️",
  "💬",
  "👁️‍🗨️",
  "🗨️",
  "🗯️",
  "💭",
  "💤",
  "🔴",
  "🟠",
  "🟡",
  "🟢",
  "🔵",
  "🟣",
  "🟤",
  "⚫",
  "⚪",
  "🟥",
  "🟧",
  "🟨",
  "🟩",
  "🟦",
  "🟪",
  "🟫",
  "⬛",
  "⬜",
  "◼️",
  "◻️",
  "◾",
  "◽",
  "▪️",
  "▫️",
  "🔶",
  "🔷",
  "🔸",
  "🔹",
  "🔺",
  "🔻",
  "💠",
  "🔘",
  "🔳",
  "🔲",
];

export const sendXmlHttpRequest = (
  endpoint: string,
  data: any,
  method = "GET"
) => {
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = (e) => {
      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    };
    xhr.open(method, endpoint);
    xhr.send(data);
  });
};

export const dataFakeGroup = ({
  groupCurrent,
  message,
  user,
  friend,
}: {
  groupCurrent: Group | null;
  message: Message;
  user: User;
  friend?: User;
}): Group | null => {
  if (groupCurrent)
    return {
      ...groupCurrent,
      last_message: { ...message },
    };
  if (friend)
    return {
      members: [
        {
          id: generateUUID(),
          nickname: "",
          user: friend,
          is_owner: false,
        },
        {
          id: generateUUID(),
          nickname: "",
          user,
          is_owner: false,
        },
      ],
      last_message: { ...message },
      seen: {
        [friend?.id]: false,
        [user?.id]: true,
      },
      multiple: false,
    };
  return null;
};

export const dataFakeMessage = ({
  user,
  text,
  type,
}: {
  user: User;
  text: string;
  type: number;
}): Message => {
  return {
    id: generateUUID(),
    content: {
      id: generateUUID(),
      text,
      type,
    },
    user,
    loading: true,
    time_created: getCurrentDateTime(),
  };
};

export const nameGroup = (group: Group, user: User | null) => {
  const isBigGroup = group?.multiple;
  if (isBigGroup) {
    return (
      group?.name || group?.members?.map((item) => item?.user?.name).join(", ")
    );
  } else {
    const peerToPeer = group?.members?.find(
      (item) => item?.user?.id !== user?.id
    );
    return peerToPeer?.nickname || peerToPeer?.user?.name;
  }
};

export const lastMessage = (user: User, group: Group) => {
  let content = "";
  if (group?.last_message?.user?.id === user?.id) {
    content = "You";
  } else {
    content = group?.last_message?.user?.name?.split(" ")[0];
  }
  switch (group?.last_message?.content?.type) {
    case 1:
      content += ":";
      break;
    case 2:
      content += " sent a sticker.";
      break;
    case 3:
      content += " sent a image.";
      break;
  }
  if (group?.last_message?.content?.type === 1) {
    content += ` ${group?.last_message?.content?.text}`;
  }
  return content;
};
