import * as cdk from 'aws-cdk-lib';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

import { Construct } from 'constructs';


export class DiscordBot2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pongLambda = new NodejsFunction(this, "pong-lambda", {
        functionName: "pong-lambda",
        handler: "handle",
        entry: `${__dirname}/../src/lambdas/pong/index.ts`,
        runtime: cdk.aws_lambda.Runtime.NODEJS_16_X
    });

    const api = new LambdaRestApi(this, 'discord-api', {
      handler: pongLambda,
    });
   
  }
}
