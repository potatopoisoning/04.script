function DoCal() 
{
    let a = 0;
    let b = 0;
    let result = 0;
    let op = "";
    // [1] : 프롬프트로 숫자 두개와 연산자를 입력
    a = parseInt(prompt("숫자 a를 입력하세요."));
    b = parseInt(prompt("숫자 b를 입력하세요."));
    // [2] : 숫자가 아닌 경우 메세지 출력 후 함수 종료
    if(isNaN(a) || isNaN(b))
    {
        alert("숫자가 아닙니다");
        return; // 아무것도 반환하지 않고, 함수를 종료
    }
    op = prompt("연산자를 입력하세요. [+,-,*,/]")

    // [3] : 연산자에 따라 계산을 수행하고, 만약에 연산자가 올바르지 않으면 메세지 출력 후 함수 종료
    switch(op)
    {
        case "+" : 
            result = a + b;
            break; 
        case "-" : 
            result = a - b;
            break; 
        case "*" : 
            result = a * b;
            break; 
        case "/" : 
            if(b == 0)
            {
                alert("0으로 나눌 수 없습니다.");
                break; 
            }else
            {
                result = a / b;
                break; 
            }
        default : 
            console.log("연산자가 올바르지 않습니다.");
            return;
    }
    // [4] : 계산 결과를 반환
    return "입력한 식 : " + a + " " + op + " " + b + " = " + result;
}
