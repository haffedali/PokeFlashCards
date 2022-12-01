const utils = {
  /**
   * Returns color and width for DraggableAnswer
   *
   * @typedef {}
   * @param {string} statName - Name of the stat
   * @param {int} stat - Value of the stat
   * @returns {[string, int]} - Color and width percentage
   */
  generateStatRowColorAndFill: (statName, stat) => {
    let perentage = ((100*stat) / 160) * 5
    let colorWidth = [,perentage];
    switch (statName) {
      case "hp":
        if (stat <= 50) {
          colorWidth[0] = "red";
          //colorWidth[1] = '15%';
        } else if (stat > 50 && stat <= 85) {
          colorWidth[0] = "yellow";
          //colorWidth[1] = '30%';
        } else if (stat > 86 && stat <= 120) {
          colorWidth[0] = "green";
          //colorWidth[1] = '55%';
        } else if (stat > 120 && stat <= 140) {
          colorWidth[0] = "blue";
          //colorWidth[1] = '80%';
        } else if (stat > 140) {
          colorWidth[0] = "purple";
          //colorWidth[1] = '100%';
        }
        break;
      case "attack":
        if (stat <= 50) {
          colorWidth[0] = "red";
          //colorWidth[1] = '15%';
        } else if (stat > 50 && stat <= 85) {
          colorWidth[0] = "yellow";
          //colorWidth[1] = '30%';
        } else if (stat > 86 && stat <= 120) {
          colorWidth[0] = "green";
          //colorWidth[1] = '55%';
        } else if (stat > 120 && stat <= 140) {
          colorWidth[0] = "blue";
          //colorWidth[1] = '80%';
        } else if (stat > 140) {
          colorWidth[0] = "purple";
          //colorWidth[1] = '100%';
        }
        break;
      case "defense":
        if (stat <= 50) {
          colorWidth[0] = "red";
          //colorWidth[1] = '15%';
        } else if (stat > 50 && stat <= 85) {
          colorWidth[0] = "yellow";
          //colorWidth[1] = '30%';
        } else if (stat > 86 && stat <= 120) {
          colorWidth[0] = "green";
          //colorWidth[1] = '55%';
        } else if (stat > 120 && stat <= 140) {
          colorWidth[0] = "blue";
          //colorWidth[1] = '80%';
        } else if (stat > 140) {
          colorWidth[0] = "purple";
          //colorWidth[1] = '100%';
        }
        break;
      case "special-attack":
        if (stat <= 50) {
          colorWidth[0] = "red";
          //colorWidth[1] = '15%';
        } else if (stat > 50 && stat <= 85) {
          colorWidth[0] = "yellow";
          //colorWidth[1] = '30%';
        } else if (stat > 86 && stat <= 120) {
          colorWidth[0] = "green";
          //colorWidth[1] = '55%';
        } else if (stat > 120 && stat <= 140) {
          colorWidth[0] = "blue";
          //colorWidth[1] = '80%';
        } else if (stat > 140) {
          colorWidth[0] = "purple";
          //colorWidth[1] = '100%';
        }
        break;
      case "special-defense":
        if (stat <= 50) {
          colorWidth[0] = "red";
          //colorWidth[1] = '15%';
        } else if (stat > 50 && stat <= 85) {
          colorWidth[0] = "yellow";
          //colorWidth[1] = '30%';
        } else if (stat > 86 && stat <= 120) {
          colorWidth[0] = "green";
          //colorWidth[1] = '55%';
        } else if (stat > 120 && stat <= 140) {
          colorWidth[0] = "blue";
          //colorWidth[1] = '80%';
        } else if (stat > 140) {
          colorWidth[0] = "purple";
          //colorWidth[1] = '100%';
        }
        break;
      case "speed":
        if (stat <= 50) {
          colorWidth[0] = "red";
          //colorWidth[1] = '15%';
        } else if (stat > 50 && stat <= 85) {
          colorWidth[0] = "yellow";
          //colorWidth[1] = '30%';
        } else if (stat > 86 && stat <= 120) {
          colorWidth[0] = "green";
          //colorWidth[1] = '55%';
        } else if (stat > 120 && stat <= 140) {
          colorWidth[0] = "blue";
          //colorWidth[1] = '80%';
        } else if (stat > 140) {
          colorWidth[0] = "purple";
          //colorWidth[1] = '100%';
        }
        break;
      default:
        break;
    }
    return colorWidth;
  },


  randomizedStats: (statArray) => {
    function shuffle(array) {
      let newArray = [...array]
      for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      // console.log(newArray)
      return newArray
    }
    const returnArray = shuffle(statArray);
    // console.log(returnArray)
    return returnArray
  },


  checkAnswerArray: (array, targetArray) => {
    let compArray = []
    let targetCompArray = []
    for (let i=0;i<array.length;i++){
      compArray.push(array[i]["base_stat"]);
      targetCompArray.push(targetArray[i]["base_stat"]);
    }
    console.log(compArray)
    console.log(targetCompArray)
    return compArray.toString() === targetCompArray.toString();
  }
};

export default utils;
