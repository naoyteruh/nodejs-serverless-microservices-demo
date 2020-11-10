# Website history web frontend

Express.js web frontend to display website screenshots

## Dependencies

- Google App Engine
- Cloud Datastore
- Cloud Storage

Make all images in the GCS bucket public, with: `gsutil iam ch allUsers:objectViewer gs://[BUCKET_NAME]`

Here:
gsutil iam ch allUsers:objectViewer gs://gs-screenshot-bucket

    "@google-cloud/debug-agent": "^2.6.0",
    "@google-cloud/profiler": "^0.1.14",
    "@google-cloud/trace-agent": "^2.10.1",

## Development

export PORT=3001
export GCLOUD_PROJECT=nodejs-microservices
export BUCKET_NAME=gs-screenshot-bucket   
export GOOGLE_APPLICATION_CREDENTIALS="key.json"
gcloud services enable cloudprofiler.googleapis.com

gcloud iam service-accounts create svc-profiler --display-name "my service account"
gcloud projects add-iam-policy-binding nodejs-microservices-294921 \
     --member serviceAccount:svc-profiler@nodejs-microservices-294921.iam.gserviceaccount.com \
     --role roles/cloudprofiler.agent

In frontend directory :

 gcloud iam service-accounts keys create \
     key.json \
     --iam-account svc-profiler@nodejs-microservices-294921.iam.gserviceaccount.com

Run locally with pretty printed bunyan logs with `npm run dev`.

## Deploy

`npm run deploy`

## Notes

To run this locally you will need to set the following ENVARS

* GCLOUD\_PROJECT
  - Name of your project
* GOOGLE\_APPLICATION\_CREDENTIALS
  - Path to local service account crednetials
  - more details at https://cloud.google.com/docs/authentication/getting-started
* BUCKET_NAME
  - name of the bucket

## TODO

