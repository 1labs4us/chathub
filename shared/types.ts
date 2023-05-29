export interface IMessages {
  id: number;
  name: string;
  message: string;
  time: string;
}

export interface IChatMessages {
  message: string;
  from: string;
  dateSent: string;
}
export type TChatProps = {
  onChatHistoryOpen: () => void;
  onChatFilesOpen: () => void;
};

export type TChatBubbleProps = {
  message: string;
  dateSent: string;
  from: "me" | "others" | any;
};
