// code your solution here
// code your solution here
function saturdayFun(activity='roller-skate') {
 
    return `This Saturday, I want to ${activity}!`;  
    }
    function mondayWork(activity='go to the office'){
       return `This Monday, I will ${activity}.`;
    }
    function wrapAdjective(wrap="*"){
       
       const  result=function(emphatic="a hard worker"){
       
         return `You are ${wrap}${emphatic}${wrap}!`; 
       }
       return result;
    }
     saturdayFun("bathe my dog");
     mondayWork("work ;