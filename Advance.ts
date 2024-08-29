let _f = 0;
let _t = 0;
let __breakFlag: boolean = false;
let __currentCaseValue: any = null;
let __uses: number = 1;
let __comId: number = 0;
let __seed: number = 271722; // in 750 test, 50% chance is = 50.2%
let __result: number = 0;
let __chance: boolean = false;
let __avr: number[] = [];
const abbreviations: string[] = ['', 'K', 'M', 'B', 't', 'q', 'Q', 's', 'S', 'o', 'n', 'd', 'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'N', 'v', 'c', 'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'N', 'v', 'c', 'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'N', 'v', 'c', 'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'N', 'v', 'c'];
interface TestResult {
    startTime: number;
    pausedTime: number;
    totalTime: number;
    uses: number;
}
let romanSymbols: { [key: number]: string } = {
    1: "I", 4: "IV", 5: "V", 9: "IX",
    10: "X", 40: "XL", 50: "L", 90: "XC",
    100: "C", 400: "CD", 500: "D", 900: "CM",
    1000: "M", 4000: "MV̅", 5000: "V̅", 9000: "ĪX̅",
    10000: "X̅", 40000: "X̅L̅", 50000: "L̅", 90000: "X̅C̅",
    100000: "C̅", 400000: "C̅D̅", 500000: "D̅", 900000: "C̅M̅",
    1000000: "M̅"
};
let __testResults: { [id: string]: TestResult } = {}
let __consoleLoggingEnabled = false
Advance.ScriptsShadow("default")
enum Numbers {
    PI = 3.1415926535,
    e = 2.718281828459045
}
enum Cipher {
    //% block="A"
    S = 83,
    //% block="B"
    A = 65,
    //% block="C"
    B = 66,
    //% block="D"
    C = 67,
    //% block="E"
    D = 68,
    //% block="F"
    E = 69,
    //% block="G"
    F = 70,
    //% block="H"
    G = 71,
    //% block="I"
    H = 72,
    //% block="J"
    I = 73,
    //% block="K"
    J = 74,
    //% block="L"
    K = 75,
    //% block="M"
    L = 76,
    //% block="N"
    M = 77,
    //% block="O"
    N = 78,
    //% block="P"
    O = 79,
    //% block="Q"
    P = 80,
    //% block="R"
    Q = 81
}
const ciphers: { [key: number]: string[] } = {
    [Cipher.S]: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\\/!@#$%?&*(){}[]~<>`";:'.split(''),
    [Cipher.A]: '/c4?!<EAD1nkr8G$BZXKL{}q6S5aM%7]p2tvygW[3oVH>@b~hjuU\\YTm*si;&)fN`0IdCP9RQOe(#FJ"lwxz:'.split(''),
    [Cipher.B]: '!F6l0"#eUTh2C7K[{/)r>MXY&ux3(1pV@5GncbRj~9Qvk%*gO;\\`4atymHBiq$wJ8z<]IS?D}WsZdAf:PLNoE'.split(''),
    [Cipher.C]: ')f$x]aD3b"qm}r*(Kh;?QBNIe#!J9<VXZCy524[&OWMFTo>kP0l`@tpzL6{A8:G%j7\\wuiRgUsESv~HcYn/1d'.split(''),
    [Cipher.D]: 'z[Th@3n%}?*odlPe/G~IVCQZDUS6f2t{RsB80#XHr]4<Lcvya"w`k1NA>pEY5&M:$KOmx\\Ji9W;7gbjqu!F()'.split(''),
    [Cipher.E]: '$Xtf9JW8h6{5MxGYavcUwiCj\\0R%1;e`TQ]p(HZ:2B!rzbO4N3g*d/EqlSousy>?"<LK[~&)#I7AF@}kVnmPD'.split(''),
    [Cipher.F]: 'RhG/7D3vLei0}~(9UOI4yEu*TmB>\\MFw1lW!nK[ba{%5#dXc68fz"$p`<As@xjQkSC2YgJtP:VHZ?&]No;rq)'.split(''),
    [Cipher.G]: 'c8A*BR@WPh)U$swq65r?94pG#[~3`XMEaYOi\\Q1!Zx:Lk%vzeIV]oyjJ(bCmg{fH2unS/}T";0t>F7dKD&<Nl'.split(''),
    [Cipher.H]: '?2#B~4>jJua&V!gNCLGpUmhE;\\9*sWd1lDX/8]b5@{v0t6eIYqAF$7i:Sxczo}Pf%RH3Z"nrO<[yT(Qw`KMk)'.split(''),
    [Cipher.I]: 'Gyw:nRiqp3oTVYj6vM#$hF9cNzQsKe\\<!fr}01{Ed"ZHJIU]`P[7BSl)guXC*5?W8k4Lbt&~2;%O@ax/A(Dm>'.split(''),
    [Cipher.J]: 'w{/Q}:IFpD@95kMBUv&#j4T!Sn]xrP[Y7>J<G2iu%ZW*LOa~\\;HC6o8`Vm$1z?gR03yq)hbdKXAlsf"cNE(te'.split(''),
    [Cipher.K]: '2YA!$GB)ol#]\\bS&jdUMcH`XxFInRw9Z4zE}7vmpaiNQ5ut1y/CfV<["r~K6h*%{Og:8T?0>W@Dk3JLPqe;s('.split(''),
    [Cipher.L]: 'u`edB"OFCak<4ZXJ$G[P0&xt6T~cEziNw\\RS7b}YjApLDQK183m2@Ir?:;*oVsl9yg!n5{M)v#Wq>hU]H%(/f'.split(''),
    [Cipher.M]: 'A#L6x5U9j{o$wz}d(2J:/cSlh)r\\>Y[1N%bms4e?`H"k0EP@!F&MTiBp7CZ<ynXtug~ORqG;]WDfIQK3vaV*8'.split(''),
    [Cipher.N]: 'A;]q/"Ulf6eT`308?*1wDHbLju<{F~V2vEc#($xXS@sY%hC[4oMO&7rIGZg>ikpzPQay9}5KB):dmtR!Nn\\WJ'.split(''),
    [Cipher.O]: '])?Mx!7q~D4#zO}dpgJBL1m<:EWsIf@bSR&TrCKGl2ojXFw{Y[nc*60Hu(yZtvA83\\5>UN`iVhQe/k9aP"%;$'.split(''),
    [Cipher.P]: '}3rawC<hxP["Ido:7QWB)(fgm6/Xs9`%{y;Jz0LUqvF4SeZin&k]HK>c@pRT5uO2\\?G$j~AYbtDl8#*1!MVNE'.split(''),
    [Cipher.Q]: 'b&;p:exf64FBCTKP70L?Wvd>ijoh/uHNR`<1z@}E"#*(!~]{Asr)Y5MD9UglJGZ8q2ma$QtOcIn[V%\\Xky3wS'.split('')
}
enum singleNum {
    //% block="cube root"
    //% block.loc.fr="racine cubique"
    _CBRT,
    // Default trigonometric functions
    //% block="sin"
    _SIN,
    //% block="cos"
    _COS,
    //% block="tan"
    _TAN,
    // Hyperbolic functions
    //% block="sinh"
    _SINH,
    //% block="cosh"
    _COSH,
    //% block="tanh"
    _TANH,
    // Inverse trigonometric functions
    //% block="arcsin"
    _ARCSIN,
    //% block="arccos"
    _ARCCOS,
    //% block="arctan"
    _ARCTAN,
    // Logarithmic function
    //% block="log"
    _LOG,
    // Gamma function
    //% block="gamma"
    _GAMMA,
    // Factorial function
    //% block="factorial"
    //% block.loc.fr="factorielle"
    _FACTORIAL
}
enum StatOperation {
    // Mean calculation
    //% block="mean"
    MEAN,
    // Median calculation
    //% block="median"
    MEDIAN,
    // Standard deviation calculation
    //% block="standard deviation"
    //% block.loc.fr="écart type"
    STANDARD_DEVIATION
}
enum DiscreteMathOperation {
    // log of any number
    //% block="logX"
    _LOGX,
    // GCD calculation
    //% block="greatest common divisor"
    //% block.loc.fr=
    _GCD,
    // LCM calculation
    //% block="least common multiple"
    _LCM,
    // Power calculation
    //% block="power"
    _POWER,
    // Modulo operation
    //% block="modulo"
    _MOD,
    // Absolute difference of two numbers
    //% block="absolute difference"
    _ABSOLUTE_DIFFERENCE,
    // Average of two numbers
    //% block="average"
    //% block.loc.fr="moyenne"
    _AVERAGE
}
/*
 *     //% name.shadow="ScriptNamesList"
 * 
 *     //% inlineInputMode=inline
 * 
 *     //% (add variable shadow here)
 * 
 *     //% advanced=true
 * 
 *     //% handlerStatement=true
 * 
 */

//% block="Advanced" color="#0074D9" 
//% subcategories='["Math","String","Logic","Scripts","Random","Testing"]'
//% weight=12
//% advanced=false
namespace Advance {
    //% blockId=abv_num
    //% block="Abriviate Number $num || with $len decimals"
    //% block.loc.fr="Abréger le nombre $num || avec $len décimales"
    //% subcategory="String"
    //% color="#F5D547"
    //% weight=10
    //% num.delf=4245
    //% len.delf=2
    //% group="numbers"
    export function abbreviateNumber(num: number, len?: number): string {
        if (!len) len = 1
        const length: number = Math.floor(Math.log(Math.abs(num)));
        const abbreviationIndex: number = Math.floor(length / 3);
        if (abbreviationIndex < abbreviations.length) {
            return Math.roundWithPrecision(num / Math.pow(10, abbreviationIndex * 3), len) + abbreviations[abbreviationIndex];
        }
        return num.toString();
    }
    
    //% blockId=num_to_roman
    //% block="turn $num into roman numerals"
    //% block.loc.fr="convertir $num en chiffres romains"
    //% subcategory="String"
    //% color="#F5D547"
    //% weight=10
    //% num.delf=75
    //% group="numbers"
    export function toRoman(num: number): string {
        if (num <= 0) return "N"; // 'N' for zero (nulla)
        let roman = "";

        let keys = Object.keys(romanSymbols).map(k => parseInt(k)).sort((a, b) => b - a);
        for (let key of keys) {
            while (num >= key) {
                roman += romanSymbols[key];
                num -= key;
            }
        }
        return roman;
    }
    /**
     * Converts a string to uppercase
     * @param value The string to convert
     * @returns The uppercase string
     */
    //% blockId=toUpperCase
    //% block="Convert $value to uppercase"
    //% block.loc.fr="Convertir $value en majuscules"
    //% subcategory="String"
    //% color="#F5D547"
    //% weight=11
    //% value.defl="Hello, World!"
    //% group="strings"
    export function toUpperCase(value: string): string {
        return value.toUpperCase();
    }
    /**
     * Converts a string to lowercase
     * @param value The string to convert
     * @returns The lowercase string
     */
    //% blockId=toLowerCase
    //% block="Convert $value to lowercase"
    //% block.loc.fr="Convertir $value en minuscules"
    //% subcategory="String"
    //% color="#F5D547"
    //% weight=12
    //% value.defl="Hello, World!"
    //% group="strings"
    export function toLowerCase(value: string): string {
        return value.toLowerCase();
    }
    /**
    * Checks if a string starts with a specified substring
    * @param value The string to check
    * @param substring The substring to look for at the start of the string
    * @returns True if the string starts with the specified substring, otherwise false
    */
    //% blockId=startWith
    //% block="Check if $value starts with $substring"
    //% block.loc.fr="Vérifier si $value commence par $substring"
    //% subcategory="String"
    //% color="#F5D547"
    //% weight=16
    //% value.defl="Hello, World!"
    //% substring.defl="Hello"
    //% group="strings"
    export function startsWith(value: string, substring: string): boolean {
        return value.indexOf(substring) === 0;
    }
    /**
     * Checks if a string ends with a specified substring
     * @param value The string to check
     * @param substring The substring to look for at the end of the string
     * @returns True if the string ends with the specified substring, otherwise false
     */
    //% blockId=endWith
    //% block="Check if $value ends with $substring"
    //% block.loc.fr="Vérifier si $value se termine par $substring"
    //% subcategory="String"
    //% color="#F5D547"
    //% weight=15
    //% value.defl="Hello, World!"
    //% substring.defl="World!"
    //% group="strings"
    export function endsWith(value: string, substring: string): boolean {
        return value.indexOf(substring) === (value.length - substring.length);
    }
    //% blockId=getCurRandom
    //% block="Get current random value"
    //% block.loc.fr="Obtenir la valeur aléatoire actuelle"
    //% group="Random"
    //% subcategory="Random"
    //% weight=10
    //% color="#ff8135"
    export function GetCurrentRandom() {
        return __result
    }
    //% blockId=lerp
    //% block="Lerp from $start to $end with $t \\%"
    //% block.loc.fr="Interpoler de $start à $end avec $t \\%"
    //% start.delf=10
    //% end.delf=320
    //% t.delf=50
    //% subcategory="Math"
    //% weight=40
    //% color="#A55EEA"
    export function Lerp(start: number, end: number, t: number) {
        t /= 100;
        t = Math.max(0, Math.min(1, t));
        return start + t * (end - start);
    }
    //% subcategory="Math"
    //% blockId=some_numbers
    //% block="$num"
    //% weight=39
    //% color="#A55EEA"
    export function Num(num: Numbers) {
        return num
    }
    //% blockId=seed
    //% block="Get seed"
    //% block.loc.fr="Obtenir la graine de génération"
    //% group="Random"
    //% subcategory="Random"
    //% weight=20
    //% color="#ff8135"
    export function getSeed() {
        return __seed
    }
    //% blockId=setSeed
    //% block="Set seed to $e"
    //% block.loc.fr="Définir la graine à $e"
    //% e.delf=123456
    //% group="Random"
    //% subcategory="Random"
    //% weight=60
    //% color="#ff8135"
    export function setSeed(e: number) {
        __seed = e % 2 ** 32
    }
    //% blockId=testRandom
    //% block="Test random accuracy for $attempts attempts"
    //% block.loc.fr="Tester la précision aléatoire pour $attempts tentatives"
    //% attempts.delf=100
    //% group="Random"
    //% subcategory="Testing"
    //% weight=20
    //% color="#ff8135"
    export function testRandom(attempts: number) {
        if (attempts > 0) {
            __avr = [];

            for (let index = 0; index < attempts; index++) {
                __chance = Advance.chance(50);
                const currentRandom = Advance.GetCurrentRandom();
                console.log(currentRandom + " : " + __chance);
                __avr.push(__chance ? 1 : 0);
            }

            _f = __avr.reduce((sum, value) => sum + value, 0) / __avr.length;
            _t = Math.abs(0.5 - _f);
            console.log("Average: " + _f + ", " + (_t <= 0.009 ? "perfect" : _t <= 0.03 ? "good" : _t <= 0.8 ? "bad" : "terrible"));
        }
    }
    //% blockId=rand
    //% block="Random"
    //% block.loc.fr="aléatoire"
    //% e.delf=0
    //% t.delf=1
    //% group="Random"
    //% subcategory="Random"
    //% weight=90
    //% color="#ff8135"
    export function random() {
        let a = __uses * Math.PI + 2345432,
            n = 12853412,
            d = 1 - 0;
        n = ((a = ((__seed * (Math.abs(Math.cos(__uses)) + 0.3) * 1456022.56823 + a / __uses) % n) * __uses) / n) % 1,
            __uses++;
        __result = 0 + n * d;
        return __result;
    }
    //% blockId=randInt
    //% block="Random integer min $e max $t"
    //% block.loc.fr="Entier aléatoire min $e max $t"
    //% e.delf=0
    //% t.delf=100
    //% group="Random"
    //% subcategory="Random"
    //% weight=80
    //% color="#ff8135"
    export function randInt(e: number = 0, t: number = 100) {
        return Math.floor(Advance.random() * (t - e + 1)) + e;
    }
    //% blockId=randChance
    //% e.delf=50
    //% group="Random"
    //% block="$e \\% chance"
    //% block.loc.fr="$e \\% de chance"
    //% subcategory="Random"
    //% weight=70
    //% color="#ff8135"
    export function chance(e: number = 50) {
        return (e /= 100), Advance.random() <= e;
    }
   
    //% blockId=endTest
    //% block="End Performance test || with ID $id"
    //% block.loc.fr="Fin du test de performance || avec l'ID $id"
    //% group="Performence Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Testing"
    //% weight=90
    //% color="#249CA3"
    export function endTest(id?: string): void {
        const endTime = game.runtime()
        if (!id) id = "default"
        const testResult = __testResults[id]
        if (testResult) {
            const duration = endTime - testResult.startTime - testResult.pausedTime
            testResult.totalTime += duration
            testResult.uses++
            if (__consoleLoggingEnabled) {
                console.log(`Total time for test '${id || "default"}': ${duration}ms`)
            }
        } else {
            if (__consoleLoggingEnabled) {
                console.log(`No start time recorded for test ${id}`)
            }
        }
    }
    //% blockId=startTest
    //% block="Start Performance test || with ID $id"
    //% block.loc.fr="Debut du test de performance || avec l'ID $id"
    //% group="Performence Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Testing"
    //% weight=100
    //% color="#249CA3"
    export function startTest(id?: string) {
        if (!id) id = "default"
        const testResult = __testResults[id]
        if (!testResult) {
            __testResults[id] = { startTime: game.runtime(), pausedTime: 0, totalTime: 0, uses: 0 }
        } else {
            testResult.startTime = game.runtime()
            testResult.pausedTime = 0
        }
    }
    //% blockId=pauseTest
    //% block="Pause Performance test || with ID $id"
    //% block.loc.fr="Pause du test de performance || avec l'ID $id"
    //% group="Performence Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Testing"
    //% weight=80
    //% color="#249CA3"
    export function pauseTest(id?: string) {
        if (!id) id = "default";
        let testResult = __testResults[id];
        if (testResult) {
            // If the test is not already paused, record the current paused time
            if (!testResult.pausedTime) {
                testResult.pausedTime = game.runtime();
            }
        } else {
            if (__consoleLoggingEnabled) {
                console.log(`No start time recorded for test ${id}`);
            }
        }
    }
    //% blockId=resumeTest
    //% block="Resume Performance test || with ID $id"
    //% block.loc.fr="Reprendre le test de performance || avec l'ID $id"
    //% group="Performence Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Testing"
    //% weight=70
    //% color="#249CA3"
    export function resumeTest(id?: string) {
        if (!id) id = "default";
        let testResult = __testResults[id];
        if (testResult) {
            // If the test was paused, adjust the paused time
            if (testResult.pausedTime) {
                let pausedDuration = game.runtime() - testResult.pausedTime;
                testResult.startTime += pausedDuration;
                testResult.pausedTime = 0; // Reset paused time
            }
        } else {
            if (__consoleLoggingEnabled) {
                console.log(`No start time recorded for test ${id}`);
            }
        }
    }
    //% blockId=averageTestTime
    //% block="Average time of Performance test || with ID $id"
    //% block.loc.fr="Temps moyen du test de performance || avec l'ID $id"
    //% group="Performence Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Testing"
    //% weight=60
    //% color="#249CA3"
    export function averageTestTime(id?: string): number {
        if (!id) id = "default"
        const testResult = __testResults[id]
        if (testResult && testResult.uses > 0) {
            return testResult.totalTime / testResult.uses
        } else {
            if (__consoleLoggingEnabled) {
                console.log(`No test result recorded for test ${id}`)
            }
            return -1
        }
    }
    //% blockId=compareTest
    //% block="Compare test with id $id1 to test with id $id2"
    //% block.loc.fr="Comparer le test avec ID $id1 au test avec ID $id2"
    //% group="Performence Testing"
    //% id1.shadow="PerformanceTesting"
    //% id1.delf="default"
    //% id2.shadow="PerformanceTesting"
    //% id2.delf="default"
    //% subcategory="Testing"
    //% weight=50
    //% color="#249CA3"
    export function compareTests(id1: string, id2: string): number {
        const time1 = getTestResult(id1)
        const time2 = getTestResult(id2)
        if (time1 === -1 || time2 === -1) return -1
        return time1 - time2
    }
    //% blockId=resetTest
    //% block="Reset time || with ID $id"
    //% block.loc.fr="Réinitialiser le temps || avec l'ID $id"
    //% group="Performence Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Testing"
    //% weight=40
    //% color="#249CA3"
    export function resetTestTime(id?: string) {
        if (!id) id = "default"
        delete __testResults[id]
    }
    //% blockId=getTest
    //% block="Get Performance test result || with ID $id"
    //% block.loc.fr="Obtenir le résultat du test de performance || avec l'ID $id"
    //% group="Performence Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Testing"
    //% id.delf="default"
    //% weight=80
    //% color="#249CA3"
    export function getTestResult(id?: string): number {
        if (!id) id = "default"
        const testResult = __testResults[id]
        if (testResult && testResult.uses > 0) {
            return testResult.totalTime
        } else {
            if (__consoleLoggingEnabled) {
                console.log(`No test result recorded for test ${id}`)
            }
            return -1
        }
    }
    //% blockId=consoleLogging
    //% block="Console logging enabled $enabled"
    //% block.loc.fr="Console logging activé $enabled"
    //% group="Performence Testing"
    //% subcategory="Testing"
    //% weight=30
    //% color="#249CA3"
    export function toggleConsoleLogging(enabled: boolean): void {
        __consoleLoggingEnabled = enabled
    }
    //% block="$name"
    //% blockId=ScriptNamesList
    //% blockHidden=true shim=Scripts_ID
    //% name.fieldEditor="autocomplete" name.fieldOptions.decompileLiterals=true
    //% name.fieldOptions.key="ScriptNamesList"
    //% color="#249CA3"
    export function ScriptsShadow(name: string) {
        return name
    }
    //% block="$name"
    //% blockId=PerformanceTesting
    //% blockHidden=true shim=performence_ID
    //% name.fieldEditor="autocomplete" name.fieldOptions.decompileLiterals=true
    //% name.fieldOptions.key="PerformanceTesting"
    export function PerformenceTestShadow(name: string) {
        return name
    }
    //% blockId=singleMath
    //% block="$e $num"
    //% subcategory="Math"
    //% color="#A55EEA"
    export function math(e: singleNum, num: number) {
        if (e == singleNum._SIN) {
            return Math.sin(num);
        } else if (e == singleNum._COS) {
            return Math.cos(num);
        } else if (e == singleNum._TAN) {
            return Math.tan(num);
        } else if (e == singleNum._SINH) {
            return _sinh(num);
        } else if (e == singleNum._COSH) {
            return _cosh(num);
        } else if (e == singleNum._TANH) {
            return _tanh(num);
        } else if (e == singleNum._ARCSIN) {
            return Math.asin(num);
        } else if (e == singleNum._ARCCOS) {
            return Math.acos(num);
        } else if (e == singleNum._ARCTAN) {
            return Math.atan(num);
        } else if (e == singleNum._LOG) {
            return Math.log(num);
        } else if (e == singleNum._GAMMA) {
            return _gamma(num);
        } else if (e == singleNum._FACTORIAL) {
            return _factorial(num);
        } else if (e = singleNum._CBRT) {
            return _cubeRoot(num)
        }
        return NaN;// Invalid operationq
    }
    //% blockId=arrayMath
    //% block="$operation $values"
    //% subcategory="Math"
    //% color="#A55EEA"
    export function statistics(operation: StatOperation, values: number[]): number {
        if (operation === StatOperation.MEAN) {
            return _mean(values);
        } else if (operation === StatOperation.MEDIAN) {
            return _median(values);
        } else if (operation === StatOperation.STANDARD_DEVIATION) {
            return _standardDeviation(values);
        }
        return NaN; // Invalid operation
    }
    //% blockId=doubleMath
    //% block="$operation $a $b"
    //% subcategory="Math"
    //% color="#A55EEA"
    export function discreteMath(operation: DiscreteMathOperation, a: number, b: number): number {
        switch (operation) {
            case DiscreteMathOperation._GCD:
                return _gcd(a, b);
            case DiscreteMathOperation._LCM:
                return _lcm(a, b);
            case DiscreteMathOperation._POWER:
                return _pow(a, b);
            case DiscreteMathOperation._MOD:
                return _mod(a, b);
            case DiscreteMathOperation._ABSOLUTE_DIFFERENCE:
                return _absoluteDifference(a, b);
            case DiscreteMathOperation._AVERAGE:
                return _average(a, b);
            case DiscreteMathOperation._LOGX:
                return Math.log(b) / Math.log(a)
            default:
                return NaN; // Invalid operation
        }
    }
    //% blockId=Ciphers
    //% block="Ciphers $Cipher1|| $Cipher2 $Cipher3 $Cipher4 $Cipher5 $Cipher6 $Cipher7 $Cipher8"
    //% inlineInputMode=inline
    //% color="#F7EA44"
    //% subcategory="String"
    //% group="strings"
    export function shadowCiphers(Cipher1: Cipher, Cipher2?: Cipher, Cipher3?: Cipher, Cipher4?: Cipher, Cipher5?: Cipher, Cipher6?: Cipher, Cipher7?: Cipher, Cipher8?: Cipher) {
        Cipher2 = Cipher2 ? Cipher2 : Cipher.S;
        Cipher3 = Cipher3 ? Cipher3 : Cipher.S;
        Cipher4 = Cipher4 ? Cipher4 : Cipher.S;
        Cipher5 = Cipher5 ? Cipher5 : Cipher.S;
        Cipher6 = Cipher6 ? Cipher6 : Cipher.S;
        Cipher7 = Cipher7 ? Cipher7 : Cipher.S;
        Cipher8 = Cipher8 ? Cipher8 : Cipher.S;
        return [Cipher1, Cipher2, Cipher3, Cipher4, Cipher5, Cipher6, Cipher7, Cipher8];
    }
    //% blockId=encodeStr
    //% block="Encode $str with $ciphersList"
    //% block.loc.fr="Encoder $str avec $ciphersList"
    //% ciphersList.shadow=Ciphers
    //% str.delf="Hello, World!"
    //% subcategory="String"
    //% color="#F5D547"
    //% group="strings"
    export function encode(str: string, ciphersList: Cipher[]): string {
        str = removeInvalidCharacters(str);
        for (let j = 0; j < ciphersList.length; j++) {
            const currentCipher = ciphersList[j];
            let encoded = '';
            for (let i = 0; i < str.length; i++) {
                const char = str.charAt(i);
                const index = ciphers[Cipher.S].indexOf(char);
                if (index !== -1) {
                    const newIndex = (index + i) % ciphers[Cipher.S].length;
                    encoded += isReferenceCipher(currentCipher) ? ciphers[Cipher.S][newIndex] : ciphers[currentCipher][newIndex];
                } else {
                    encoded += char;
                }
            }
            str = encoded;
        }
        return str;
    }
    //% blockId=decodeStr
    //% block="Decode $encoded with $ciphersList"
    //% block.loc.fr="Decoder $str avec $ciphersList"
    //% ciphersList.shadow=Ciphers
    //% encoded.delf="Hello, World!"
    //% subcategory="String"
    //% color="#F5D547"
    //% group="strings"
    export function decode(encoded: string, ciphersList: Cipher[]): string {
        encoded = removeInvalidCharacters(encoded);

        for (let j = ciphersList.length - 1; j >= 0; j--) {
            const currentCipher = ciphersList[j];
            let decoded = '';

            for (let i = 0; i < encoded.length; i++) {
                const char = encoded.charAt(i);
                const index = ciphers[currentCipher].indexOf(char);
                if (index !== -1) {
                    let newIndex = index - i;
                    if (newIndex < 0) {
                        newIndex += ciphers[Cipher.S].length;
                    }
                    decoded += isReferenceCipher(currentCipher) ? ciphers[Cipher.S][newIndex] : ciphers[Cipher.S][newIndex];
                } else {
                    decoded += char;
                }
            }

            encoded = decoded;
        }
        return encoded;
    }
    //% blockId=comment
    //% subcategory="String"
    //% block="/* $yourComment */"
    //% color="#7F9387"
    //% group="Comments"
    //% inlineInputMode=inline
    export function comment(yourComment: string) {
    }
    //% blockId=OR
    //% block="OR $a $b"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=200
    export function or(a: number, b: number): number {
        return a | b
    }
    //% blockId=AND
    //% block="AND $a $b"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=190
    export function and(a: number, b: number): number {
        return a & b
    }
    //% blockId=NOT
    //% block="NOT $a"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=180
    export function not(a: number): number {
        return ~a
    }
    //% blockId=bitShiftR
    //% block="$a >> $b"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=170
    export function bitShiftRight(a: number, b: number): number {
        return a >> b
    }
    //% blockId=bitShiftL
    //% block="$a << $b"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=160
    export function bitShiftLeft(a: number, b: number): number {
        return a << b
    }
    //% blockId=XOR
    //% block="XOR$a $b"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=150
    export function xor(a: number, b: number): number {
        return a ^ b;
    }
    //% blockId=IS_BIT_SET
    //% block="Is bit $bitIndex set in $a"
    //% block.loc.fr="Le bit $bitIndex est-il défini dans $a"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=120
    export function isBitSet(a: number, bitIndex: number): boolean {
        return (a & (1 << bitIndex)) !== 0;
    }
    //% blockId=SET_BIT
    //% block="Set bit $bitIndex in $a to $b"
    //% block.loc.fr="Définir le bit $bitIndex dans $a à $b"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=110
    export function setBit(a: number, bitIndex: number, b: number): number {
        return (a & ~(1 << bitIndex)) | ((b & 1) << bitIndex);
    }
    //% blockId=COUNT_LEADING_ZEROS
    //% block="Count leading zeros in $a"
    //% block.loc.fr="Compter les zéros de tête dans $a"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=70
    export function countLeadingZeros(a: number): number {
        if (a === 0) return 32;
        let count = 0;
        while ((a & 0x80000000) === 0) {
            a <<= 1;
            count++;
        }
        return count;
    }
    //% blockId=COUNT_TRAILING_ZEROS
    //% block="Count trailing zeros in $a"
    //% block.loc.fr="Compter les zéros de fin dans $a"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=60
    export function countTrailingZeros(a: number): number {
        if (a === 0) return 32;
        let count = 0;
        while ((a & 1) === 0) {
            a >>>= 1;
            count++;
        }
        return count;
    }
    //% blockId=REVERSE_BITS
    //% block="Reverse bits of $a"
    //% block.loc.fr="Inverser les bits de $a"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=30
    export function reverseBits(a: number): number {
        a = ((a & 0xAAAAAAAA) >>> 1) | ((a & 0x55555555) << 1);
        a = ((a & 0xCCCCCCCC) >>> 2) | ((a & 0x33333333) << 2);
        a = ((a & 0xF0F0F0F0) >>> 4) | ((a & 0x0F0F0F0F) << 4);
        a = ((a & 0xFF00FF00) >>> 8) | ((a & 0x00FF00FF) << 8);
        a = (a >>> 16) | (a << 16);
        return a;
    }
    //% blockId=TOGGLE_BIT
    //% block="Toggle bit $bitIndex in $a"
    //% block.loc.fr="Basculer le bit $bitIndex dans $a"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=29
    export function toggleBit(a: number, bitIndex: number): number {
        return a ^ (1 << bitIndex);
    }
    //% blockId=HAMMING_DISTANCE
    //% block="calculate Hamming distance between $a and $b"
    //% block.loc.fr="Calculer la distance de Hamming entre $a et $b"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=27
    export function hammingDistance(a: number, b: number): number {
        let count = 0;
        let c = a ^ b;
        while (c !== 0) {
            count++;
            c &= c - 1;
        }
        return count;
    }
    //% blockId=breakFlag
    //% block="Break"
    //% block.loc.fr="Interrompre"
    //% subcategory="Logic"
    //% color="#45AAF2"
    export function Break() {
        __breakFlag = true;
    }
    //% blockId=defaultCase
    //% block="Default case"
    //% block.loc.fr="Cas par défaut"
    //% handlerStatement=true
    //% subcategory="Logic"
    //% color="#45AAF2"
    export function defaultCase(handler: () => void) {
        if (!__breakFlag) {
            handler();
        }
    }
    //% blockId=Case
    //% block="case $caseValue :"
    //% block.loc.fr="cas $caseValue :"
    //% caseValue.shadow=text
    //% handlerStatement=true
    //% subcategory="Logic"
    //% color="#45AAF2"
    export function Case(caseValue: any, handler: () => void) {
        if (!__breakFlag && caseValue == __currentCaseValue) {
            handler();
        }
    }
    //% blockId=switch
    //% block="Switch $value"
    //% block.loc.fr="Changer $value"
    //% value.shadow=text
    //% handlerStatement=true
    //% subcategory="Logic"
    //% color="#45AAF2"
    export function Switch(value: any, handler: () => void) {
        if (__currentCaseValue == null) {
            __currentCaseValue = value;
            handler();
        }
        __breakFlag = false;
        __currentCaseValue = null;
    }
}
function isReferenceCipher(cipher: Cipher): boolean {
    return cipher === Cipher.S;
}
function removeInvalidCharacters(str: string): string {
    return str;
}
function use(cipher: Cipher): boolean {
    return !isReferenceCipher(cipher);
}
function _cubeRoot(x: number): number {
    return x ** (1 / 3);
}
function _sinh(x: number): number {
    return (Math.exp(x) - Math.exp(-x)) / 2;
}
function _cosh(x: number): number {
    return (Math.exp(x) + Math.exp(-x)) / 2;
}
function _tanh(x: number): number {
    return _sinh(x) / _cosh(x);
}
function _arcsin(x: number): number {
    return Math.asin(x);
}
function _arccos(x: number): number {
    return Math.acos(x);
}
function _arctan(x: number): number {
    return Math.atan(x);
}
function _log(x: number): number {
    return Math.log(x);
}
function _gcd(a: number, b: number): number {
    if (b === 0) {
        return a;
    }
    return _gcd(b, a % b);
}
function _lcm(a: number, b: number): number {
    return Math.abs(a * b) / _gcd(a, b);
}
function _pow(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}
function _mod(a: number, b: number): number {
    return a % b;
}
function _absoluteDifference(a: number, b: number): number {
    return Math.abs(a - b);
}
function _average(a: number, b: number): number {
    return (a + b) / 2;
}
function _mean(values: number[]): number {
    let sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
}
function _median(values: number[]): number {
    values.sort((a, b) => a - b);
    let mid = Math.floor(values.length / 2);
    if (values.length % 2 === 0) {
        return (values[mid - 1] + values[mid]) / 2;
    } else {
        return values[mid];
    }
}
function _standardDeviation(values: number[]): number {
    let m = _mean(values);
    let squaredDiffs = values.map(value => Math.pow(value - m, 2));
    let avgSquaredDiff = _mean(squaredDiffs);
    return Math.sqrt(avgSquaredDiff);
}
function _factorial(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * _factorial(n - 1);
}
function _gamma(n: number): number {
    function gammaApprox(x: number): number {
        let p = [
            676.5203681218851, -1259.1392167224028,
            771.32342877765313, -176.61502916214059,
            12.507343278686905, -0.13857109526572012,
            9.9843695780195716e-6, 1.5056327351493116e-7
        ];
        let g = 7;
        if (x < 0.5) return Math.PI / (Math.sin(Math.PI * x) * gammaApprox(1 - x));
        x -= 1;
        let a = 0.99999999999980993;
        for (let i = 0; i < p.length; i++) {
            a += p[i] / (x + i + 1);
        }
        let t = x + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;
    }
    // ho no, a function in a finction?
    return gammaApprox(n);


}
