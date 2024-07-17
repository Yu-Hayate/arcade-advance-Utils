let _f = 0;
let _t = 0;
let __breakFlag:boolean = false;
let __currentCaseValue: any = null;
let __uses: number = 1;
let __comId: number = 0;
let __seed: number = 271722; // in 750 test, 50% chance is = 50.2%
let __result: number = 0;
let __chance: boolean = false;
let __avr: number[] = [];
const abbreviations: string[] = ['', 'K', 'M', 'B', 't', 'q', 'Q', 's', 'S', 'o', 'n', 'd', 'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'N', 'v', 'c', 'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'N', 'v', 'c', 'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'N', 'v', 'c', 'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'N', 'v', 'c'];
interface Script {
    func: () => void;
    enabled: boolean;
}
let __scripts: { [key: string]: Script } = {};
interface TestResult {
    startTime: number;
    pausedTime: number;
    totalTime: number;
    uses: number;
}
let __testResults: { [id: string]: TestResult } = {}
let __consoleLoggingEnabled = false
Advance.ScriptsShadow("default")
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
    [Cipher.S]: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 '.split(''),
    [Cipher.A]: 'QSWA4ZXE 3RNB8CV2DY05HFGTU16J9MKI7POL'.split(''),
    [Cipher.B]: 'M4LPY0KNBJ27IUHVG8 OT36FQ1XDRES9ZA5WC'.split(''),
    [Cipher.C]: 'P0OIQ5WEA1 LSKDJ6F2HGRUY9T3ZM47BCN8XV'.split(''),
    [Cipher.D]: 'POI1UYTR4EWQ2LM3VZK8X56 N7J0SH9DBCGFA'.split(''),
    [Cipher.E]: 'ZAQ2XSW0 4C7DERTY95FG3HNBV6UJ8M1IPOLK'.split(''),
    [Cipher.F]: 'PL1MOK7I0UH3JNBY9V6GT2RFCX4DEQ85 SAZW'.split(''),
    [Cipher.G]: 'L9A1UJY4VH8 23N0X7CMZTBFD5OQGKRWI6ESP'.split(''),
    [Cipher.H]: '2FDBPZMXR9QECU35I7H1LYW4OKJV80NGAS6T '.split(''),
    [Cipher.I]: 'ZK7YISLU0X29J4FNGCP3VQB1H8E MTD5W6ROA'.split(''),
    [Cipher.J]: '6YO1Z80L9RJAWF 24T5QIGNSX3UPHBVKD7MCE'.split(''),
    [Cipher.K]: 'J17W8R6GQZCX9BI4EOY2PL5 SVMFNTA03HDUK'.split(''),
    [Cipher.L]: 'YGMLPTB32UFOZX1Q78CEW6HJD0K 9R4A5VINS'.split(''),
    [Cipher.M]: 'WQ63LP9D4NOXAHS I5G1JRV8UZT2C7FKYBE0M'.split(''),
    [Cipher.N]: 'A1XB3ZOHY7KJVQMIE2DSG9 4R0P68F5WULTCN'.split(''),
    [Cipher.O]: 'M Q5AI8W4NRFUHYZCVKG0B9P7XJ21D36LSTOE'.split(''),
    [Cipher.P]: 'YENW32PUV0FXB1RG97OAK6D4M8IHSZT5JQC L'.split(''),
    [Cipher.Q]: 'O3BYX7A4Q0I5NRPCT6J8LMG KH9WV1Z2SFDUE'.split('')
};

// Advanced Math Functions for MakeCode Arcade
enum singleNum {
    //% block="cube root"
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
    _FACTORIAL
}
// Statistical functions
// Enum to define the statistical operations
enum StatOperation {
    // Mean calculation
    //% block="mean"
    MEAN,
    // Median calculation
    //% block="median"
    MEDIAN,
    // Standard deviation calculation
    //% block="standard deviation"
    STANDARD_DEVIATION
}
// Enum to define the discrete math operations
enum DiscreteMathOperation {
    // log of any number
    //% block="logX"
    _LOGX,
    // GCD calculation
    //% block="greatest common divisor"
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
    _AVERAGE
}

/*
 *     //% name.shadow="ScriptNamesList"
 * 
 *     //% inlineInputMode=inline
 * 
 *     //% (add variable shadow here)
 * 
 */
//% color="#0074D9" 
//% block="Advanced"
//% subcategories='["Math","String","Logic","Scripts","Random","Performance Testing"]'
//% weight=12
//% advanced=false
namespace Advance {
    //% blockId=abv_num
    //% block="abriviate Number $num || with $len decimals"
    //% subcategory="String"
    //% color="#F5D547"
    //% weight=10
    //% num.delf=4245
    //% len.delf=2
    //% group="abriviate"
    export function abbreviateNumber(num: number, len?: number): string {
        if (!len) len = 1
        const length: number = Math.floor(Math.log(Math.abs(num)));
        const abbreviationIndex: number = Math.floor(length / 3);
        if (abbreviationIndex < abbreviations.length) {
            return Math.roundWithPrecision(num / Math.pow(10, abbreviationIndex * 3), len) + abbreviations[abbreviationIndex];
        }
        return num.toString();
    }
    /**
     * Converts a string to uppercase
     * @param value The string to convert
     * @returns The uppercase string
     */
    //% blockId=toUpperCase
    //% block="convert $value to uppercase"
    //% subcategory="String"
    //% color="#F5D547"
    //% weight=11
    //% value.defl="Hello, World!"
    export function toUpperCase(value: string): string {
        return value.toUpperCase();
    }
    /**
     * Converts a string to lowercase
     * @param value The string to convert
     * @returns The lowercase string
     */
    //% blockId=toLowerCase
    //% block="convert $value to lowercase"
    //% subcategory="String"
    //% color="#F5D547"
    //% weight=12
    //% value.defl="Hello, World!"
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
    //% block="check if $value starts with $substring"
    //% subcategory="String"
    //% color="#F5D547"
    //% weight=16
    //% value.defl="Hello, World!"
    //% substring.defl="Hello"
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
    //% block="check if $value ends with $substring"
    //% subcategory="String"
    //% color="#F5D547"
    //% weight=15
    //% value.defl="Hello, World!"
    //% substring.defl="World!"
    export function endsWith(value: string, substring: string): boolean {
        return value.indexOf(substring) === (value.length - substring.length);
    }
    //% blockId=getCurRandom
    //% block="Get Current Random Value"
    //% group="Random"
    //% subcategory="Random"
    //% weight=10
    //% color="#ff8135"
    export function GetCurrentRandom() {
        return __result
    }
    //% blockId=lerp
    //% block="lerp from $start to $end with $t \\%"
    //% start.delf=10
    //% end.delf=320
    //% t.delf=50
    //% subcategory="Math"
    //% weight=40
    //% color="#A55EEA"
    export function Lerp(start: number, end: number, t: number) {
        t/=100;
        // Clamps t to the range [0, 1]
        t = Math.max(0, Math.min(1, t));
        return start + t * (end - start);
    }
    //% subcategory="Math"
    //% blockId=PI
    //% block="PI"
    //% weight=39
    //% color="#A55EEA"
    export function PI() {
        return 3.141592
    }
    //% blockId=seed
    //% block="Get Seed"
    //% group="Random"
    //% subcategory="Random"
    //% weight=20
    //% color="#ff8135"
    export function getSeed() {
        return __seed
    }
    //% blockId=setSeed
    //% block="set seed to $e"
    //% e.delf=123456
    //% group="Random"
    //% subcategory="Random"
    //% weight=60
    //% color="#ff8135"
    export function setSeed(e: number) {
        __seed = e % 2**32
    }
    //% blockId=testRandom
    //% block="test random accuracy for $attempts attempts"
    //% attempts.delf=100
    //% group="Random"
    //% subcategory="Random"
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
    //% block="random"
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
    //% block="random integer min $e max $t"
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
    //% block=" $e \\% chance"
    //% subcategory="Random"
    //% weight=70
    //% color="#ff8135"
    export function chance(e: number = 50) {
        return (e /= 100), Advance.random() <= e;
    }
    /**
     * Registers a script with a given name and its enabled status.
     * @param name The name of the script to register.
     * @param script The script function to run.
     * @param enabled The status of the script (enabled or disabled).
     */
    //% blockId=registerScr
    //% block="register script $name, enabled $enabled"
    //% enabled.shadow="toggleOnOff"
    //% group="Scripts"
    //% name.shadow="ScriptNamesList"
    //% name.defl="foo"
    //% subcategory="Scripts"
    //% weight=100
    //% color="#1F2EFF"
    export function registerScript(name: string, enabled: boolean, script: () => void) {
        __scripts[name] = { func: script, enabled: enabled };
    }
    /**
     * Runs the script with the given name if it is enabled.
     * @param name The name of the script to run.
     */
    //% blockId=runScr
    //% block="run script $name"
    //% group="Scripts"
    //% name.shadow="ScriptNamesList"
    //% name.defl="foo"
    //% subcategory="Scripts"
    //% weight=90
    //% color="#1F2EFF"
    export function runScript(name: string) {
        let script = __scripts[name];
        if (script) {
            if (script.enabled) {
                script.func();
            } else {
                console.log(`Script "${name}" is disabled`);
            }
        } else {
            console.log(`Script with name "${name}" not found`);
        }
    }
    /**
     * Toggles the enabled status of the script with the given name.
     * @param name The name of the script to toggle.
     */
    //% blockId=toggleScr
    //% block="toggle script $name"
    //% group="Scripts"
    //% name.shadow="ScriptNamesList"
    //% name.defl="foo"
    //% subcategory="Scripts"
    //% weight=80
    //% color="#1F2EFF"
    export function toggleScript(name: string) {
        let script = __scripts[name];
        if (script) {
            script.enabled = !script.enabled;
            
            console.log(`Script "${name}" is now ${script.enabled ? 'enabled' : 'disabled'}`);
        } else {
            console.log(`Script with name "${name}" not found`);
        }
    }
    /**
     * Enables or disables the script with the given name.
     * @param name The name of the script to enable/disable.
     * @param enabled The new status of the script (enabled or disabled).
     */
    //% blockId=enableScr
    //% block="enable script $name to $enabled"
    //% enabled.shadow="toggleOnOff"
    //% group="Scripts"
    //% name.shadow="ScriptNamesList"
    //% name.defl="foo"
    //% subcategory="Scripts"
    //% weight=80
    //% color="#1F2EFF"
    export function enableScript(name: string, enabled: boolean) {
        let script = __scripts[name];
        if (script) {
            script.enabled = enabled;
            console.log(`Script "${name}" has been ${enabled ? 'enabled' : 'disabled'}`);
        } else {
            console.log(`Script with name "${name}" not found`);
        }
    }
    //% blockId=endTest
    //% block="end Performance test || with ID $id"
    //% group="Performance Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Performance Testing"
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
    //% block="start Performance test || with ID $id"
    //% group="Performance Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Performance Testing"
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
    //% blockId=pauerTest
    //% block="pause Performance test || with ID $id"
    //% group="Performance Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Performance Testing"
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
    //% block="resume Performance test || with ID $id"
    //% group="Performance Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Performance Testing"
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
    //% block="average time of Performance test || with ID $id"
    //% group="Performance Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Performance Testing"
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
    //% block="compare test with $id1 to test with $id2"
    //% group="Performance Testing"
    //% id1.shadow="PerformanceTesting"
    //% id1.delf="default"
    //% id2.shadow="PerformanceTesting"
    //% id2.delf="default"
    //% subcategory="Performance Testing"
    //% weight=50
    //% color="#249CA3"
    export function compareTests(id1: string, id2: string): number {
        const time1 = getTestResult(id1)
        const time2 = getTestResult(id2)
        if (time1 === -1 || time2 === -1) return -1
        return time1 - time2
    }
    //% blockId=resetTest
    //% block="reset time || with ID $id"
    //% group="Performance Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Performance Testing"
    //% weight=40
    //% color="#249CA3"
    export function resetTestTime(id?: string) {
        if (!id) id = "default"
        delete __testResults[id]
    }
    //% blockId=getTest
    //% block="get Performance test result || with ID $id"
    //% group="Performance Testing"
    //% id.shadow="PerformanceTesting"
    //% subcategory="Performance Testing"
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
    //% block="console logging enabled $enabled"
    //% group="Performance Testing"
    //% subcategory="Performance Testing"
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
                return Math.log(b)/Math.log(a)
            default:
                return NaN; // Invalid operation
        }
    }
    //% blockId=Ciphers
    //% block="ciphers $Cipher1|| $Cipher2 $Cipher3 $Cipher4 $Cipher5 $Cipher6 $Cipher7 $Cipher8"
    //% inlineInputMode=inline
    //% color="#F7EA44"
    //% subcategory="String"
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
    //% block="encode $str with $ciphersList"
    //% ciphersList.shadow=Ciphers
    //% str.delf="Hello, World!"
    //% subcategory="String"
    //% color="#F5D547"
    export function encode(str: string, ciphersList: Cipher[]): string {
        str = removeInvalidCharacters(str.toUpperCase());
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
    //% block="decode $encoded with $ciphersList"
    //% ciphersList.shadow=Ciphers
    //% encoded.delf="Hello, World!"
    //% subcategory="String"
    //% color="#F5D547"
    export function decode(encoded: string, ciphersList: Cipher[]): string {
        encoded = removeInvalidCharacters(encoded.toUpperCase());

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
                    decoded += char; // keep the character as is if not found in the cipher
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
    export function or(a:number,b:number): number {
        return a|b
    }
    //% blockId=AND
    //% block="AND $a $b"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=190
    export function and(a:number,b:number): number {
        return a&b
    }
    //% blockId=NOT
    //% block="NOT $a"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=180
    export function not(a:number): number {
        return ~a
    }
    //% blockId=bitShiftR
    //% block="$a >> $b"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=170
    export function bitShiftRight(a:number,b:number): number {
        return a >> b
    }
    //% blockId=bitShiftL
    //% block="$a << $b"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=160
    export function bitShiftLeft(a:number,b:number): number {
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
    //% block="is bit $bitIndex set in $a"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=120
    export function isBitSet(a: number, bitIndex: number): boolean {
        return (a & (1 << bitIndex)) !== 0;
    }
    //% blockId=SET_BIT
    //% block="set bit $bitIndex in $a to $b"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=110
    export function setBit(a: number, bitIndex: number, b: number): number {
        return (a & ~(1 << bitIndex)) | ((b & 1) << bitIndex);
    }
    //% blockId=COUNT_LEADING_ZEROS
    //% block="count leading zeros in $a"
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
    //% block="count trailing zeros in $a"
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
    //% block="reverse bits of $a"
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
    //% block="toggle bit $bitIndex in $a"
    //% group="bitwise"
    //% subcategory="Math"
    //% color="#A55EEA"
    //% weight=29
    export function toggleBit(a: number, bitIndex: number): number {
        return a ^ (1 << bitIndex);
    }
    //% blockId=HAMMING_DISTANCE
    //% block="calculate Hamming distance between $a and $b"
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
    //% block="break"
    //% subcategory="Logic"
    //% color="#45AAF2"
    export function Break() {
        __breakFlag = true;
    }
    //% blockId=defaultCase
    //% block="default case"
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
