import json


def lambda_handler(event, context):
    event_body = json.loads(event["body"])

    print(event_body, "==============================")

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
        },
        "body": json.dumps(event_body),
    }