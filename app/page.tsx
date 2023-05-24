"use client";

import { HStack, Flex } from "@chakra-ui/react";

// components
import { Navigation } from "@/components/ui";

export default function Home() {
  return (
    <main>
      <HStack h="100vh" spacing={0}>
        <Flex as="nav" h="full" maxW={16} w="full" bg="gray.100">
          <Navigation />
        </Flex>
        <Flex
          as="aside"
          h="full"
          maxW={{ base: "xs", xl: "sm" }}
          display={{ base: "none", lg: "flex" }}
          w="full"
          borderRightColor="gray.100"
          borderRightWidth={1}
          pt={8}
        >
          ChatHistorySidebar
        </Flex>
        <Flex
          as="main"
          h="full"
          flex={1}
          borderRightColor="gray.100"
          borderRightWidth={1}
        >
          onChatHistoryOpen onChatFilesOpen
        </Flex>
        <Flex
          as="aside"
          h="full"
          maxW={{ base: "xs", xl: "sm" }}
          display={{ base: "none", lg: "flex" }}
          w="full"
        >
          ChatFiles
        </Flex>
        ChatHistoryDrawer ChatFilesDrawer
      </HStack>
    </main>
  );
}
