// import React from 'react'
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import AWS from 'aws-sdk';



// const { VITE_ACCESS_KEY, VITE_SECRET_ACCESS_KEY,VITE_REGION } = import.meta.env; // Replace with your actual keys

// AWS.config.update({
//     accessKeyId: VITE_ACCESS_KEY,
//     secretAccessKey: VITE_SECRET_ACCESS_KEY,
//     region: VITE_REGION// The region of your S3 bucket
// });

// const s3 = new AWS.S3();

// const myBucket = 'sam-elligo-us-east-1-987691363194';
// const myKey = 'f7e32a29-3257-4e33-a48e-33f5056b4862/dummy2.pdf/dummy2.pdf';
// const signedUrlExpireSeconds = 60 * 5; // Your URL will expire in 5 minutes

// const url = s3.getSignedUrl('getObject', {
//     Bucket: myBucket,
//     Key: myKey,
//     Expires: signedUrlExpireSeconds
// });

// console.log(url);

// const Task = () => {

//   const newPlugin= defaultLayoutPlugin();
//   return (
//     <div>
//       <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
//         <Viewer fileUrl={'./dummy2.pdf'}  plugins={[newPlugin]} />
//       </Worker>
//     </div>
//   )
// }

// export default Task


import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { getDocumentById } from '../../redux/counterSlice';
import {get, map} from 'lodash';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
const Task = () => {
  // const [urls, setUrls] = useState([]);

  // const { VITE_ACCESS_KEY, VITE_SECRET_ACCESS_KEY, VITE_REGION } = import.meta.env; // Replace with your actual keys

  // useEffect(() => {
  //   AWS.config.update({
  //     accessKeyId: VITE_ACCESS_KEY,
  //     secretAccessKey: VITE_SECRET_ACCESS_KEY,
  //     region: VITE_REGION, // The region of your S3 bucket
  //   });

  //   const s3 = new AWS.S3();
  //   const params = {
  //     Bucket: 'sam-elligo-us-east-1-987691363194', // replace with your bucket name
  //   };

  //   s3.listObjectsV2(params, function (err, data) {
  //     if (err) console.log(err, err.stack);
  //     else {
  //       const urls = data.Contents.map(content => {
  //         const urlParams = {
  //           Bucket: 'sam-elligo-us-east-1-987691363194',
  //           Key: content.Key,
  //           Expires: 60 * 5, // URL expires in 5 minutes
  //         };
  //         return {
  //           url: s3.getSignedUrl('getObject', urlParams),
  //           key: content.Key,
  //         }
  //       });
  //       setUrls(urls);
  //     }
  //   });
  // }, []);

  // console.log(urls,"urls")



  const dispatch = useDispatch()
  const counterReducer = useSelector(state => state.Docs);
  const data = get(counterReducer, "singleData");
  const documents = get(counterReducer, "value");




  useEffect(() => {
    if(documents[0]){
      dispatch(getDocumentById(documents[0]))
    }
  },[documents])

  const newPlugin= defaultLayoutPlugin();

  return (
      <div style={{ height: "48vh", width: "100%" }}>
       {get(data,"url") && <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
         <Viewer fileUrl={data.url}  plugins={[newPlugin]} />
       </Worker>}
     </div>
  
  );
};

export default Task;