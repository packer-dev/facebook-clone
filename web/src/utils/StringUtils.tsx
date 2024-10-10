export const getFileExtension = (fileName: string) => {
  return fileName.split(".").pop().toLowerCase();
};

export const getFileTypeByExtension = (
  fileName: string
): "image" | "video" | "other" => {
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
  const videoExtensions = ["mp4", "avi", "mkv", "webm"];

  const extension = getFileExtension(fileName);

  if (imageExtensions.includes(extension)) {
    return "image";
  } else if (videoExtensions.includes(extension)) {
    return "video";
  }
  return "other";
};
