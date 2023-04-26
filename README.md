# Experimento Copilot

## Modo de execução:

```shell
node isBalanced.js
```

## Exemplo de saída:

```shell
Digite a quantidade de Strings desejadas: 3

Digite a Strings desejada: 7
Digite a Strings desejada: (
Digite a Strings desejada: ([] )

7 - 
( - false
([] ) - true
```
## Tempo correspondente:

```shell
sem copilot    00:36:47
```

## Desafio 1 (Linguagens java ou javascript)

Implemente um algoritmo que verifique se uma string possui chaves, parênteses e colchetes balanceados. Em
uma dada string, você deve indicar se os parênteses e colchetes estão balanceados. Diz-se que uma string está balanceada quando para cada parênteses ou colchetes abrindo, existe um equivalente fechando. Por exemplo, a string: ```(()[])``` está balanceada, enquanto as strings ```((())``` e ```)(``` não estão balanceadas.

## Input format
Você irá receber um número inteiro n indicando a quantidade de strings que virão a seguir. Depois, você receberá ```n``` strings, uma em cada linha. A string contém no máximo 255 caracteres e pode ser composta pelos caracteres ```')'```, ```'('```, ```']'```, ```'['``` e ```' '```. O carácter branco deve ser ignorado. Também é possível receber uma linha vazia. 

## Output format
Para cada string, você deve imprimir ```'Yes'``` , caso a string esteja balanceada e ```'No'``` caso contrário.

## Exemplo:

| Input      | Output |
| ----------- | ----------- |
| 7 | |
| ([] ) | Yes |
| (([()]))) | No |
| ([()[]()])() | Yes |
| ( | No |
| (] | No |
| )( | No |
| ][ | No |

## Referências:
 - [Readline](https://nodejs.org/api/readline.html)
 - [Node Shebang](https://nodejs.dev/en/learn/run-nodejs-scripts-from-the-command-line/)
