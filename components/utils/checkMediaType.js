const checkMediaType = (media) => media?.data.attributes.mime.split('/')[0];

export default checkMediaType;
