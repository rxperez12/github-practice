/** Is size a valid integer 2-50? */

function validateEdge(size) {
  return (Number.isInteger(size) &&
      size >= 2 &&
      size <= 50);
}


/** Calculate area of triangle with sides `a` and `b` */

function calcArea(a, b) {
  return a * b / 2;
}


/** Calculate hypotenuse: h = sqrt(a^2 * b^2); return rounded result */

function calcHypotenuse(a, b) {
  const hypot = Math.sqrt(a * a + b * b);
  return Math.round(hypot);
}


/** Return result msg */

function getHypotenuseAndAreaMsg(hypot, area) {
  let msg = `Hypotenuse is ${hypot} and area is ${area}.`;
  if (area > 50) {
    msg += ` That's a really big triangle!`;
  }
  return msg;
}


/** Get results: validate, calculate & get message.
 * returns {aMsg, bMsg, msg}
 *
 * aMsg and bMsg are empty if triangle is valid.
 */

function getResultsFromSideLengths(a, b) {
  const aOk = validateEdge(a);
  const bOk = validateEdge(b);

  const aMsg = aOk ? "" : "Invalid!";
  const bMsg = bOk ? "" : "Invalid!";

  let msg;

  if (aOk && bOk) {
    const area = calcArea(a, b);
    const hypot = calcHypotenuse(a, b);
    msg = getHypotenuseAndAreaMsg(hypot, area);
  } else {
    msg = "";
  }

  return {aMsg, bMsg, msg}
}


/** Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  const a = +document.getElementById("side-a").value;
  const b = +document.getElementById("side-b").value;

  const res = getResultsFromSideLengths(a, b);

  document.getElementById("a-msg").innerHTML = res.aMsg;
  document.getElementById("b-msg").innerHTML = res.bMsg;
  document.getElementById("msg").innerHTML = res.msg;
}

export {
  validateEdge,
  calcArea,
  calcHypotenuse,
  getHypotenuseAndAreaMsg,
  getResultsFromSideLengths,
  processForm
};