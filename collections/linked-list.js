class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
    if (!this.tail) {
      this.tail = this.head
    }
    this.length++
  }
  insertLast(data) {
    if (this.head) {
      let node = new Node(data)
      this.tail.next = node
      this.tail = node
      this.length++
    } else {
      this.insertFirst(data)
    }
  }
  getElementByIndex(index) {
    if (!this.head) return null

    if (index === 0) return this.head

    if (index < this.length && index > 0) {
      let el = this.head
      for (let i = 0; i < index; i++) {
        el = el.next
      }
      return el
    }
    return null
  }
  delete(data) {
    if (!this.head) return null

    let el = this.head
    while (el.next) {
      if (el.next.data === data) {
        el.next = el.next.next
      } else {
        el = el.next
      }
    }
    if (this.head && this.head.data === data) {
      this.head = this.head.next
    }
    if (this.tail.data === data) {
      this.tail = el
    }
  }
  find(data) {
    if (!this.head) return null

    let el = this.head
    while (el) {
      if (el.data === data) {
        return el
      }
      el = el.next
    }
    return null
  }
  getAll() {
    if (!this.head) return null

    let el = this.head
    while (el) {
      console.log(el.data)
      el = el.next
    }
  }
}

let ll = new LinkedList()
ll.insertLast(5)
ll.insertFirst('Vedat')
ll.insertLast(3)
ll.insertLast(4)
//console.log(ll.getElementByIndex(0))
//console.log(ll.find(4))
ll.delete('Vedat')
ll.getAll()

/*
  Last result: 5
               3
               4
*/

//youtube: https://www.youtube.com/watch?v=OmMRI9GeNMo
