import RequestHelp from './RequestHelp'

class API extends RequestHelp {
    async uploadImg(params = {}){
        try {
            let result = await this.axios("post","localhost:3000/pic",params);
            if (result && result.status === 1 ) {
                return result;
            }else{
                let err = {
                    tip:"loading failed",
                    response: result,
                    data:params,
                    url:'localhost:3000/pic'
                }
            }
        } catch (error) {
            throw err;
        }
    }

    async getRecord(params = {}){
        try{
          let result = await this.axios('get', `/data/${params.type}`); 
          if(result && (result.data instanceof Object) && result.http_code === 200){
            return result.data;
          }else{
            let err = {
              tip: 'loading data failed',
              response: result,
              data: params,
              url: 'localhost:3000/data',
            }
            throw err;
          }
        }catch(err){
          throw err;
        }
      }
}