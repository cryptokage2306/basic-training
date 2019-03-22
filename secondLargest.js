function secondLargest(array) {
    let v = [];
    v.length = 1000;
    for (let i = 0; i < v.length; i++) {
        v[i] = 0;
    }
    len = array.length;
    for (let i = 0; i < array.length; i++) {
        if (v[array[i]] == 1) {
            len = len - 1;
        } else {
            v[array[i]] = 1;
        }
    }
    let i = 0,
        count = 0;
    while (count < len - 1) {
        if (v[i] == 1) {
            count = count + 1;
        }
        i++;
    }
    return i - 1;
}

