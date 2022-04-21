import { expect } from "chai";
import { describe, it } from "vitest";

import {
  RESPONSE_STATUS_MESSAGES,
  API_ENDPOINTS,
} from "../../../src/api/dog-api-endpoints";

describe("dog-api-endpoints", () => {
  it("RESPONSE_STATUS_MESSAGES is there and is not empty", () => {
    expect(RESPONSE_STATUS_MESSAGES).not.toBe(undefined);
    expect(Object.keys(RESPONSE_STATUS_MESSAGES).length).not.toBe(0);
  });
  it("API_ENDPOINTS is there and is not empty", () => {
    expect(API_ENDPOINTS).not.toBe(undefined);
    expect(Object.keys(API_ENDPOINTS).length).not.toBe(0);
  })
});
