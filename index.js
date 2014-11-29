var parse = require("semversionizer-parser");

function compareVal(a, b, limit) {
  if(a === undefined && b !== undefined) {
    return -limit;
  } else if(b === undefined && a !== undefined) {
    return limit;
  } else if(typeof(a) === "string" && typeof(b) === "number") {
    return limit;
  } else if(typeof(a) === "number" && typeof(b) === "string") {
    return -limit;
  } else if(a < b) {
    return -limit;
  } else if (a > b) {
    return limit;
  } else {
    return 0;
  }
}

function compareVals(oa, ob, limit) {
  var a = oa.shift();
  var b = ob.shift();

  var rslt = compareVal(a, b, limit);

  if(rslt == 0 && (oa.length > 0 || ob.length > 0)) {
    // If we match move onto the next in the list.
    return compareVals(oa, ob, limit);
  } else {
    return rslt;
  }
}

module.exports = function(oa,ob,loose) {
  var comp;
  var a = parse(oa,loose);
  var b = parse(ob,loose);

  comp  = compareVal(a.major, b.major, 10000);
  comp += compareVal(a.minor, b.minor, 1000);
  comp += compareVal(a.patch, b.patch, 100);

  // Version without prerelease should always take precidence
  if(a.prerelease.length < 1 && b.prerelease.length > 0) {
    comp += 10
  } else if(b.prerelease.length < 1 && a.prerelease.length > 0) {
    comp -= 10
  } else {
    comp += compareVals(a.prerelease, b.prerelease, 10);
  }

  if(comp < 0) {
    return -1;
  } else if (comp > 0) {
    return 1;
  }
  return 0;
}
