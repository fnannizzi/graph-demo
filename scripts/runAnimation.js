function runAnimation(numNodes) {

  // create the graph
  var graph = createGraph(graph, numNodes);

  // draw the graph
  var renderer = drawGraph(graph);

  // 
  findShortestPathAndAnimate(graph, renderer, numNodes);
}