const getName = node => node.name

const headNode = (head, list) => list[head]

const next = (node, list) => list[node.next]

const nodeAt = (index, head, list) => {
  let node = headNode(head, list)
  if (index === 0) return node
  for (let i = 0; i < index; i++) {
    node = next(node, list)
  }
  return node
}

const addressAt = (index, head, list) => {
  if (index === 0) return head
  return nodeAt(index - 1, head, list).next
}

const indexAt = (targetNode, list, pointer) => {
  let index = 0
  let currentNode = list[pointer]
  while (true) {
    if (!currentNode.next) return null
    if (currentNode === targetNode) return index
    index += 1
    currentNode = next(currentNode, list)
  }
}

const insertNodeAt = (index, nextToNew, head, collection) => {
  let previousNode = nodeAt(index - 1, head, collection)
  let previousNodeNext = previousNode.next
  previousNode.next = nextToNew
  let newNode = nodeAt(index, head, collection)
  newNode.next = previousNodeNext
}

const deleteNodeAt = (index, head, collection) => {
  let deletedNodeNext = nodeAt(index, head, collection).next
  nodeAt(index - 1, head, collection).next = deletedNodeNext
}
