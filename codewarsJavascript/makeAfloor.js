

  function towerBuilder(n) {
    var tower = [];
    for (var i = 0; i < n; i++) {
    tower.push(" ".repeat(n - i - 1)
    + "*".repeat((i * 2)+ 1)
    + " ".repeat(n - i - 1))
    }
    return tower;
    }
    console.log(towerBuilder(3));