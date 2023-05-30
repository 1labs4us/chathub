import {
  VStack,
  Flex,
  Avatar,
  AvatarBadge,
  Heading,
  HStack,
  IconButton,
  Box,
  Divider,
  Input,
  List,
  ListItem,
} from "@chakra-ui/react";
import ChatRow from "./ChatRow";
import { messages } from "@/shared/messages";
import { IMessages } from "@/shared/types";
import { IconShare } from "@/components/icons";

const ChatHistorySidebar = () => {
  return (
    <VStack h="full" alignItems="center" w="full" spacing={6}>
      <Flex
        w="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Avatar name="Travis Taylor" size="2xl">
          <AvatarBadge bg="green.400" boxSize={8} borderWidth={4} />
        </Avatar>
        <VStack>
          <Heading size="md" mt={{ base: 0, lg: 3 }}>
            Travis Taylor
          </Heading>
          <HStack px={8} justifyContent="center" spacing={3} mt={6}>
            <IconButton
              icon={<IconShare />}
              variant="ghost"
              rounded="full"
              color="gray.500"
              h={10}
              aria-label="Share"
            />
          </HStack>
        </VStack>
      </Flex>
      <Box px={8} w="full">
        <Divider color="gray.100" />
      </Box>
      <Box px={8} w="full">
        <Heading size="xs" w="full">
          Chats
        </Heading>
        <Input
          variant="filled"
          mt={2}
          minH={10}
          rounded="full"
          placeholder="Search chat"
        />
      </Box>
      <Box w="full" overflowY="auto">
        <List w="full" spacing={0}>
          {messages.map((message: IMessages) => (
            <ListItem key={message.id}>
              <ChatRow {...message} />
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default ChatHistorySidebar;
