class APIClient {
  
  constructor(id, secret){
    this._Id = id;
    this._Secret = secret;
    this.url = 'https://www.bling.com.br/';
    
  }

  apiGet(params){
      
     //let url =  this.Url + params;
    
     //let options = {

     //} 


  }
  
  apiPost(endPoint, postHeaders, postPayload){

    let url = this.url + endPoint;
    
    let response = '';
    let responseData = ';'
    let opstions = {
        method: 'POST',
        headers: postHeaders,
        payload: postPayload,
        muteHttpExeptions:true,
    };

    try{
      response = UrlFetchApp.fetch(url,opstions);
      responseData = JSON.parse(response.getContentText()); 

      return responseData; 

    }catch(err){
      return err;
    }

  }


  getToken(code){
    let  payload;
    let headers;
    let endpoint = 'Api/v3/oauth/token';
    let credentialsBase64 = Utilities.base64Encode(`${this._Id}:${this._Secret}`);


    headers  = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "1.0",
        "Authorization": `Basic ${credentialsBase64}`,
    };

    payload ={
      "grant_type":'authorization_code',
       "code": code
    };

    let response = this.apiPost(endpoint,headers,payload)

    console.log(response);
  }

  
}


