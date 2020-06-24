rate = {
  fixed: 50,
  minKm: 5,
  perKm: 10,
  freemin: 15,
  perMin: 2,
};

function calcfare(km, min) {
  let fare = rate.fixed;
  fare += (km > rate.minKm) ? (km - 5) * rate.perKm : 0;
  fare += (min > rate.freemin) ? (min - 5) * rate.perMin : 0;
  return fare;
}

exports = module.exports = { rate, calcfare }
