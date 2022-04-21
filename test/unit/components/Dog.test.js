import { mount } from "@vue/test-utils";
import { expect } from "chai";
import { describe, it } from "vitest";

import Dog from "../../../src/components/dog/Dog.vue";

describe("Dog component", () => {
  it("by default no currentDog", () => {
    // mount by default
    const wrapper = mount(Dog);

    // no currentDog
    expect(wrapper.componentVM.currentDog).toBe(undefined);
  });
  it("sending a prop works and sets the style", () => {
    // set one
    const currentDog = "foo.jpg";

    // mount with that data
    const wrapper = mount(Dog, {
      propsData: {
        currentDog,
      },
    });

    // check prop
    expect(wrapper.componentVM.currentDog).toBe(currentDog);
    // check style
    expect(wrapper.find("div").wrapperElement.style._values).toEqual({
      "background-image": `url(${currentDog})`,
    });
  });
});
