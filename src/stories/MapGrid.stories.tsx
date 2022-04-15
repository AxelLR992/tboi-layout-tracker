import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MapGrid from "../components/molecules/MapGrid";

export default {
  title: "Molecules/MapGrid",
  component: MapGrid,
} as ComponentMeta<typeof MapGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MapGrid> = (args) => (
  <MapGrid {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  width: 10,
  height: 10,
};
