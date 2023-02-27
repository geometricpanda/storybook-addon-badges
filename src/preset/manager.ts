import {addons, types} from "@storybook/addons";

import {ADDON_ID, ADDON_TITLE, TOOL_ID} from "../constants";
import {Tool} from "../Tool";

// Register the addon
addons.register(ADDON_ID, () => {
    // Register the tool
    addons.add(TOOL_ID, {
        type: types.TOOL,
        title: ADDON_TITLE,
        match: () => true,
        render: Tool,
    });
});
