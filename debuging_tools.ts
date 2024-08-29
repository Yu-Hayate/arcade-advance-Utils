
//% color="#3c1a13" icon="\uf056"
//% advanced=true
//% block="tools"
namespace tools
{
    //% block
    export function throwError(message: string) {
        throw message;
    }
    //% block="$color=colorindexpicker"
    //% color.delf=1
    //% color="#A55EEA"
    export function color(color: number) {
        return color;
    }
    //% blockId=my_custom_for_loop
    //% block="for $index from $lowerBound to $upperBound"
    //% draggableParameters=reporter
    //% upperBound.defl=4
    //% lowerBound.delf=0
    //% handlerStatement=true
    export function forLoop(lowerBound: number, upperBound: number, handler: (index: number) => void) {
        for (let i = lowerBound; i <= upperBound; i++) {
            handler(i);
        }
    }
}

