import { VStack, IconButton, Tooltip } from "@chakra-ui/react";

// icons
import {
  IconInbox,
  IconSearch,
  IconHome,
  IconSetting,
  IconNotification,
  Logo,
} from "@/components/icons";

const Navigation = () => {
  return (
    <VStack p={6} justifyContent="space-between" alignItems="center" w="full">
      <VStack>
        <Logo mb={6} />
        <Tooltip label="Home" placement="right">
          <IconButton color="gray.500" icon={<IconHome />} aria-label="Home" />
        </Tooltip>
        <Tooltip label="Search" placement="right">
          <IconButton
            color="gray.500"
            icon={<IconSearch />}
            aria-label="Search"
          />
        </Tooltip>
        <Tooltip label="Notifications" placement="right">
          <IconButton
            color="gray.500"
            icon={<IconNotification />}
            aria-label="Notifications"
          />
        </Tooltip>
        <Tooltip label="Messages" placement="right">
          <IconButton
            color="gray.500"
            icon={<IconInbox />}
            aria-label="Messages"
          />
        </Tooltip>
      </VStack>
      <Tooltip label="Settings" placement="right">
        <IconButton
          color="gray.500"
          icon={<IconSetting />}
          aria-label="Settings"
        />
      </Tooltip>
    </VStack>
  );
};

export default Navigation;
