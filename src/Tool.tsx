import React from "react";
import {Combo, Consumer} from "@storybook/api";
import {defaultBadgesConfig, PARAM_BADGES_CONFIG_KEY, PARAM_BADGES_KEY} from "./shared";
import {BadgesConfig} from "./typings";
import {Badges} from "./components";

export const Tool = () => (
    <Consumer>
        {({api, state}: Combo) => {
            const story = api.getData(state.storyId, state.refId);
            const customBadgesConfig = api.getCurrentParameter<BadgesConfig[]>(PARAM_BADGES_CONFIG_KEY) || {};

            const badgesConfig = {
                ...defaultBadgesConfig,
                ...customBadgesConfig,
            };

            const badges = api.getCurrentParameter<string[]>(PARAM_BADGES_KEY) || [];

            return story && badges.length
                ? <Badges badges={badges}
                          badgesConfig={badgesConfig}/>
                : null;
        }}
    </Consumer>
);
