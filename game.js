// 初始化棋盘
const board = document.getElementById('board');
const diceResult = document.getElementById('diceResult');

// 定义棋盘格子的效果（可以自定义）
const cells = [
  '起点', '任务1', '任务2', '任务3', '任务4', 
  '任务5', '任务6', '任务7', '任务8', '任务9',
  '任务10', '任务11', '任务12', '任务13', '任务14',
  '任务15', '任务16', '任务17', '任务18', '任务19',
  '任务20', '任务21', '任务22', '任务23', '任务24',
  '任务25', '任务26', '任务27', '任务28', '任务29',
  '任务30', '任务31', '任务32', '任务33', '任务34',
  '任务35', '任务36', '任务37', '任务38', '任务39',
  '任务40', '任务41', '任务42', '任务43', '任务44',
  '任务45', '任务46', '任务47', '任务48', '任务49',
  '终点'
];

// 创建棋盘格子
function createBoard() {
  board.innerHTML = '';
  cells.forEach((cellText, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = cellText;
    board.appendChild(cell);

    // 这里可以根据格子的索引设置不同的效果
    if (index === 10) {
      cell.style.backgroundColor = 'lightgreen'; // 任务1格子
    }
  });
}

// 投掷骰子
function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceResult.textContent = dice;
  // 根据骰子结果更新棋盘上的位置，游戏逻辑可以在这里扩展
  console.log(`你投掷的点数是: ${dice}`);
}

// 初始化棋盘
createBoard();
