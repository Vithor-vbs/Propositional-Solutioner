let calculator = {
  verificarSimbolos: function (formula) {
    const newString = formula.replace(/[^\^~v()-><>\s]+|[()\s]/g, "");
    // console.log(newString);

    const propositionalSymbols = ["~", "^", "v"];
    let status = true;
    for (let i = 0; i < newString.length; i++) {
      const char = newString.charAt(i);

      if (char == "-") {
        if (newString.charAt(i + 1) == ">") {
          console.log(
            `${char}${newString.charAt(
              i + 1
            )} é um símbolo da lógica proposicional.`
          );
          i++;
        }
      }
      if (char == "<") {
        if (newString.charAt(i + 1) == "-") {
          if (newString.charAt(i + 2) == ">") {
            console.log(
              `${char}${newString.charAt(i + 1)}${newString.charAt(
                i + 2
              )} é um símbolo da lógica proposicional.`
            );
            i += 2;
          }
        }
      } else if (propositionalSymbols.includes(char)) {
        console.log(`${char} é um símbolo da lógica proposicional.`);
      } else {
        if (char != "-") {
          status = false;
          console.log(`${char} não é um símbolo da lógica proposicional.`);
        }
      }
    }

    return status;
  },
};
console.log(calculator.verificarSimbolos("~(P v Q) ^ (R -> S)"));

// /[^a-z\s]|v+/gi; resgatar so as letras
