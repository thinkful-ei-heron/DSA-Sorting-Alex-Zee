class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
    this.length++;
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
      this.length++;
    }
    
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.length--;
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    this.length--;
    previousNode.next = currNode.next;
  }
  insertBefore(newItem, nextItem) {

    if (!this.head) {
      return null;
    }

    if (this.head.value === nextItem) {
      this.insertFirst(newItem);
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== nextItem)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    let newNode = new _Node(newItem, previousNode.next);
    previousNode.next = newNode;
  }
  insertAfter(newItem, prevItem) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;

    while ((currNode !== null) && (currNode.value !== prevItem)) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    if (prevItem.next === null) {
      this.insertLast(newItem);
      return;
    }
    let newNode = new _Node(newItem, currNode.next);
    currNode.next = newNode;
  }
  insertAt(newItem, pos) {
    let stepper = 0;
    let currNode = this.head;
    while (stepper !== pos) {
      stepper++;
      currNode = this.head.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    if (stepper === pos) {
      this.insertAfter(newItem, currNode.value);
      return;
    }
  }
}

function display(llist) {
  let currNode = llist.head;
  while (currNode !== null) {
    console.log('value: '+ currNode.value);
    currNode = currNode.next;
  }
}


function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  }

  const middle = Math.floor(list.length / 2);
  let currNode = list.head;
  let leftList = new LinkedList();
  for(let i = 0; i < middle; i++) {
    leftList.insertLast(currNode.value);
    currNode = currNode.next;
  }
  let rightList = new LinkedList();
  for(let i = middle; i < list.length; i++) {
    rightList.insertLast(currNode.value);
    currNode = currNode.next;
  }

  leftList = mergeSort(leftList);
  rightList = mergeSort(rightList);
  return merge(leftList, rightList);
}


function merge(leftList, rightList) {
  let leftIndex = 0;
  let rightIndex = 0;
  let resultList = new LinkedList();
  let currLeft = leftList.head;
  let currRight = rightList.head;
  while (leftIndex < leftList.length && rightIndex < rightList.length) {
    if (currLeft.value < currRight.value) {
      resultList.insertLast(currLeft.value);
      currLeft = currLeft.next;
      leftIndex++;
    }
    else {
      resultList.insertLast(currRight.value);
      currRight = currRight.next;
      rightIndex++;
    }
  }

  for (let i = leftIndex; i < leftList.length; i++) {
    resultList.insertLast(currLeft.value);
    currLeft = currLeft.next;
    leftIndex++;
  }

  for (let i = rightIndex; i < rightList.length; i++) {
    resultList.insertLast(currRight.value);
    currRight = currRight.next;
    rightIndex++;
  }
  return resultList;
}

let testList = new LinkedList();

testList.insertFirst(1);
testList.insertLast(3);
testList.insertLast(7);
testList.insertLast(6);
testList.insertLast(4);
testList.insertLast(5);
testList.insertLast(10);
testList.insertLast(9);
testList.insertLast(8);
testList.insertLast(2);

display(mergeSort(testList));