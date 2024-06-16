/**
 *  拖拽过程中，存放信息
 */
export default class DragStore {

    moveItem = new Map();

    set(key, data) {
        this.moveItem.set(key, data);
    }

    get(key) {
        return this.moveItem.get(key);
    }

    remove(key) {
        this.moveItem.delete(key);
    }

    clear() {
        this.moveItem.clear();
    }

}