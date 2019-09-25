let baseURL; 
let imgUrl = '//localhost:3000';
if(process.env.NODE_ENV === 'development'){
  baseURL = '//localhost:3000';
}else{
  baseURL = '//serverAddress';
}


export default {imgUrl, baseURL}