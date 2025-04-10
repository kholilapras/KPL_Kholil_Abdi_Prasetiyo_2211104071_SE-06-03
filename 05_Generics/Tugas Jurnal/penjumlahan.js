class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
      return a + b + c;
    }
  }
  
  const NIM = "2211104071";
  
  const angka1 = NIM.substring(0, 2);
  const angka2 = NIM.substring(2, 4);
  const angka3 = NIM.substring(4, 6);
  
  const akhir = parseInt(NIM[NIM.length - 1]);
  
  let input1, input2, input3;
  
  if (akhir === 1 || akhir === 2) {
    input1 = parseFloat(angka1);
    input2 = parseFloat(angka2);
    input3 = parseFloat(angka3);
  } else if ([3, 4, 5].includes(akhir)) {
    input1 = parseFloat(angka1);
    input2 = parseFloat(angka2);
    input3 = parseFloat(angka3);
  } else if ([6, 7, 8].includes(akhir)) {
    input1 = parseInt(angka1, 10);
    input2 = parseInt(angka2, 10);
    input3 = parseInt(angka3, 10);
  } else if (akhir === 9 || akhir === 0) {
    input1 = BigInt(angka1);
    input2 = BigInt(angka2);
    input3 = BigInt(angka3);
  }
  
  const hasil = Penjumlahan.JumlahTigaAngka(input1, input2, input3);
  
  console.log(`Hasil penjumlahan dari ${input1}, ${input2}, dan ${input3} adalah: ${hasil}`);  