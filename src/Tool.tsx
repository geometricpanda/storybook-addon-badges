//
// export const Tool = memo(function MyAddonSelector() {
//   const [globals, updateGlobals] = useGlobals();
//
//   const isActive = [true, "true"].includes(globals[PARAM_KEY]);
//
//   const toggleMyTool = useCallback(() => {
//     updateGlobals({
//       [PARAM_KEY]: !isActive,
//     });
//   }, [isActive]);
//
//   return (
//     <IconButton
//       key={TOOL_ID}
//       active={isActive}
//       title="Enable my addon"
//       onClick={toggleMyTool}
//     >
//       <Icons icon="lightning" />
//     </IconButton>
//   );
// });

import {useStorybookApi} from "@storybook/manager-api";
import React from "react";

import {PARAM_BADGES_KEY} from "./constants";
import {BadgesToolbar} from "./components";

export const Tool = function AddonBadges() {
    const api = useStorybookApi();
    const badges = api.getCurrentParameter<string[]>(PARAM_BADGES_KEY) || [];

    return (
        <BadgesToolbar badges={badges}/>
    )

};
