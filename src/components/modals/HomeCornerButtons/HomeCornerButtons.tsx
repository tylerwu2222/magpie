import { Colors } from "@/assets/constants/Colors";
import { largerButtonSize } from "@/assets/constants/magpieDimensions";

import DeleteIconButton from "../../buttons/common_icon_buttons/DeleteIconButton";
import CopyIconButton from "../../buttons/common_icon_buttons/CopyIconButton";
import AddCollectionIconButton from "../../buttons/common_icon_buttons/AddCollectionIconButton";
import ShareIconButton from "../../buttons/common_icon_buttons/ShareIconButton";

// corner buttons
export const HomeCornerButtons = [
  <DeleteIconButton
    buttonColorDict={Colors.deleteButtonFilled}
    contentSize={largerButtonSize}
    borderRadius={largerButtonSize} />,
  <CopyIconButton
    buttonColorDict={Colors.favoriteButtonFilled}
    contentSize={largerButtonSize}
    borderRadius={largerButtonSize}
  />,
  <AddCollectionIconButton
    buttonColorDict={Colors.favoriteButtonFilled}
    contentSize={largerButtonSize}
    borderRadius={largerButtonSize}
  />,
  <ShareIconButton
    buttonColorDict={Colors.favoriteButtonFilled}
    contentSize={largerButtonSize}
    borderRadius={largerButtonSize}
  />];