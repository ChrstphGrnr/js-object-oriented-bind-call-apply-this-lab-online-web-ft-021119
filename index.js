//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  let result = fn.call(thisValue, arg);
  return result;
}

function setThisWithApply(fn, thisValue, args) {
  let result = fn.apply(thisValue, args);
  return result;
}

function returnNewFunctionOf(functionToBeCopied, )
