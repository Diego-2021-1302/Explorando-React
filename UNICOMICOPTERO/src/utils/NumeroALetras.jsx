export default function numeroALetras(numero) {
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const especiales = ["diez", "once", "doce", "trece", "catorce", "quince"];
    const decenas = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];
  
    if (numero < 1 || numero > 1000) return "Número fuera de rango";
    if (numero === 1000) return "mil";
  
    let letras = "";
  
    const c = Math.floor(numero / 100);
    const d = Math.floor((numero % 100) / 10);
    const u = numero % 10;
  
    if (c > 0) {
      letras += (c === 1 && numero % 100 === 0) ? "cien" : centenas[c] + " ";
    }
  
    const dosDigitos = numero % 100;
    if (dosDigitos < 10) {
      letras += unidades[dosDigitos];
    } else if (dosDigitos >= 10 && dosDigitos < 16) {
      letras += especiales[dosDigitos - 10];
    } else if (dosDigitos < 20) {
      letras += "dieci" + unidades[dosDigitos - 10];
    } else if (dosDigitos === 20) {
      letras += "veinte";
    } else if (dosDigitos < 30) {
      letras += "veinti" + unidades[dosDigitos - 20];
    } else {
      letras += decenas[d];
      if (u > 0) letras += " y " + unidades[u];
    }
  
    return letras.trim();
  }

  