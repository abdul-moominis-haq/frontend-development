function echo(name, num) {
    console.log(`Evaluating the ${name} side`);
    return num;
  }
  // Exponentiation operator (**) is right-associative,
  // but all call expressions (echo()), which have higher precedence,
  // will be evaluated before ** does
  console.log(echo("left", 4) ** echo("middle", 3) ** echo("right", 2));
  // Evaluating the left side
  // Evaluating the middle side
  // Evaluating the right side
  // 262144
  
  // Exponentiation operator (**) has higher precedence than division (/),
  // but evaluation always starts with the left operand
  console.log(echo("left", 4) / echo("middle", 3) ** echo("right", 2));
  // Evaluating the left side
  // Evaluating the middle side
  // Evaluating the right side
  // 0.4444444444444444
  