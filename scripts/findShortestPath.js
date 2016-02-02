function findShortestPathAndAnimate(graph, renderer, numNodes) {
  renderer.draw();
  dijkstra(graph, graph.nodes.A);
  colorGraph(graph, renderer, numNodes);
//  animateGraph(graph, renderer, graph.nodes.A);

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

function animateGraph(graph, renderer, node) {
  //setTimeout(function(graph, node) {
    console.log("drawing");
    node.shape[0].animate({fill:'green'},200);
    /*
    graph.edges.forEach(function(e) {
      if(e.target.predecessor === e.source || e.source.predecessor === e.target) {
        e.style.stroke = '#bfa';
        e.style.fill   = '#56f';
      } 
      else {
        e.style.stroke = '#aaa';
      }*/
    //});
    //}(graph, node), 1000);

    renderer.draw();
    console.log("done drawing");
}


/*function render(r, n) {
  var label = r.text(0, 30, n.label).attr({opacity:0});
  //the Raphael set is obligatory, containing all you want to display 
  var set = r.set().push(
      r.rect(-30, -13, 62, 86)
        .attr({"fill": "#fa8",
              "stroke-width": 2
              , r : 9}))
  .push(label);
  // make the label show only on hover 
  set.hover(
    function mouseIn() {
      label.animate({opacity:1,"fill-opacity":1}, 500);
    },
    function mouseOut() {
       label.animate({opacity:0},300);
    }
  );
}*/