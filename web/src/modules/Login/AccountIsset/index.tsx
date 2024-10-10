import * as React from "react";
import AddAccount from "./AddAccount";
import * as Config from "@/constants/Config";
import ItemAccount from "./ItemAccount";
import { User } from "@/interfaces/User";

type AccountIssetProps = {
  list: User[];
  setList: (list: User[]) => void;
};

const AccountIsset = ({ list, setList }: AccountIssetProps) => {
  //
  //
  return (
    <div className="w-full">
      <span className="text-3xl font-semibold text-1877F2">
        {Config.NAME_APP} <br />
      </span>
      <div className="w-full mx-auto">
        <p className="text-2xl py-2 font-semibold">Recent Logins</p>
        <p className="pb-3 text-gray-500 tex-xm">
          Click your photo or add an account.
        </p>
        <div className="w-full flex flex-wrap">
          {list.slice(0, 5).map((item) => (
            <ItemAccount
              item={item}
              key={item?.id}
              setList={setList}
              list={list}
            />
          ))}
          <AddAccount />
        </div>
      </div>
    </div>
  );
};

export default AccountIsset;
