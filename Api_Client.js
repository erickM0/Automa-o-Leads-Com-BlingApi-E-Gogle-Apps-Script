class API_Client  {
  
  constructor(id, secret){
    this._Id = id;
    this._Secret = secret;
    this.Urlrl = 'https://www.bling.com.br/';
    
  }

  apiGet(params){
      
     //let url =  this.Url + params;
    
     //let options = {

     //} 


  }
  
  apiPost(endPoint, postHeaders, postPayload){

    let url = this.Url + endPoint;
    let credentialsBase64 = Utilities.base64Encode(`${this._Id}:${this._Secret}`);

    let response = '';
    let responseData = ';'
    let opstions = {
        method: 'POST',
        headers: postHeaders,
        payload: postPayload,
        muteHttpExeptions:true,
    };


    postHeaders["Authorization"] = `Basic ${credentialsBase64}`;

    try{
      response = UrlFetchApp.fetch(url,opstions);
      responseData = JSON.parse(response.getContentText()); 

      return responseData; 

    }catch(err){
      return err;
    }

  }


  getToken(){
    let  params = '';
    let endpoint = 'Api/v3/oauth/token';


  }

  
}


