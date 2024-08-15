const clienteApi = new APIClient(apiCredentials.id,apiCredentials.secret);
let id = clienteApi._Id
function doGet(e) {
  console.log(e.parameter.code);
  if(apiCredentials.token == '' ){
    if(e.parameter.code == null){
      return loadPage("Connect");
    }
    let code = e.parameter.code;
    apiCredentials.token = clienteApi.getToken(code);
  }
  return loadPage("Connected");
  
  
}

function doPost(e) {
  
}

function test(){
 // let cliente = new API_Client(apiCredentials.id,apiCredentials.secret);

  

}

function loadPage(pagename){
  return HtmlService.createTemplateFromFile(pagename).evaluate();
}