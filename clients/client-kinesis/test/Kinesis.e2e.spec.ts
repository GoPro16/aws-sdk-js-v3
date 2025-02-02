import { test as it, describe, expect } from "vitest";

import { KinesisClient, ListStreamsCommand } from "../src/index";

describe("@aws-sdk/client-kinesis", () => {
  const client = new KinesisClient({});
  const ONE_SECOND = 1 * 1000;

  // TODO: not working in CI
  it.skip(
    `${ListStreamsCommand.name} should succeed`,
    async () => {
      const { StreamNames } = await client.send(new ListStreamsCommand({}));
      expect(StreamNames).toBeInstanceOf(Array);
    },
    ONE_SECOND // prevent issue https://github.com/aws/aws-sdk-js-v3/issues/1206
  );
});
