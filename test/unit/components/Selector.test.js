import { mount } from "@vue/test-utils";
import { expect } from "chai";
import { describe, it } from "vitest";

import Selector from "../../../src/components/search/Selector.vue";

describe("Selector component", () => {
  it("by default, no options", () => {
    const wrapper = mount(Selector);

    expect(wrapper.componentVM.options).toBe(undefined);
  });
  it("sending options will fill options", () => {
    const options = ["foo", "bar", "zeta"];

    const wrapper = mount(Selector, {
      propsData: {
        options,
      },
    });

    expect(wrapper.componentVM.options).toEqual(options);
    // fast way to check it, I like better than the findAll
    expect(wrapper.find("select").text()).toBe(`Random...${options.join("")}`);
  });
  it("choosing one will emit the event to the parent", async () => {
    const options = ["foo", "bar", "zeta"];
    const indexSelected = 1;

    const wrapper = mount(Selector, {
      propsData: {
        options,
      },
    });

    const wrapperOptions = wrapper.find("select").findAll("option");

    // set one as selected
    await wrapperOptions[indexSelected].setSelected();

    // check event emited with correct value
    expect(wrapper.emitted().seleted).toEqual([[indexSelected]]);
    // also check that the selected variable is set for the dom
    expect(wrapper.componentVM.selected).toBe(indexSelected);
  });
});
