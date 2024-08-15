class LeadsSheet {
  constructor(id){
    this.SpreadSheet = SpreadsheetApp.openById(id);
    checkSheetStructure();
  }
  

  checkSheetStructure(){
      let sheetPages = this.SpreadSheet.getSheets();
      //console.log(sheetPages);
      // lista de canais
      let pages = ["Mercado Livre", "Amazon", "Shopee", "Magalu","Site", "Venda Interna","Outros"];

      // itera sobre a lista de canais
      pages.forEach(page =>{
        //identifica se existe alguma aba com o nome do canal
        let exists = sheetPages.filter(sheet =>{
          sheet.getName() === page;
        }).length == 1;
          console.log(exists);
        //aidicona a página caso não exista
        if(!exists){
         let newSheet =  this.SpreadSheet.insertSheet();
         newSheet.setName(page);
        }
      });

  }

  addRow(page,value){
    let sheet = this.SpreadSheet.getSheetByName(page);

    sheet.appendRow(value);
  }



}

//function setPages (){
//  const spreadSheet = new LeadsSheet("1ffRo4yH2M0jwmiCL1HL4y0Cp7iCa16QmObMQ3SvV4WA");
//  spreadSheet.checkSheetStructure();
//}
