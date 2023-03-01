import React from "react";
import {Combo, Consumer} from "@storybook/api";

import {PARAM_BADGES_KEY} from "./config";
import {BadgesToolbar} from "./components";

export const Tool = () => (
    <Consumer>
        {({api, state}: Combo) => {
            const story = api.getData(state.storyId, state.refId);
            const badges = api.getCurrentParameter<string[]>(PARAM_BADGES_KEY) || [];

            return story && badges.length
                ? <BadgesToolbar badges={badges}/>
                : null;
        }}
    </Consumer>
);
