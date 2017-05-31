// start slingin' some d3 here.
const gameOptions = {
  height: 450,
  width: 700,
  nEnemies: 5,
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

var drag = d3.behavior.drag()
                      .on('drag', function(d, i) {
                        d.x += d3.event.dx;
                        d.y += d3.event.dy;
                        d3.select(this).attr('transform', function(d, i) {
                          return 'translate(' + [ d.x, d.y ] + ')';
                        });
                      });

const initiatePlayer = function() {
  var playerPiece = {
    y: gameOptions.width / 2,
    x: gameOptions.height / 2
  };

  d3.select('.container').append('circle')
                         .attr('class', 'player')
                         .attr('r', 10)
                         .attr('fill', 'orange')
                         .data([ {'x': playerPiece.x, 'y': playerPiece.y} ])
                         .attr('transform', 'translate(' + playerPiece.x + ',' + playerPiece.y + ')')
                         .call(drag);
};

var initiateEnemies = function(allEnemies) {
  d3.select('.container').selectAll('.container').data(allEnemies).enter().append('circle')
                                                                          .attr('class', 'enemy')
                                                                          .attr('cx', (enemy) => enemy.x)
                                                                          .attr('cy', (enemy) => enemy.y)
                                                                          .attr('r', 10)
                                                                          .attr('fill', 'purple');
                                                                          
};

var moveEnemies = function(allEnemies) {
  d3.selectAll('.enemy').transition().duration(1000)
                                     .attr('cx', enemy => Math.random() * gameOptions.width)
                                     .attr('cy', enemy => Math.random() * gameOptions.height);
};


var allEnemies = createEnemies();
initiateEnemies(allEnemies);
initiatePlayer();

// d3.select('.player').call(d3.behavior.drag().on('start', started));
// d3.select('.player').behavior.drag();

// var drag = d3.behavior.drag();
// d3.select('.player').call(drag);
// d3.select('.player').on(drag, console.log('woo'));



setInterval(function() {
  moveEnemies(allEnemies);
}, 1000);













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