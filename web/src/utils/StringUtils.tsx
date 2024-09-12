export const generateName = (typeGroupMessage, userList, idUser) => {
  let data = [];
  switch (typeGroupMessage) {
    case 0:
      data = userList.filter((dt: any) => dt.id !== idUser);
      if (data.length > 0) return `${data[0].firstName} ${data[0].lastName}`;
      break;
    case 1:
      break;
    default:
      return "";
  }
};

export const generateMessage = (
  typeGroupMessage,
  messages,
  userList,
  idUser
) => {
  let data = "";
  if (messages) {
    switch (messages.typeMessage) {
      case 0:
        data = ": " + messages.content;
        break;
      case 1:
        data = "đã gửi một hình ảnh";
        break;
      case 2:
        data = "đã gửi một nhãn dán";
        break;
      default:
        break;
    }
    let user = userList.filter((dt) => dt.id !== idUser);
    if (user.length > 0)
      return (
        (messages.userMessage.id === idUser ? "Bạn " : `${user[0].lastName} `) +
        data
      );
  } else {
    return "Các bạn đã là bạn bè trên facebook";
  }
};

export const generateString = (item, user) => {
  const array = [user.id, item.id];
  array.sort();
  let string = "";
  for (let index = 1; index <= array.length; index++) {
    const element = array[index - 1];
    string += element + (index === array.length ? "" : "-");
  }
  return string;
};
export const generateIDGroupFromListUser = (listUser: any[]) => {
  const array = [];
  for (const element of listUser) {
    if (element.userUserRelationShip) {
      array.push(element.userUserRelationShip.id);
    } else {
      array.push(element.id);
    }
  }
  array.sort();
  let string = "";
  for (let index = 1; index <= array.length; index++) {
    const element = array[index - 1];
    string += element + (index === array.length ? "" : "-");
  }
  return string;
};

export const checkImageOrVideoToString = (nameFile) => {
  const extension = nameFile
    .split(".")
    [nameFile.split(".").length - 1].toLowerCase();
  return extension === "jpg" || extension === "jpeg" || extension === "png"
    ? "image"
    : extension === "mp4" || extension === "mov"
    ? "video"
    : "image";
};

export const checkImageOrVideoToNumber = (nameFile) => {
  const extension = nameFile
    .split(".")
    [nameFile.split(".").length - 1].toLowerCase();
  return extension === "jpg" || extension === "jpeg" || extension === "png"
    ? 0
    : extension === "mp4" || extension === "mov"
    ? 1
    : 0;
};
