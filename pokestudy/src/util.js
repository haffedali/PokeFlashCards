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
    let colorWidth = [];
    switch (statName) {
      case "hp":
        if (stat <= 55) {
          colorWidth[0] = "red";
          colorWidth[1] = '15%';
        } else if (stat > 55 && stat <= 85) {
          colorWidth[0] = "yellow";
          colorWidth[1] = '30%';
        } else if (stat > 86 && stat <= 120) {
          colorWidth[0] = "green";
          colorWidth[1] = '55%';
        } else if (stat > 120 && stat <= 140) {
          colorWidth[0] = "blue";
          colorWidth[1] = '80%';
        } else if (stat > 140) {
          colorWidth[0] = "purple";
          colorWidth[1] = '100%';
        }
        break;
      case "attack":
        if (stat <= 55) {
          colorWidth[0] = "red";
          colorWidth[1] = '15%';
        } else if (stat > 55 && stat <= 85) {
          colorWidth[0] = "yellow";
          colorWidth[1] = '30%';
        } else if (stat > 86 && stat <= 120) {
          colorWidth[0] = "green";
          colorWidth[1] = '55%';
        } else if (stat > 120 && stat <= 140) {
          colorWidth[0] = "blue";
          colorWidth[1] = '80%';
        } else if (stat > 140) {
          colorWidth[0] = "purple";
          colorWidth[1] = '100%';
        }
        break;
      case "defense":
        if (stat <= 55) {
          colorWidth[0] = "red";
          colorWidth[1] = '15%';
        } else if (stat > 55 && stat <= 85) {
          colorWidth[0] = "yellow";
          colorWidth[1] = '30%';
        } else if (stat > 86 && stat <= 120) {
          colorWidth[0] = "green";
          colorWidth[1] = '55%';
        } else if (stat > 120 && stat <= 140) {
          colorWidth[0] = "blue";
          colorWidth[1] = '80%';
        } else if (stat > 140) {
          colorWidth[0] = "purple";
          colorWidth[1] = '100%';
        }
        break;
      case "special-attack":
        if (stat <= 55) {
          colorWidth[0] = "red";
          colorWidth[1] = '15%';
        } else if (stat > 55 && stat <= 85) {
          colorWidth[0] = "yellow";
          colorWidth[1] = '30%';
        } else if (stat > 86 && stat <= 120) {
          colorWidth[0] = "green";
          colorWidth[1] = '55%';
        } else if (stat > 120 && stat <= 140) {
          colorWidth[0] = "blue";
          colorWidth[1] = '80%';
        } else if (stat > 140) {
          colorWidth[0] = "purple";
          colorWidth[1] = '100%';
        }
        break;
      case "special-defense":
        if (stat <= 55) {
          colorWidth[0] = "red";
          colorWidth[1] = '15%';
        } else if (stat > 55 && stat <= 85) {
          colorWidth[0] = "yellow";
          colorWidth[1] = '30%';
        } else if (stat > 86 && stat <= 120) {
          colorWidth[0] = "green";
          colorWidth[1] = '55%';
        } else if (stat > 120 && stat <= 140) {
          colorWidth[0] = "blue";
          colorWidth[1] = '80%';
        } else if (stat > 140) {
          colorWidth[0] = "purple";
          colorWidth[1] = '100%';
        }
        break;
      case "speed":
        if (stat <= 55) {
          colorWidth[0] = "red";
          colorWidth[1] = '15%';
        } else if (stat > 55 && stat <= 85) {
          colorWidth[0] = "yellow";
          colorWidth[1] = '30%';
        } else if (stat > 86 && stat <= 120) {
          colorWidth[0] = "green";
          colorWidth[1] = '55%';
        } else if (stat > 120 && stat <= 140) {
          colorWidth[0] = "blue";
          colorWidth[1] = '80%';
        } else if (stat > 140) {
          colorWidth[0] = "purple";
          colorWidth[1] = '100%';
        }
        break;
      default:
        break;
    }
    return colorWidth;
  },
};

export default utils;
