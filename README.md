[![npm version](https://badge.fury.io/js/%40geometricpanda%2Fstorybook-addon-badges.svg)](https://www.npmjs.com/package/@geometricpanda/storybook-addon-badges)

# Storybook Addon Badges

Using `@geometricpanda/storybook-addon-badges` you're able to add badges to
your [Storybook](https://storybook.js.org) app.

![Screenshot of Storybook](https://raw.githubusercontent.com/geometricpanda/storybook-addon-badges/main/media/screenshot.png)

## Installation

NPM:

```shell
npm install @geometricpanda/storybook-addon-badges --save
```

Yarn:

```shell
yarn add @geometricpanda/storybook-addon-badges
```

## Configuration

In your `.storybook/main.ts` you'll need to load `@geometricpanda/storybook-addon-badges` into Storybook:

```typescript
// .storybook/main.ts
module.exports = {
  stories: [],
  addons: ['@geometricpanda/storybook-addon-badges'],
};
```

Optionally, you can define custom badge styles in `.storybook/preview.ts`.

```typescript
// .storybook/preview.ts
import type {Preview} from "@storybook/react";
import {BADGE, BadgesConfig} from "@geometricpanda/storybook-addon-badges";

const preview: Preview = {
    parameters: {
        badgesConfig: <BadgesConfig>{
            beta: {
                styles: {
                    backgroundColor: '#FFF',
                    borderColor: '#018786',
                    color: '#018786',
                },
                title: 'Beta',
            },
            deprecated: {
                styles: {
                    backgroundColor: '#FFF',
                    borderColor: '#6200EE',
                    color: '#6200EE',
                },
                title: 'Deprecated',
            },
        },
    }
}

export default preview;
```

## Upgrade to Storybook 7

As Storybook 7 has removed the `addParameters` method, we need to migrate to exporting a `preview` object.
Thankfully it's not too dissimilar to what we had before.

### Before

```typescript
// .storybook/preview.ts
import {addParameters} from '@storybook/react';
import {BadgesConfig} from "@geometricpanda/storybook-addon-badges";

addParameters({
    badgesConfig: <BadgesConfig>{
        ...
    }
});
```

### After

```typescript
// .storybook/preview.ts
import type {Preview} from "@storybook/react";
import {BadgesConfig} from "@geometricpanda/storybook-addon-badges";

const preview: Preview = {
    parameters: {
        badgesConfig: <BadgesConfig>{
            ...
        },
    }
};

export default preview;
```

Please be aware that it's now advised that stories use CSF format with external MDX files just for the docs page.
As such, this addon won't officially support MDX story format, but it'll probably work just fine.

## Tooltips

Optionally, you can define more complex tooltips for any of your badges.

```ts
// .storybook/preview.ts
import type {Preview} from "@storybook/react";
import {BADGE, BadgesConfig} from "@geometricpanda/storybook-addon-badges";

const preview: Preview = {
    parameters: {
        badgesConfig: <BadgesConfig>{
            beta: {
                tooltip: {
                    title: 'This is Beta',
                    desc: 'Be ready to receive updates frequently and leave a feedback',
                    links: [
                        {title: 'Read more', href: 'http://path/to/your/docs'},
                        {
                            title: 'Leave feedback',
                            onClick: () => {
                                alert('thanks for the feedback');
                            },
                        },
                    ],
                },
            },
            deprecated: {
                title: "Deprecated",
                tooltip: 'This component is deprecated, please avoid using it.',
            },
        },
    }
};

export default preview;
```

The key for each badge will be what's used throughout storybook to invoke that badge.

I tend to define each key as an `enum` when using TypeScript, or even an `Object` in plain JavaScript
to avoid using magic strings.

Don't worry if you haven't defined a badge which you use later, any badges which aren't recognised fall
back to the default preconfigured grey.

_Tip: If you prefer, instead of using the `addParameters` function, you can also
export `const parameters` containing a full parameters object._

```typescript
// .storybook/constants.ts
export enum BADGES {
    STATUS = 'status',
}
```

```typescript
// .storybook/preview.ts
import type {Preview} from "@storybook/react";
import {BADGE, BadgesConfig} from "@geometricpanda/storybook-addon-badges";

const preview: Preview = {
    parameters: {
        badgesConfig: <BadgesConfig>{
            [BADGE.STATUS]: {
                styles: {
                    backgroundColor: '#FFF',
                    borderColor: '#018786',
                    color: '#018786',
                },
                title: 'Status',
            },
        },
    }
};

export default preview;
```

## Preconfigured badges

You can import a collection of preconfigured badges using the following import:

```js
import { BADGE } from '@geometricpanda/storybook-addon-badges';
```

You can then use these badges by passing in the following enum values:

- `BADGE.DEFAULT`
- `BADGE.BETA`
- `BADGE.STABLE`
- `BADGE.DEPRECATED`
- `BADGE.EXPERIMENTAL`
- `BADGE.NEEDS_REVISION`
- `BADGE.OBSOLETE`

Should you wish to override these styles you can do by configuring a badge with the same key:

```typescript
// .storybook/preview.ts
import type {Preview} from "@storybook/react";
import {BADGE, BadgesConfig} from "@geometricpanda/storybook-addon-badges";

const preview: Preview = {
    parameters: {
        badgesConfig: <BadgeConfig>{
            [BADGE.STATUS]: {
                styles: {
                    backgroundColor: '#FFF',
                    borderColor: '#018786',
                    color: '#018786',
                },
                title: 'Status',
            },
        },
    }
}

export default preview;
```

Valid options for the `styles` configuration are:

- `backgroundColor`
- `borderColor`
- `borderRadius`
- `borderStyle`
- `borderWidth`
- `color`
- `fontSize`
- `fontFamily`
- `fontWeight`
- `lineHeight`
- `textTransform`
- `paddingInline`
- `paddingBlock`

### Breaking Changes

The previous `color` and `contrast` properties have been deprecated and have now been removed.
Please migrate to the `styles` property.

## Component Story Format (CSF)

### All Stories

The following will apply the badges to all components within your Story:

```jsx
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Path/To/MyComponent',
  parameters: {
    badges: [BADGE.DEPRECATED, BADGE.OBSOLETE],
  },
};

const Template = () => <h1>Hello World</h1>;

export const FirstComponent = Template.bind({});
export const SecondComponent = Template.bind({});
export const ThirdComponent = Template.bind({});
```

### Individual Stories

You can also selectively add badges to each Story:

```jsx
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Path/To/MyComponent',
};

const Template = () => <h1>Hello World</h1>;

export const FirstComponent = Template.bind({});
FirstComponent.parameters = {
  badges: [BADGE.DEPRECATED],
};

export const SecondComponent = Template.bind({});
SecondComponent.parameters = {
  badges: [BADGE.STABLE],
};

export const ThirdComponent = Template.bind({});
ThirdComponent.parameters = {
  badges: [BADGE.OBSOLETE],
};
```

### Removing Badges from Stories

When applying Badges to all Stories you can selectively remove them too:

```jsx
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Path/To/MyComponent',
  parameters: {
    badges: [BADGE.BETA],
  },
};

const Template = () => <h1>Hello World</h1>;

export const FirstComponent = Template.bind({});
export const SecondComponent = Template.bind({});

export const ThirdComponent = Template.bind({});
ThirdComponent.parameters = {
  badges: [],
};
```

