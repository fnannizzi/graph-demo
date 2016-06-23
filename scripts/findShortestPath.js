function findShortestPathAndAnimate(graph, renderer, numNodes) {
  dijkstra(graph, graph.nodes.A);


  graph.edges.forEach(function(e) {
    if(e.target.predecessor === e.source || e.source.predecessor === e.target)
    {
      e.style.stroke = '#bfa';
      e.style.fill   = '#56f';
    } else {
      e.style.stroke = '#aaa';
    }
  });

  renderer.draw();

}

function colorGraph(graph, renderer, numNodes) {
  // if the graph is bipartite, we can color it with only two colors
  var numColors = 2;
  var colors = ["#"];

  var raphaelObject = renderer.r;

  for (nodeIndex = 0; nodeIndex < numNodes; nodeIndex++) {
    var currNode = graph.nodes[convertIndexToLetter(nodeIndex)];
    //currNode.shape[0].animate({fill:'green'},200);
  }
}