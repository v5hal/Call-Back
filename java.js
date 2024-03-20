let count = 10;
const countdownElement = document.getElementById('countdown');

setTimeout(()=>{
  countdownElement.textContent = count;
  console.log(count);
setTimeout(() => {
  count = count - 1;
  countdownElement.textContent = count;
  console.log(count);
  setTimeout(() => {
    count = count - 1;
    countdownElement.textContent = count;
    console.log(count);
    setTimeout(() => {
      count = count - 1;
      countdownElement.textContent = count;
      console.log(count);
      setTimeout(() => {
        count = count - 1;
        countdownElement.textContent = count;
        console.log(count);
        setTimeout(() => {
          count = count - 1;
          countdownElement.textContent = count;
          console.log(count);
          setTimeout(() => {
            count = count - 1;
            countdownElement.textContent = count;
            console.log(count);
            setTimeout(() => {
              count = count - 1;
              countdownElement.textContent = count;
              console.log(count);
              setTimeout(() => {
                count = count - 1;
                countdownElement.textContent = count;
                console.log(count);
                setTimeout(() => {
                  count = count-1;
                  countdownElement.textContent = count;
                  console.log(count);
                  setTimeout(() => {
                    count = "happy independence day";
                    countdownElement.textContent = count;
                    console.log(count);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
},1000);