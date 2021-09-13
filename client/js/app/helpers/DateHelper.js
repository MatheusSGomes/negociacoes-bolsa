class DateHelper {
  constructor() {
    throw new Error('Esta classe não pode ser instanciada')
  }

  // converter data para texto
  static dataParaTexto(data) {
    return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`
  }
 
  // converter texto para data
  static textoParaData(texto) {
    console.log(texto)
    
    if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('A data deve estar no formato aaaa-mm-dd')

    return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
  }
}