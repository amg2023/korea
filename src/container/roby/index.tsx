// @flow
import * as React from "react";
import Chat from "../../components/Chat";
import { IChat } from "../../components/Chat/type";
import Three from "../../components/Three";

export default function Roby({ room, username }: IChat) {
  return (
    <div>
      <Chat username={username} room={room} />
      <Three />
    </div>
  );
}
