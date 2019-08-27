"use sctrict";

{
  let user = {
    name: 'Jhon',
    sizes: {
      height: 182,
      width: 50,
    },
    w: 22,
  };

  let clone = {};

  for (let key in user) {
    if (typeof key === 'object') {
      key = Object.assign({}, key);
    }

    clone[key] = user[key];
  }

  alert( user.sizes === clone.sizes );   // true

  user.sizes.width++;
  user.w++;
  alert(clone.sizes.width);    // 50
  alert(clone.w);              // 22
}