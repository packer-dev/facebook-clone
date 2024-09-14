import * as React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ItemSendImageVideo from ".";

function SendImageVideo(props) {
  //
  const { dataMessage, setDataMessage, mini } = props;

  const onChange = (event) => {
    let data = [...dataMessage.value];
    let files = event.target.files;
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      data.push(element);
    }
    setDataMessage({ ...dataMessage, value: data });
  };

  return (
    <div
      className="absolute rounded-2xl z-50"
      style={{ bottom: "100%", maxWidth: mini ? 330 : 550 }}
    >
      <ScrollContainer
        className="flex p-2 bg-gray-200 dark:bg-gray-third overflow-x-auto 
                cursor-pointer list-none"
        style={{ maxWidth: mini ? 330 : 550 }}
      >
        {dataMessage.value.map((item, index) => (
          <ItemSendImageVideo
            item={item}
            key={index}
            mini={mini}
            dataMessage={dataMessage}
            setDataMessage={setDataMessage}
            index={index}
          />
        ))}
        <div
          className={`${
            mini ? "w-16 h-16 " : "w-20 h-20 "
          } rounded-lg text-center flex justify-center mr-2 bg-gray-300 flex-shrink-0 dark:bg-dark-third`}
        >
          <input
            onChange={onChange}
            type="file"
            name="fileImageAdd[]"
            className="hidden"
            multiple
            id="fileImageChatMainAdd"
          />
          <label htmlFor="fileImageChatMainAdd" className="flex items-center">
            <i className="fas fa-file-image text-2xl dark:text-white flex items-center"></i>
          </label>
        </div>
      </ScrollContainer>
    </div>
  );
}

export default SendImageVideo;
