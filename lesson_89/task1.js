let task1 = document.querySelector('.task1');

for (let li of task1.querySelectorAll('li')) {
  let title = li.firstChild.data;

  title = title.trim();

  let count = li.getElementsByTagName('li').length;

  alert(title + ": " + count);
}