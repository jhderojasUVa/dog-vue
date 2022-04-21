import { mount } from "@vue/test-utils";
import { expect } from "chai";
import { describe, it } from "vitest";

import Search from "../../../src/components/search/Search.vue";

describe("Search component", () => {
  it("Default breed is empty array", () => {
    const wrapper = mount(Search);

    expect(wrapper.componentVM.breed).toEqual([]);
  });
  it("Updating breed props/list works fine", async () => {
    const breedList = {
      foo: [],
      bar: [],
      zeta: ["something"],
    };

    const wrapper = mount(Search);

    // check
    expect(wrapper.componentVM.breed).toEqual([]);

    // change props
    await wrapper.setProps({
      currentBreeds: breedList,
    });

    // check
    expect(wrapper.componentVM.breed).toEqual(Object.keys(breedList));
  });
  it("bubbling to parent works", async () => {
    const index = 1;
    const wrapper = mount(Search);

    // emit 1
    wrapper.vm.$emit("breedSelected", index);

    // check is emitted
    expect(wrapper.emitted().breedSelected).toEqual([[1]]);
  });
});
