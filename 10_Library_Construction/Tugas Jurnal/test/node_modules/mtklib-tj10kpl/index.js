function FPB(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function KPK(a, b) {
  return (a * b) / FPB(a, b);
}

function Turunan(persamaan) {
  const turunan = [];
  const n = persamaan.length - 1;
  for (let i = 0; i < n; i++) {
    const pangkat = n - i;
    const koef = persamaan[i];
    const hasil = koef * pangkat;
    if (hasil === 0) continue;
    let str = `${hasil}`;
    if (pangkat - 1 > 0) str += `x${pangkat - 1 > 1 ? `^${pangkat - 1}` : ""}`;
    turunan.push(str);
  }
  return turunan.join(" + ").replace(/\+ -/g, "- ");
}

function Integral(persamaan) {
  const hasil = [];
  const n = persamaan.length - 1;
  for (let i = 0; i <= n; i++) {
    const pangkat = n - i + 1;
    const koef = persamaan[i];
    const nilai = koef / pangkat;
    let str = `${nilai !== 1 ? nilai : ""}`;
    str += `x${pangkat > 1 ? `^${pangkat}` : ""}`;
    hasil.push(str);
  }
  hasil.push("C");
  return hasil.join(" + ").replace(/\+ -/g, "- ");
}

module.exports = { FPB, KPK, Turunan, Integral };
