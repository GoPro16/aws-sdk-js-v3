// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListOutpostsWithS3Command,
  ListOutpostsWithS3CommandInput,
  ListOutpostsWithS3CommandOutput,
} from "../commands/ListOutpostsWithS3Command";
import { S3Outposts } from "../S3Outposts";
import { S3OutpostsClient } from "../S3OutpostsClient";
import { S3OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: S3OutpostsClient,
  input: ListOutpostsWithS3CommandInput,
  ...args: any
): Promise<ListOutpostsWithS3CommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOutpostsWithS3Command(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: S3Outposts,
  input: ListOutpostsWithS3CommandInput,
  ...args: any
): Promise<ListOutpostsWithS3CommandOutput> => {
  // @ts-ignore
  return await client.listOutpostsWithS3(input, ...args);
};
export async function* paginateListOutpostsWithS3(
  config: S3OutpostsPaginationConfiguration,
  input: ListOutpostsWithS3CommandInput,
  ...additionalArguments: any
): Paginator<ListOutpostsWithS3CommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOutpostsWithS3CommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof S3Outposts) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof S3OutpostsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected S3Outposts | S3OutpostsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
