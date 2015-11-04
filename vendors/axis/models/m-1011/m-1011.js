{
  models: [
    {
      id: "m1011",    // not model_id ?
      name: "M1011",   // not model_name ?
      vendor_id: "axis",
      vendor_name: "axis",   //add this?
      jpg_url_primary: "axis-cgi/jpg/image.cgi",
      h264_url_primary: "axis-media/media.amp",
      mjpg_url_primary: "axis-cgi/mjpg/video.cgi",
      jpg_url_secondary: "axis-cgi/jpg/image-lowres.cgi",  //add 
      h264_url_secondary: "axis-media/media-lowres.amp",   //add 
      mjpg_url_secondary: "axis-cgi/mjpg/video-lowres.cgi",  //add 
      audio_url: "",
      shape: "Box",
      resolution: "640x480",
      official_url: "http://www.axis.com/products/cam_m1011/",
      more_info: "",      //Call this notes?
      poe: false,
      wifi: false,
      upnp: true,
      ptz: false,
      infrared: false,
      varifocal: false,
      sd_card: false,
      audio_io: false,
      discontinued: true,
      onvif: true,
      psia: false,
      auth_type: "basic",
      default_username: "root",
      default_password: "pass",
      image_icon: "https://evercam-public-assets.s3.amazonaws.com/axis/m1011/icon.jpg",   // Incl e.g. 50x50 in name?
      image-thumbnail: "https://evercam-public-assets.s3.amazonaws.com/axis/m1011/thumbnail.jpg",
      image_original: "https://evercam-public-assets.s3.amazonaws.com/axis/m1011/original.jpg"
    }
  ]
}
