// https://www.npmjs.com/package/bcharts
window.addEventListener("load", () => {
    let lineCharts = document.querySelectorAll(".chart__line");
  
    lineCharts.forEach((canvas, index) => {
      let dataLength = 9,
        chart = new bChart.Plot({
          data: {
            labels: (() => {
              let array = [];
              for (let i = 0; i <= 3; i++) {
                array.push("Label " + parseInt(i + 1));
              }
              return array;
            })(),
            datasets: [
              {
                name: "Some bar data 1",
                type: "bar",
                values: (() => {
                  let array = [];
                  for (let i = 0; i <= dataLength; i++) {
                    array.push(Math.random() * (Math.random() > 0.5 ? 1 : -1));
                  }
                  return array;
                })()
              },
              {
                name: "Some bar data 2",
                type: "bar",
                values: (() => {
                  let array = [];
                  for (let i = 0; i <= dataLength; i++) {
                    array.push(Math.random() * (Math.random() > 0.5 ? 1 : -1));
                  }
                  return array;
                })()
              },
              {
                name: "Some line data line",
                type: "line",
                values: (() => {
                  let array = [];
                  for (let i = 0; i <= dataLength; i++) {
                    array.push(Math.random() * (Math.random() > 0.5 ? 1 : -1));
                  }
                  return array;
                })()
              },
              {
                name: "Some smooth line data line",
                type: "line",
                smooth: true,
                values: (() => {
                  let array = [];
                  for (let i = 0; i <= dataLength; i++) {
                    array.push(Math.random() * (Math.random() > 0.5 ? 1 : -1));
                  }
                  return array;
                })()
              }
            ]
          },
          canvas
        });
    });
  
    let donutCharts = document.querySelectorAll(".chart__donut");
    donutCharts.forEach((canvas, index) => {
      let chart = new bChart.Donut({
        canvas,
        settings: {
          texts: {
            slicePercent: {
              enable: true
            }
          }
        },
        data: (() => {
          let result = [];
          for (let i = 0; i <= Math.random() * 10; i++) {
            result.push({
              value: Math.random().toFixed(2),
              label: "Label " + i
            });
          }
          return result;
        })()
      });
    });
  
    let pieCharts = document.querySelectorAll(".chart__pie");
    pieCharts.forEach((canvas, index) => {
      let chart = new bChart.Pie({
        canvas,
        settings: {
          texts: {
            slicePercent: {
              enable: true
            }
          }
        },
        data: (() => {
          let result = [];
          for (let i = 0; i <= Math.random() * 10; i++) {
            result.push({
              value: Math.random().toFixed(2),
              label: "Label " + i
            });
          }
          return result;
        })()
      });
    });
  
    let radarCharts = document.querySelectorAll(".chart__radar");
    radarCharts.forEach((canvas, index) => {
      let dataCount = 6,
        data = {
          labels: new Array(dataCount).fill().map((item, index) => {
            return "Label " + index;
          }),
          datasets: new Array(2).fill().map((item, index) => {
            return {
              name: "Dataset " + index,
              values: new Array(dataCount).fill().map((item, index) => {
                return Math.ceil(Math.random() * 10);
              })
            };
          })
        },
        chart = new bChart.Radar({
          canvas,
          data
        });
    });
  });
  