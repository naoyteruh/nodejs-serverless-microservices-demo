# Schedule screenshot tasks

When executed, this microservice looks for screenshots to grab and stores them as tasks in the "screenshot" queue.

## Required environment variables:

- GOOGLE_CLOUD_PROJECT: Project ID -> nodejs-microservices
- QUEUE_ID: the queue name to creates tasks in. -> nodejs-microservices-queue
- QUEUE_LOCATION: region of the queue -> europe-west1-b
- TARGET_SERVICE: name of the service that takes screenshots -> service-screenshot
- TOPIC_NAME: Name of the Pub/Sub topic to send events to. -> topic-screenshots
- SUBSCRIPTION_NAME: Name of the Pub/Sub subscription -> subs-screenshots


## Dependencies

Create a Pub/Sub topic with `gcloud pubsub topics create $TOPIC_NAME`.

gcloud pubsub topics create $TOPIC_NAME

Here :
gcloud pubsub topics create topic-screenshots

Create a Pub/Sub subscription with:
```
gcloud beta pubsub subscriptions create $SUBSCRIPTION_NAME \
   --topic $TOPIC_NAME \
   --push-endpoint \
     https://$TARGET_SERVICE-dot-$GOOGLE_CLOUD_PROJECT.appspot.com/ \
   --ack-deadline 30
```
Here:

```
gcloud beta pubsub subscriptions create subs-screenshots --topic topic-screenshots --push-endpoint https://service-screenshot-dot-nodejs-microservices-294921.ew.r.appspot.com/ --ack-deadline 30
```

/!\ push-endpoint is the url of deployed `screenshot` service

## Development

Run locally with pretty printed bunyan logs with `npm run dev`.

## Deployment

Deploy the service with `npm run deploy`.

## Scheduling this microservice

Schedule the execution of this microservice with `gcloud app deploy cron.yaml`.

## Development

Make sure to have the proper env vars in place, then start local development with `npm start`.
