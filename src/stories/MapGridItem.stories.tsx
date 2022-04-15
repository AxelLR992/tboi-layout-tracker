import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MapGridItem from "../components/atoms/MapGridItem";

export default {
  title: "Atoms/MapGridItem",
  component: MapGridItem,
} as ComponentMeta<typeof MapGridItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MapGridItem> = (args) => (
  <MapGridItem {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: <div style={{color: "red", width: 5, height: 5}}></div>
};
