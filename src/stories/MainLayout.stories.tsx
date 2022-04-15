import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainLayout from "../components/atoms/MainLayout";

export default {
  title: "Atoms/MainLayout",
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainLayout> = (args) => (
  <MainLayout {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  elementsTitle: "Elements",
  gridTitle: "",
  propertiesTitle: "Properties"
};
