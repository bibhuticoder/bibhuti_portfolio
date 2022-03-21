---
title: Round to nearest 100
excerpt: Rounds integer/float to nearest 100 (floor + ceil)
createdAt: 2022-03-21
tags: Postman
---

### Round to nearest 100

Note: It uses both ceiling and floor.

```javascript
const roundToNear100 = (value) => {
    if (value <= 100) return value;
    let decider = value % 100;
    let roundFunc = (decider < 50) ? Math.floor : Math.ceil;
    return roundFunc(value / 100) * 100;
}
```