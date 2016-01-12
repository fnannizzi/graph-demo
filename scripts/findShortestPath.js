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
    var currNode = graph.nodes[nodeIndex];
    console.log(currNode);
    currNode.shape[0].animate({fill:'green'},200);
  }
}

/*
   Credit to the Dracula source code, from which I have heavily borrowed.  
 
   Path-finding algorithm Dijkstra
   
   - worst-case running time is O((|E| + |V|) · log |V| ) thus better than
     Bellman-Ford for sparse graphs (with less edges), but cannot handle
     negative edge weights
 */
function dijkstra(g, source) {

    /* initially, all distances are infinite and all predecessors are null */
    for(var n in g.nodes)
        g.nodes[n].distance = Infinity;
        /* predecessors are implicitly null */

    g.snapShot("Initially, all distances are infinite and all predecessors are null.");

    source.distance = 0;
    /* set of unoptimized nodes, sorted by their distance (but a Fibonacci heap
       would be better) */
    var q = new BinaryMinHeap(g.nodes, "distance");

    /* pointer to the node in focus */
    var node;

    /* get the node with the smallest distance
       as long as we have unoptimized nodes. q.min() can have O(log n). */
    while(q.min() != undefined) {
        /* remove the latest */
        node = q.extractMin();
        node.optimized = true;

        /* no nodes accessible from this one, should not happen */
        if(node.distance == Infinity)
            throw "Orphaned node!";

        /* for each neighbour of node */
        for(e in node.edges) {
      var other = (node == node.edges[e].target) ? node.edges[e].source : node.edges[e].target;
    
            if(other.optimized)
                continue;

            /* look for an alternative route */
            var alt = node.distance + node.edges[e].weight;
            
            /* update distance and route if a better one has been found */
            if (alt < other.distance) {
            
                /* update distance of neighbour */
                other.distance = alt;

                /* update priority queue */
                q.heapify();

                /* update path */
                other.predecessor = node;
                g.snapShot("Enhancing node.")
            }
        }
    }
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