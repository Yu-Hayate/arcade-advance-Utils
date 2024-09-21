
//% color="#3c1a13" icon="\uf056"
//% advanced=true
//% block="tools" // English
//% block.loc.zh="工具" // Simplified Chinese
//% block.loc.zh-tw="工具" // Traditional Chinese
//% block.loc.de="Werkzeuge" // German
//% block.loc.fr="outils" // French
//% block.loc.ja="ツール" // Japanese
//% block.loc.es="herramientas" // Spanish (Spain)
//% block.loc.es-mx="herramientas" // Spanish (Mexico)
//% block.loc.ru="инструменты" // Russian
namespace tools
{
    //% blockId=throw_error
    //% block="throw error $error" // English
    //% block.loc.zh-cn="抛出错误 $error" // Simplified Chinese
    //% block.loc.zh-tw="拋出錯誤 $error" // Traditional Chinese
    //% block.loc.de="Fehler werfen $error" // German
    //% block.loc.fr="lancer une erreur $error" // French
    //% block.loc.ja="エラーを投げる $error" // Japanese
    //% block.loc.es-es="lanzar error $error" // Spanish (Spain)
    //% block.loc.es-mx="lanzar error $error" // Spanish (Mexico)
    //% block.loc.ru="выдать ошибку $error" // Russian
    //% error.shadow="text"
    export function throwError(error: any) {
        if (error !== "") {
            throw JSON.stringify(error);
        }
    }

    //% blockId=color_picker
    //% block="$color=colorindexpicker"
    //% color.delf=1
    export function color(color: number) {
        return color;
    }


    //% blockId=custom_for_loop
    //% block="for $index from $lowerBound to $upperBound" // English
    //% block.loc.zh-cn="对于 $index 从 $lowerBound 到 $upperBound" // Simplified Chinese
    //% block.loc.zh-tw="對於 $index 從 $lowerBound 到 $upperBound" // Traditional Chinese
    //% block.loc.de="für $index von $lowerBound bis $upperBound" // German
    //% block.loc.fr="pour $index de $lowerBound à $upperBound" // French
    //% block.loc.ja="$lowerBound から $upperBound まで $index を繰り返す" // Japanese
    //% block.loc.es-es="para $index de $lowerBound a $upperBound" // Spanish (Spain)
    //% block.loc.es-mx="para $index de $lowerBound a $upperBound" // Spanish (Mexico)
    //% block.loc.ru="для $index от $lowerBound до $upperBound" // Russian
    //% draggableParameters=reporter
    //% upperBound.defl=4
    //% lowerBound.delf=0
    //% handlerStatement=true
    export function forLoop(lowerBound: number, upperBound: number, handler: (index: number) => void) {
        for (let i = lowerBound; i <= upperBound; i++) {
            handler(i);
        }
    }




    //              ██╗███████╗ ██████╗ ███╗   ██╗
    //              ██║██╔════╝██╔═══██╗████╗  ██║
    //              ██║███████╗██║   ██║██╔██╗ ██║
    //         ██   ██║╚════██║██║   ██║██║╚██╗██║
    //         ╚█████╔╝███████║╚██████╔╝██║ ╚████║
    //          ╚════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝



    //% blockId=json_stringify
    //% block
    //% subcategory="JSON"
    export function json_stringify(input: any) {
        return JSON.stringify(input)
    }

    //% blockId=json_parse
    //% block
    //% subcategory="JSON"
    export function json_parse(input: string) {
        return JSON.parse(input)
    }

    //% blockId=json_parseIntRadix
    //% block
    //% subcategory="JSON"
    export function json_parseIntRadix(s: string, base?: number) {
        base = base? base : undefined;
        return JSON.parseIntRadix(s, base)
    }
}

