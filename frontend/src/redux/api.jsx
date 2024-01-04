import AWS from "aws-sdk";
import { getFileName } from "../services";
import { get } from "lodash";

const GetDocs = async (auths) => {

  const {username} = auths
  const { VITE_ACCESS_KEY, VITE_SECRET_ACCESS_KEY, VITE_REGION } = import.meta
    .env;

  AWS.config.update({
    accessKeyId: VITE_ACCESS_KEY,
    secretAccessKey: VITE_SECRET_ACCESS_KEY,
    region: VITE_REGION,
  });

  const s3 = new AWS.S3();
  // const params = {
  //   Bucket: "sam-elligo-us-east-1-987691363194",
  // };

  const API = get(auths,"signInUserSession.accessToken.payload.cognito:groups[0]",[])

  let params;
  console.log(API,"paramsparamsparams")

  if(API === "Admin"){
    params = {
      Bucket: "sam-elligo-us-east-1-987691363194",
    };
  }else{
    params = {
      Bucket: "sam-elligo-us-east-1-987691363194",
      Prefix: username + "/",  
    };
  }


  const resp = await s3.listObjects(params).promise();
    console.log("resp??", resp);

  const { Contents: data } = resp;

  const files = [];
  for (let content of data) {
    const urlParams = {
      Bucket: "sam-elligo-us-east-1-987691363194",
      Key: content.Key,
      Expires: 60 * 5,
    };

    const url = await s3.getSignedUrl("getObject", urlParams);

    files.push({
      filename: getFileName(content.Key),
      LastModified: content.LastModified,
      id: content.Owner.ID,
      Owner: content.Owner.DisplayName,
      url,
    });
  }
  files.sort((a, b) => b.LastModified - a.LastModified);
  return files;
};

export default GetDocs;
