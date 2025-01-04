import cloudinary from "cloudinary";

// Configuration
cloudinary.config({ 
  cloud_name: 'dspw42bvx', 
  api_key: '534531135519849', 
  api_secret: 'NI8nU43GIMUKl5prhRNCr8LqY1Y'
});

export default cloudinary.v2;