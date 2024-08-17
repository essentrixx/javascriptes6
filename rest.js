// Rest Operator      // not widely use

function add(nums) {
    
    console.log(arguments);   // arguments is softing deprecated rest operators.
}

add(4, 5, 7, 8, 12);   //   {0: 4, 1: 5, 2: 7, 3: 8, 4: 12}
// index number softing pee answer ya



function add(...nums) {
    
    console.log(nums);
}

add(4, 5, 7, 8, 12);  // 4 5 7 8 12     //value input ma remember yin use tr