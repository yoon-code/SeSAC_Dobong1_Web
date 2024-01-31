// 모듈 만들기 export 이용
// 한번에 내보내기


const flowers = ['rose', 'sunflower', 'tulip'];

function gatFlowers(idx) {
    if (idx >= flowers.length || idx < 0) return 'x'
    return flowers[idx];
}

// export{flowers, gatFlowers}
export { flowers as flr, gatFlowers as getFlr }
// as사용해서 별칭으로도 내보낼 수 있음