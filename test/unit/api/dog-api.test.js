import { expect } from "chai";
import { describe, it, vi } from "vitest";
import axios from "axios";

import * as API from "../../../src/api/dog-api";

describe("dog-api", () => {
  it("API is not empty", () => {
    expect(API).not.toBe(undefined);
  });
  it("getDog with no dog calls the random URL", async () => {
    // spy on call and return a faux entry
    const spyOnaxiosGet = vi.spyOn(axios, "get").mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          data: {
            status: "success",
            message: "foo",
          },
        });
      });
    });

    // do the call
    const response = await API.default.getDog();

    // is called in the proper way
    expect(spyOnaxiosGet).toHaveBeenCalledWith(
      "https://dog.ceo/api/breeds/image/random"
    );
    // and respond the mock the message (of course it does!)
    expect(response).toBe("foo");
  });
  it("getDog with dog respond with normal url", async () => {
    const searchDog = "foo";
    // spy on call and return a faux entry
    const spyOnaxiosGet = vi.spyOn(axios, "get").mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          data: {
            status: "success",
            message: "foo",
          },
        });
      });
    });

    // do the call
    await API.default.getDog(searchDog);

    // check if is called in the proper way
    expect(spyOnaxiosGet).toHaveBeenCalledWith(
      `https://dog.ceo/api/breed/${searchDog}/images`
    );
    // the response takes a random so it not needed to check it
  });
  it("breedList works and when called empty returns a list", async () => {
    const spyOnaxiosGet = vi.spyOn(axios, "get").mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          data: {
            status: "success",
            message: "foo",
          },
        });
      });
    });

    // do the call
    const response = await API.default.getBreedList();

    // check if is called properly
    expect(spyOnaxiosGet).toHaveBeenCalledWith(
      "https://dog.ceo/api/breeds/list/all"
    );
    // and responds from the mock the message
    expect(response).toBe("foo");
  });
  it("breedList with a breed do the call and respond what is needed", async () => {
    const breed = "something";
    const spyOnaxiosGet = vi.spyOn(axios, "get").mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          data: {
            status: "success",
            message: "foo",
          },
        });
      });
    });

    // do the call
    const response = await API.default.getBreedList(breed);

    // check if is called properly
    expect(spyOnaxiosGet).toHaveBeenCalledWith(
      `https://dog.ceo/api/breed/${breed}/list`
    );
    // and responds from the mock the message
    expect(response).toBe("foo");
  });
});
