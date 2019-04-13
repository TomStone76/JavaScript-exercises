function bbqSkewers(grill) {
    let nonVeg = [], veg =[], res = [];
    for (let i = 0; i < grill.length; i++) {
        grill[i].includes('x') ? 
        nonVeg.push(grill[i])
        : veg.push(grill[i]);
    }
    res.push(veg.length); res.push(nonVeg.length);
    return res;
}