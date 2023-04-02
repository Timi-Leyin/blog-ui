import { Box } from "@chakra-ui/react";

import News1 from "./News1";
import SidebarHeader from "./SidebarHeader";

const Aside = ({ post }: any) => {
  return (
    <Box pos="relative" className="aside">
      <SidebarHeader />
      <News1 post={post} />
    </Box>
  );
};

export default Aside;
