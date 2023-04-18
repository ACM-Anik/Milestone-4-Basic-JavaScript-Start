function milesToKM(miles){
    const KM = miles * 1.609;
    return KM;
}
const recordedMiles = 300 ;
const recordedKM = milesToKM(recordedMiles);
console.log("Converted Kilometers:", recordedKM);