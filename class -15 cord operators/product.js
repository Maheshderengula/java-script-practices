let product={pid:101,pname:"Mp",price:30}
let user={}
console.log(product.length) //undefined.
console.log(Object.keys(product)) //[ 'pid', 'pname', 'price' ].
console.log(Object.keys(product).length) //3
console.log(Object.keys(product).length>0) //true

Object.keys(product).length>0?console.log('Not Empty')
                              :console.log("Empty")