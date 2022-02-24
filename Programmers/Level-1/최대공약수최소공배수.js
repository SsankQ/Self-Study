function solution(n, m) {
    const GCD = (n, m) => n % m === 0 ? m : GCD(m, n % m);
    const LCM = (n, m) => n * m / GCD(n, m);
    
    return [GCD(n, m), LCM(n, m)];
}

let output = solution(2, 5);
console.log(`주어진 두 수의 최대공약수 및 최소공배수는 각각 ${output}입니다`);