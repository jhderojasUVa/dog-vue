import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { expect } from "chai";
import { describe, it, vi } from "vitest";

import App from "../../src/App.vue";
import API from "../../src/api/dog-api";

describe("App", () => {
  it("At start, at mount, do the calls", async () => {
    const spyOngetDog = vi.spyOn(API, "getDog").mockImplementation(() => "foo");
    const spyOngetBreedList = vi
      .spyOn(API, "getBreedList")
      .mockImplementationOnce(() => {
        return {
          foo: [],
          bar: [],
        };
      });

    const wrapper = mount(App);

    // check if first is called
    expect(spyOngetDog).toHaveBeenCalled();
    // next step (remember await is there)
    await nextTick();
    // check if second is called
    expect(spyOngetBreedList).toHaveBeenCalled();
  });
  it("At start if ok check that we have all the items", async () => {
    const spyOngetDog = vi.spyOn(API, "getDog").mockImplementation(() => "foo");
    const spyOngetBreedList = vi
      .spyOn(API, "getBreedList")
      .mockImplementationOnce(() => {
        return {
          foo: [],
          bar: [],
        };
      });

    const wrapper = mount(App);
    await nextTick(); // proper start

    // we have both items
    expect(wrapper.find("Dog")).not.toBe(undefined);
    expect(wrapper.find("Search")).not.toBe(undefined);
  });
  it("At start (and anytime) if we have an error the error will be showed", async () => {
    const spyOngetDog = vi.spyOn(API, "getDog").mockImplementation(() => false);
    const spyOngetBreedList = vi
      .spyOn(API, "getBreedList")
      .mockImplementationOnce(() => {
        return {
          foo: [],
          bar: [],
        };
      });

    const wrapper = mount(App);
    await nextTick(); // proper start

    // we have both items
    expect(wrapper.find("Error")).not.toBe(undefined);
  });
  it("When event from Search with breed, the api to search dog call is fired", async () => {
    const breedFromSearch = "something";
    const spyOngetDog = vi.spyOn(API, "getDog").mockImplementation(() => "foo");
    const spyOngetBreedList = vi
      .spyOn(API, "getBreedList")
      .mockImplementationOnce(() => {
        return {
          foo: [],
          bar: [],
        };
      });

    const wrapper = mount(App);
    await nextTick(); // proper start

    await wrapper.trigger("breedSelected", breedFromSearch);
    expect(spyOngetDog).toHaveBeenCalled();
  });
});
