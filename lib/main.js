
function main(str) {
    let lon = str.split("");
    let res = "";
    if(lon[0]==="|")
    {
        res = trans(str);
    }
    else if(parseInt(lon[0])>=0)
    {
        res = one(str);
    }
    return res;
}
function one(str) {

    let result = "|";
    let reg = /-/g;
    let long = str.replace(reg, "").split("");
    let sum= 0 ;
    if (long.length >= 5) {
        for (let i = 0; i < long.length; i++) {
            long[i] = parseInt(long[i]);
            sum += long[i];
            switch (long[i]) {
                case 1:
                    result += ":::||";
                    break;
                case 2:
                    result += "::|:|";
                    break;
                case 3:
                    result += "::||:";
                    break;
                case 4:
                    result += ":|::|";
                    break;
                case 5:
                    result += ":|:|:";
                    break;
                case 6:
                    result += ":||::";
                    break;
                case 7:
                    result += "|:::|";
                    break;
                case 8:
                    result += "|::|:";
                    break;
                case 9:
                    result += "|:|::";
                    break;
                case 0:
                    result += "||:::";
                    break;
                default:
                    break;
            }
        }
    }
    if(sum>0)
    {
        switch(10-sum%10)
        {
            case 1:
                result += ":::||";
                break;
            case 2:
                result += "::|:|";
                break;
            case 3:
                result += "::||:";
                break;
            case 4:
                result += ":|::|";
                break;
            case 5:
                result += ":|:|:";
                break;
            case 6:
                result += ":||::";
                break;
            case 7:
                result += "|:::|";
                break;
            case 8:
                result += "|::|:";
                break;
            case 9:
                result += "|:|::";
                break;
            case 0:
                result += "||:::";
                break;
            default:
                break;

        }
    }


    result+="|";

    return result;
    
}

function trans(str){
        let result ="";
        let stri="";
        let k = 1;
        let st=str.split("");
        if(str.length===32)
        {
                while(k<26) {
                    for (let i = k; i < k+5;i++) {
                        stri += st[i];
                    }

                    switch(stri)
                    {
                        case ':::||':
                            result += "1";
                            break;
                        case '::|:|':
                            result += "2";
                            break;
                        case '::||:':
                            result += "3";
                            break;
                        case ':|::|':
                            result += "4";
                            break;
                        case ':|:|:':
                            result += "5";
                            break;
                        case ':||::':
                            result += "6";
                            break;
                        case '|:::|':
                            result += "7";
                            break;
                        case '|::|:':
                            result += "8";
                            break;
                        case '|:|::':
                            result += "9";
                            break;
                        case '||:::':
                            result += "0";
                            break;
                        default:
                            break;

                    }
                    k=k+5;
                    stri = "";
                }

        }

        if(str.length===52)
        {
            while(k<26) {
                for (let i = k; i < k+5;i++) {
                    stri += st[i];
                }

                switch(stri)
                {
                    case ':::||':
                        result += "1";
                        break;
                    case '::|:|':
                        result += "2";
                        break;
                    case '::||:':
                        result += "3";
                        break;
                    case ':|::|':
                        result += "4";
                        break;
                    case ':|:|:':
                        result += "5";
                        break;
                    case ':||::':
                        result += "6";
                        break;
                    case '|:::|':
                        result += "7";
                        break;
                    case '|::|:':
                        result += "8";
                        break;
                    case '|:|::':
                        result += "9";
                        break;
                    case '||:::':
                        result += "0";
                        break;
                    default:
                        break;

                }
                k=k+5;
                stri = "";
            }
            result+="-";
            while(k<46) {
                for (let i = k; i < k+5;i++) {
                    stri += st[i];
                }

                switch(stri)
                {
                    case ':::||':
                        result += "1";
                        break;
                    case '::|:|':
                        result += "2";
                        break;
                    case '::||:':
                        result += "3";
                        break;
                    case ':|::|':
                        result += "4";
                        break;
                    case ':|:|:':
                        result += "5";
                        break;
                    case ':||::':
                        result += "6";
                        break;
                    case '|:::|':
                        result += "7";
                        break;
                    case '|::|:':
                        result += "8";
                        break;
                    case '|:|::':
                        result += "9";
                        break;
                    case '||:::':
                        result += "0";
                        break;
                    default:
                        break;

                }
                k=k+5;
                stri = "";
            }

        }
        return result;

}

module.exports = main;
