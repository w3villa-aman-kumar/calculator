const digitBtn = document.getElementsByClassName('digit-btn')

for (let i=0; i<digitBtn.length; i++) {
    digitBtn[i].addEventListener('click',function () {
        displayDom(this.innerText)
    })
}

let expr = ''

function displayDom (val) {
    const output = document.getElementById('display')

    expr += val

    if (val == 'Ac') {
        expr = ''
        output.innerHTML = 0 ;
    }
    else if (val == '=') {
        expr = expr.slice(0,-1)
        let res = eval(expr)
        if (res)
            output.innerHTML = res ;
        else
            output.innerHTML = '0'
        expr = ''
    } else {
        output.innerHTML = expr ;
    }

}




// //method to return precedence
// function precedence (character) {
//     if(character == '/' || character == '*')
//         return 2;
//     else if(character == '+' || character == '-')
//         return 1;
//     else
//         return -1;
// }



// function infixToPostfix (input) {
//     let st = []; //For stack operations, we are using JavaScript built in stack
//     let result = "";

//     for(let i = 0; i < input.length; i++) {
//         let c = input[i];

        
//         if((c >= '0' && c <= '9'))
//             result += c;

        
//         else if(c == '(')
//             st.push('(');

        
//         else if(c == ')') {
//             while(st[st.length - 1] != '(')
//             {
//                 result += st[st.length - 1];
//                 st.pop();
//             }
//             st.pop();
//         }

        
//         else {
//             while(st.length != 0 && precedence(input[i]) <= precedence(st[st.length - 1])) {
//                 result += st[st.length - 1];
//                 st.pop(); 
//             }
//             st.push(c);
//         }
//     }

//     while(st.length != 0) {
//         result += st[st.length - 1];
//         st.pop();
//     }

//     result = evaluatePostfix(result)
//     return result
// }


// // Method to evaluate value of a postfix expression
// function evaluatePostfix(exp)
// {
//     //create a stack
//         let stack=[];
          
//         for(let i=0;i<exp.length;i++)
//         {
//             let c=exp[i];
              
//             if(! isNaN( parseInt(c) ))
//             stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
              
//             else
//             {
//                 let val1 = stack.pop();
//                 let val2 = stack.pop();
                  
//                 switch(c)
//                 {
//                     case '+':
//                     stack.push(val2+val1);
//                     break;
                      
//                     case '-':
//                     stack.push(val2- val1);
//                     break;
                      
//                     case '/':
//                     stack.push(val2/val1);
//                     break;
                      
//                     case '*':
//                     stack.push(val2*val1);
//                     break;
//               }
//             }
//         }
//         return stack.pop();  
// }