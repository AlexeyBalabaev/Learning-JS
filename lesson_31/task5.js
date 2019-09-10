"use sctrict";

// Variant 1
{
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }

    alert(list.value);
  }

  printReverseList(list);
}

// Variant 2
{
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printReverseList(list) {
    let tmp = list;
    let arr = [];

    while(tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] );
    }
  }

  printReverseList(list);
}