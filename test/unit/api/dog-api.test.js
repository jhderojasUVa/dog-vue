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

    const response = await API.default.getDog();

    expect(spyOnaxiosGet).toHaveBeenCalledWith(
      "https://dog.ceo/api/breeds/image/random"
    );
    expect(response).toBe("foo");
  });
  it("getDog with dog respond with normal url", async () => {
      const searchDog = 'foo';
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

    await API.default.getDog(searchDog);

    expect(spyOnaxiosGet).toHaveBeenCalledWith(`https://dog.ceo/api/breed/${searchDog}/images`);
    // the response takes a random so it not needed to check it
  });
});
