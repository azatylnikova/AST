import Token from "./Token";
import { tokenTypeList } from "./TokenType";

export default class Lexer {
   code!: string; /// сам код
   pos: number = 0; /// позиция
   tokenList : Token[] = [] /// список токенов


   constructor(code:string) {
    this.code = code;
   }

   lexAnalysis (): Token[] {  
        while(this.nextToken()) {
            console.log('Токен')
        }
        return this.tokenList
   }
   
   nextToken() : boolean {//// проверяет есть ли текущая позиция больше чем длина кода
        if (this.pos >= this.code.length){
            return false;
        }

        const tokenTypesValues = Object.values(tokenTypeList) ////  получаем все значения из списка токентайплист и возвращаем в Лексер
        for (let i = 0; i < tokenTypesValues.length; i++) {
            const tokenType  = tokenTypesValues[i];
            const regex = new RegExp('^' + tokenType.regex) /// ищема тот тип токета котрый совпаде=ает с началом строки  нашего кода
            const result = this.code.substr(this.pos).match(regex) /// ту часть которую проверили, мы ислючаеим
            console.log(result)
            return true;
        }
        return true;
   }
}