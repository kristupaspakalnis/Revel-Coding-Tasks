nodes = [
  {
    'name':'node1',
    'value':1,
    'parent':1
  },
  {
    'name':'node2',
    'value':2,
    'parent':1
  },
  {
    'name':'node3',
    'value':3,
    'parent':1
  },
  {
    'name':'node4',
    'value':4,
    'parent':2
  },
  {
    'name':'node5',
    'value':5,
    'parent':2
  },
  {
    'name':'node6',
    'value':6,
    'parent':3
  },
  {
    'name':'node7',
    'value':7,
    'parent':3
  },
  {
    'name':'node8',
    'value':8,
    'parent':4
  },
  {
    'name':'node9',
    'value':9,
    'parent':4
  }
];

var t0 = performance.now();
function lca(node, node_2){
  var mp = nodes.find(obj => obj.value == obj.parent);
  var node1 = nodes.find(obj =>obj.name == node);
  var node2 = nodes.find(obj => obj.name == node_2);
    tmp = node1.value;
    tmp2 = node2.value; 
      ar = new Array();
      ar.push(tmp);
      ar2 = new Array();
      ar2.push(tmp2);
        while(tmp != mp.value){
          tmp_node = nodes.find(obj => obj.value == tmp);
          ar.push(tmp_node.parent);
          tmp = tmp_node.parent;
        }
        while(tmp2 != mp.value){
          tmp2_node = nodes.find(obj => obj.value == tmp2);
          ar2.push(tmp2_node.parent);
          tmp2 = tmp2_node.parent;
        }
       
    var com = function(){for (val in ar){
      for(val2 in ar2){
        if(ar2[val2]==ar[val]){
          ca = ar[val];
          return(ca);
        }
      }
    }
    }
    console.log(com());
}

lca('node5', 'node6');
