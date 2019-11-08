const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id:1,
        name: '算法导论',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id:2,
        name: 'UNIX编程艺术',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id:3,
        name: '编程珠玑',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id:4,
        name: 'Go语言程序设计预言',
        date: '2017-9',
        price: 79.00,
        count: 1
      }
    ]
  },
  methods: {
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index,1);
    }
  },
  computed: {
    totalPrice() {
      // let total = 0;
      // 1.普通for循环
      // for (let i=0;i<this.books.length;i++) {
      //   total += this.books[i].price*this.books[i].count;
      // }

      // 2.for (let i in this.books)
      // for (let i in this.books) {
      //   total += this.books[i].price*this.books[i].count;
      // }

      // 3.for (let item of this.books)
      // for (let item of this.books) {
      //   total += item.price*item.count;
      // }
      // reduce
      return this.books.reduce(function (pre,book) {
        return pre + book.price * book.count
      },0)
      // return total
    }
  },
  // 过滤器 通常是一个函数
  filters: {
    showPrice(price) {
      return '￥'+price.toFixed(2);
    }
  }
});

