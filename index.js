
function superbowlWin(array) {
    const aWin = (array) => array.result === 'W';
    let win = array.find(aWin);
    if(win)
    {
      return win.year
    }
    else
    {
      return undefined;
    }
}
    