class Book{
    title: string;
    pages: number;
    author: string;
    type: string;
    stock: number;

    constructor(
        title: string, 
        pages: number, 
        author: string, 
        type: string, 
        stock: number 
    ) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.type = type;
        this.stock = stock;
    }

    borrow() {
        if (this.stock ===0) {
            throw new Error ("Book is oout of stock");
        }
        this.stock--;
        console.log (
            `You have borrowed "${this.title}", Remaining stock: ${this.stock}`,
        );
    }
}

const novelBook = new Book("Laskar Pelangi", 579, "Andrea Hirata", "novel", 4);
const comicBook = new Book("One Piece", 643, "Lutpi", "comic", 2);

novelBook.borrow[];
comicBook.borrow[];