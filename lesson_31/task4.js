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

  function printList(list) {

    alert( list.value );

    if (list.next) {
      printList(list.next);
    }
  }

  printList(list);
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

  function printList(list) {
    let tmp = list;

    while (tmp) {
      alert(tmp.value);
      tmp = tmp.next;
    }

  }

  printList(list)
}