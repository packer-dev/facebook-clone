import * as React from "react";

type ItemNotifyRightProps = {
  show?: boolean;
  type: string;
  icon: string;
};

const ItemNotifyRight = ({ type, show, icon }: ItemNotifyRightProps) => {
  return (
    <div
      className={`w-full flex p-3 bg-opacity-80 rounded-lg mb-1.5 ${
        show ? "hideFade" : ""
      } bg-[#3A3B3C]`}
    >
      <div className="w-12 flex items-center justify-center">
        <span
          className={`bx bxs-${icon} w-9 h-9 flex items-center justify-center bg-gray-500 text-xl 
          rounded-full`}
        />
      </div>
      <div className="flex items-center pl-3">
        {type} connected: Stereo Mix (IDT High Definition Audio CODEC)
      </div>
    </div>
  );
};

const NotifyRight = () => {
  //
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  return (
    <div className="p-1 absolute top-3 right-3 text-gray-300 bg-opacity-60 font-semibold w-[380px]">
      <ItemNotifyRight icon="microphone" type="Microphone" show={show} />
      <ItemNotifyRight icon="volume-low" type="Speakers" show={show} />
    </div>
  );
};

export default NotifyRight;
