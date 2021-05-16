const Iter = require('./ListIterator-3.js');

class APos {
    constructor(elem, index) {
        this._elem = elem;
        this._index = index;
    }
    element() {
        return this._elem;
    }
}
class Sequence {
    constructor(size=10) {
        this._arr = new Array(size);
        this._first = 0;
        this._last = 0;
    }
    // Rank Operations
    isEmpty() {
        return this._first == this._last;  // bug 5 missing this
    }
    size() {
        return this._index2rank(this._last);
    }
    _index2rank(i) {
        return (this._arr.length - this._first + i) % this._arr.length;
    }
    _rank2index(r) {
        return (this._first + r) % this._arr.length;
    }
    _isValidRank(r) {
        return (0 <= r) && (r < this.size());
    }
    rankOf(p) {
        let r = this._index2rank(p._index);
        return r;
    }
    atRank(r) {
        if (!this._isValidRank(r)) {
            throw new Error("Invalid Rank r=" + r)
        }
        let i = this._rank2index(r);
        return this._arr[i];
    }
    elemAtRank(r) {
        return this.atRank(r).element();
    }
    replaceAtRank(r, elem) {
        let p = this.atRank(r);
        let oldElem = p.element();
        p._elem = elem;
        return oldElem;
    }
    _causesOverflow(r, elem) {
        let sz = this.size();
        if (sz >= this._arr.length - 1) { // bug 1 (Math.ceil below)
            let newArr = new Array(Math.ceil(this._arr.length * 1.5));
            let i = 0;
            while (i < r) {
                let ix = this._rank2index(i);
                newArr[i] = this._arr[ix];
                newArr[i]._index = i;
                i++;
            }
            newArr[i] = new APos(elem, r);
            i++;
            while (i<=sz) { // bug 3 (missing =)
                let ix = this._rank2index(i-1);
                newArr[i] = this._arr[ix];
                newArr[i]._index = i;
                i++; // bug 4 (missing)
            }
            this._arr = newArr;
            this._first = 0;
            this._last = sz+1;
            return this._arr[r];
        }
        return null;
    }
    _shiftLeft(r1, r2) {
        var curr = this._rank2index(r1);
        for (let r=r1; r<r2; r++) {
            var next = this._rank2index(r+1);
            this._arr[curr] = this._arr[next];
            this._arr[curr]._index = curr;
            curr = next;
        }
    }
    _shiftRight(r1, r2) {
        var curr = this._rank2index(r2);
        for (let r=r2; r>r1; r--) {
            var prev = this._rank2index(r - 1);
            this._arr[curr] = this._arr[prev];
            this._arr[curr]._index = curr;  // bug: missing _ in _index (no error: just adds new attribute)
            curr = prev;
        }
    }
    _prevIndex(i) {
        return (this._arr.length + i - 1) % this._arr.length;
    }
    _nextIndex(i) {
        return (i + 1) % this._arr.length;
    }
    insertAtRank(r, elem) {
        let sz = this.size();
        if (r > sz) {  // don't allow empty slots
            throw new Error("Invalid rank in insertAtRank size=" + sz + "  rank=" + r);
        }
        let newPos = this._causesOverflow(r, elem);
        if (newPos == null) { // no overflow so need to insert elem
            if (r < sz/2) {
                this._first = this._prevIndex(this._first);
                this._shiftLeft(0, r);
            } else {
                this._last = this._nextIndex(this._last);
                this._shiftRight(r, sz);
            }
            let ix = this._rank2index(r); // bug 2 (after shift)
            newPos = new APos(elem, ix);
            this._arr[ix] = newPos;
        }
        return newPos;
    }
    removeAtRank(r) {
        let deletedPos = this.atRank(r);
        let sz = this.size();
        if (r<sz/2) {
            this._shiftRight(0, r);
            this._first = this._nextIndex(this._first);
        } else {
            this._shiftLeft(r, sz-1);
            this._last = this._prevIndex(this._last);
        }
        deletedPos._index = -1;
        return deletedPos.element();
    }
    // List/Position based Operations
    first() {
        return this.atRank(0);
    }
    last() {
        return this.atRank(this.size()-1);
    }
    isFirst(p) {
        return p == this.first();
    }
    isLast(p) {
        return p == this.last();
    }
    before(p) {
        if (this.isFirst(p)) {
            throw new Error("Invalid before(p) operation--Off the front");
        }
        let r = this.rankOf(p);
        return this.atRank(r-1);
    }
    after(p) {
        if (this.isLast(p)) {
            throw new Error("Invalid after(p) operation--Off the end");
        }
        let r = this.rankOf(p);
        return this.atRank(r+1);
    }
    replaceElement(p, elem) {
        let oldElem = p.element();
        p._elem = elem;
        return oldElem;
    }
    swapElements(p, q) {
        let temp = this.replaceElement(p, q.element());
        this.replaceElement(q, temp);
    }
    insertFirst(elem) {
        let newPos = this._causesOverflow(0, elem);
        if (newPos == null) {
            this._first = this._prevIndex(this._first);
            newPos = new APos(elem, this._first);
            this._arr[this._first] = newPos;
        }
        return newPos;
    }
    insertLast(elem) {
        let newPos = this.insertAtRank(this.size(), elem);
        return newPos;
    }
    insertAfter(p, elem) {
        let newPos = this.insertAtRank(this.rankOf(p)+1, elem);
        return newPos;
    }
    insertBefore(p, elem) {
        let newPos = this.insertAtRank(this.rankOf(p), elem);
        return newPos;
    }
    remove(p) {
        return this.removeAtRank(this.rankOf(p));
    }
    toString() {
        let res = "[";
        let iter = this.elements();
        while (iter.hasNext()) {
            res = res + iter.nextObject();
            if (iter.hasNext()) {
                res = res + ", ";
            }
        }
        return res + "]";
    }
    print() {
        console.log(this.toString());
        console.log("size =" + this.size() + "  N=" + this._arr.length
                + " first="+this._first + " last=" + this._last+"\n");

    }
    elements() {
        return new Iter.ListIterator(this, 1);
    }
    positions() {
        return new Iter.ListIterator(this, 2);
    }
}

exports.Sequence = Sequence;