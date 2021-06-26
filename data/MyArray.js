// generar arrays

//forma convencional
// const array = [1, 2, 1, 1, 2, 3, 2, 1];

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.removeAndRaname(index);
        return item;
    }

    removeAndRaname(index){
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

    _addAndRename(index, item){
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i-1];
        }
        this.data[index] = item;
        this.length++;
    }

    shift(){
        this.delete(0);
    }

    unshift(item){
        const index = 0;
        this._addAndRename(index, item);
        return this.data;

    }

    insert(index, item){
        this._addAndRename(index, item);
        return this.data;
    }

}

module.exports = MyArray;



