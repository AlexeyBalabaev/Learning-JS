"use strict";

{
  function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
  }

  // Example of using
  loadScript('/my/script.js');

  // newFunction();   -- error, this function doesn't exist
}

/* ----- */
{
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
  }

  loadScript('/my/script.js', function() {
    newFunction();
  })
}

/* ----- */
{
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }

  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Nice, script ${script.src} is upload`);
    alert( _ );   // function, declared in loaded script
  })
}

/* ----- */
{
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.anerror = () => callback(new Error(`Failed to load script ${src}`));

    document.head.append(script);
  }

  loadScript('/my/script.js', function(error, script) {
    if (error) {
      // process the error
    } else {
      // script loaded successfully
    }
  })
}