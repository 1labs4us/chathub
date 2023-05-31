import {
  Flex,
  HStack,
  Text,
  IconButton,
  Avatar,
  AvatarBadge,
  Heading,
  Box,
  Divider,
  VStack,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";
import { IconDocument } from "@/components/icons";
import ChatFile from "./ChatFile";
import ChatLink from "./ChatLink";

const ChatFiles = () => {
  return (
    <Flex h="full" flexDirection="column" alignItems="center" w="full" pt={8}>
      <Avatar size="2xl" name="Dina Harrison">
        <AvatarBadge boxSize={8} borderWidth={4} bg="green.400" />
      </Avatar>
      <Heading size="md" mt={3}>
        Dina Harrison
      </Heading>
      <HStack px={8} justifyContent="center" spacing={3} mt={3}>
        <IconButton
          icon={<IconDocument />}
          variant="ghost"
          rounded="full"
          color="gray.500"
          h={10}
          aria-label="Dribbble Account"
        />
      </HStack>
      <Box px={8} w="full">
        <Divider mt={6} color="gray.100" />
      </Box>
      <VStack spacing={6} overflowY="auto" w="full">
        <HStack px={8} w="full" mt={6} justifyContent="space-between">
          <Heading size="md">Shared files</Heading>
          <Button fontWeight="normal" variant="text" size="xs" color="blue">
            see all
          </Button>
        </HStack>
        <List spacing={4} mt={6} w="full">
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
        </List>
        <Box px={8} w="full">
          <Divider mt={6} color="gray.100" />
        </Box>
        <HStack px={8} w="full" mt={6} justifyContent="space-between">
          <Heading size="md">Shared links</Heading>
          <Button fontWeight="normal" variant="text" size="xs" color="blue">
            see all
          </Button>
        </HStack>
        <List pb={6} spacing={4} mt={6} w="full">
          <ListItem>
            <ChatLink />
          </ListItem>
          <ListItem>
            <ChatLink />
          </ListItem>
          <ListItem>
            <ChatLink />
          </ListItem>
        </List>
      </VStack>
    </Flex>
  );
};

export default ChatFiles;
