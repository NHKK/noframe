const SCRIPT = "script";
const HEAD = "head";
const BODY = "body";
const MASTER_PRODUCTS = {
  AD: {
    where: HEAD,
    type: SCRIPT,
    content: "console.log('AD loaded')"
  }, AL: {
    where: HEAD,
    type: SCRIPT,
    content: "console.log('AL loaded')"
  },
  CS: {
    where: HEAD,
    type: SCRIPT,
    content: "console.log('CS loaded')"
  },
  IT: {
    where: BODY,
    type: SCRIPT,
    content: "console.log('IT loaded')"
  }
}
function generateInstruction(product){
  let result = MASTER_PRODUCTS[product.toUpperCase()] || null;
  return result;
}

exports.generateInstruction = generateInstruction;
