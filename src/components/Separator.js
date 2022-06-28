import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { styled } from "@stitches/react";

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: "#475569",
  "&[data-orientation=horizontal]": { height: 2, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 },
});

export const Separator = StyledSeparator;
