import {addons, types} from "@storybook/manager-api";
import {ADDON_ID, ADDON_TITLE, PARAM_BADGES_KEY, TOOL_ID} from "./constants";
import {Tool} from "./Tool";

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    paramKey: PARAM_BADGES_KEY,
    title: ADDON_TITLE,
    match: () => true,
    render: Tool,
  });
});
