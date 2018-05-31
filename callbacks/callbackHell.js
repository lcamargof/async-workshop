// HERMOSO!
function doStuff(cb) {
  processStuff(null, function(resultA) {
    processStuff(resultA, function(resultB) {
      setTimeout(function processStuffLater() {
        if (!resultB) {
          return 'error';
        } else {
          processStuff(resultB, function(resultC) {
            if (!resultC) return 'error';

            if (resultC === 'a') {
              processStuff(resultC, function(resultD) {
                setTimeout(function anotherTimeout() {
                  console.log('yes');
                  return cb(resultD); // Finish
                }, 1000);
              })
            } else {
              return cb(resultC); // finish
            }
          })
        }
      }, 1000)
    })
  })
}