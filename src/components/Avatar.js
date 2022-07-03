import { styled } from "@stitches/react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { violet, blackA } from "@radix-ui/colors";
import { memo } from "react";

const Avatar = ({ url, width, alt }) => {
  const StyledAvatar = styled(AvatarPrimitive.Root, {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    overflow: "hidden",
    userSelect: "none",
    width: width,
    height: width,
    borderRadius: "100%",
    backgroundColor: blackA.blackA3,
  });

  const StyledImage = styled(AvatarPrimitive.Image, {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "inherit",
  });

  const StyledFallback = styled(AvatarPrimitive.Fallback, {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    color: violet.violet11,
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
  });

  return (
    <div className={`w-[${width}]`}>
      <StyledAvatar>
        <StyledImage src={url} alt={alt} />
        <StyledFallback delayMs={600}>IMG</StyledFallback>
      </StyledAvatar>
    </div>
  );
};

export const MemoizedAvatar = memo(Avatar);
