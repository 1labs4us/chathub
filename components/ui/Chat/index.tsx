import {
  Flex,
  HStack,
  IconButton,
  Input,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

// components
import ChatBubble from "./ChatBubble";
import { IconDocument, IconChat, IconSendChat } from "@/components/icons";

import { TChatProps } from "@/shared/types";
import { messages } from "@/shared/chat-messages";

const Chat = ({ onChatHistoryOpen, onChatFilesOpen }: TChatProps) => {
  return (
    <Flex w="full" flexDirection="column">
      <HStack px={4} py={4} borderBottomColor="gray.100" borderBottomWidth={1}>
        <IconButton
          onClick={onChatHistoryOpen}
          display={{ base: "inherit", lg: "none" }}
          icon={<IconChat />}
          aria-label="Toggle Chat History Drawer"
        />
        <Input variant="filled" rounded="full" placeholder="Search friends" />
        <IconButton
          onClick={onChatFilesOpen}
          display={{ base: "inherit", lg: "none" }}
          icon={<IconDocument />}
          aria-label="Toggle Chat Files Drawer"
        />
      </HStack>
      <Flex px={6} overflowY="auto" flexDirection="column" flex={1}>
        <Stat mt={6}>
          <StatLabel color="gray.500">Chatting with</StatLabel>
          <StatNumber>Dina Harrison</StatNumber>
        </Stat>
        {messages.map(({ message, from, dateSent }, index) => (
          <ChatBubble
            key={index}
            message={message}
            from={from}
            dateSent={dateSent}
          />
        ))}
      </Flex>
      <Flex pl={4} pr={2} py={2} borderTopColor="gray.100" borderTopWidth={1}>
        <Input variant="unstyled" placeholder="Type your message" />
        <IconButton
          colorScheme="blue"
          aria-label="Send message"
          variant="ghost"
          icon={<IconSendChat />}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
