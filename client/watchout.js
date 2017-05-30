// start slingin' some d3 here.
const gameOptions = {
  height: 450,
  width: 700,
  nEnemies: 30,
  padding: 20
};

// const axes = {
//   x: d3.scale.linear().domain([0,100]).range([0,700]),
//   y: d3.scale.linear().domain([0,100]).range([0,450])
// };

// var gameBoard = d3.select('.container').append('svg:svg')
//   .attr('width', 700)
//   .attr('height', 450);


  // .data(data)
  // .enter().append('circle')
  //   .attr('cx', 300)
  //   .attr('cy', 300)
  //   .attr('class', 'enemy');


const createEnemies = function() {
  var allEnemies = [];
  for (var i = 0; i < gameOptions.nEnemies; i++) {
    var anEnemy = {
      'id': i,
      'x': Math.random() * gameOptions.width,
      'y': Math.random() * gameOptions.height
    };
    allEnemies.push(anEnemy);
  }
  return allEnemies;
};
var allEnemies = createEnemies();

var initiateEnemies = function(allEnemies) {
  d3.select('.container').selectAll('.container').data(allEnemies).enter().append('circle')
                                                                          .attr('class', 'enemy')
                                                                          .attr('cx', (enemy) => enemy.x)
                                                                          .attr('cy', (enemy) => enemy.y)
                                                                          .attr('r', 10);
};

initiateEnemies(allEnemies);















// const renderEnemies = function(enemyData) {
//   var enemies = gameBoard.selectAll('circle .enemy')
//                   .data(enemyData, (d) => d.id);
  
//   enemies.enter()
//     .append('svg:circle')
//       .attr('class', 'enemy')
//       .attr('cx', (enemy) => axes.x(enemy.x))
//       .attr('cy', (enemy) => axes.y(enemy.y));

//   enemies.exit()
//     .remove();
// };

// var enemyPositions;
// enemyPositions = createEnemies();
// renderEnemies(enemyPositions);