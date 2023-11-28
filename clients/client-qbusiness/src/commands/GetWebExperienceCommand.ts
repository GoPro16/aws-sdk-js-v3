// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetWebExperienceRequest, GetWebExperienceResponse } from "../models/models_0";
import { de_GetWebExperienceCommand, se_GetWebExperienceCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWebExperienceCommand}.
 */
export interface GetWebExperienceCommandInput extends GetWebExperienceRequest {}
/**
 * @public
 *
 * The output of {@link GetWebExperienceCommand}.
 */
export interface GetWebExperienceCommandOutput extends GetWebExperienceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about an existing Amazon Q web experience.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetWebExperienceCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetWebExperienceCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // GetWebExperienceRequest
 *   applicationId: "STRING_VALUE", // required
 *   webExperienceId: "STRING_VALUE", // required
 * };
 * const command = new GetWebExperienceCommand(input);
 * const response = await client.send(command);
 * // { // GetWebExperienceResponse
 * //   applicationId: "STRING_VALUE",
 * //   webExperienceId: "STRING_VALUE",
 * //   webExperienceArn: "STRING_VALUE",
 * //   defaultEndpoint: "STRING_VALUE",
 * //   status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "PENDING_AUTH_CONFIG",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   title: "STRING_VALUE",
 * //   subtitle: "STRING_VALUE",
 * //   welcomeMessage: "STRING_VALUE",
 * //   samplePromptsControlMode: "ENABLED" || "DISABLED",
 * //   authenticationConfiguration: { // WebExperienceAuthConfiguration Union: only one key present
 * //     samlConfiguration: { // SamlConfiguration
 * //       metadataXML: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       userIdAttribute: "STRING_VALUE", // required
 * //       userGroupAttribute: "STRING_VALUE",
 * //     },
 * //   },
 * //   error: { // ErrorDetail
 * //     errorMessage: "STRING_VALUE",
 * //     errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWebExperienceCommandInput - {@link GetWebExperienceCommandInput}
 * @returns {@link GetWebExperienceCommandOutput}
 * @see {@link GetWebExperienceCommandInput} for command's `input` shape.
 * @see {@link GetWebExperienceCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 */
export class GetWebExperienceCommand extends $Command<
  GetWebExperienceCommandInput,
  GetWebExperienceCommandOutput,
  QBusinessClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetWebExperienceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWebExperienceCommandInput, GetWebExperienceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWebExperienceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QBusinessClient";
    const commandName = "GetWebExperienceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ExpertQ",
        operation: "GetWebExperience",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetWebExperienceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWebExperienceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWebExperienceCommandOutput> {
    return de_GetWebExperienceCommand(output, context);
  }
}
