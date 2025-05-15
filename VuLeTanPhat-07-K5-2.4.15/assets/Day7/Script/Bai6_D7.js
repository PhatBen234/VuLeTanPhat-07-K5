cc.Class({
    extends: cc.Component,

    properties: {
        TimeOut: 10000,
        Tile: cc.Label,
        Body: cc.Label,

        spriteArray: {
            default: [],
            type: [cc.Sprite]
        }
    },

    fetchImageWithTimeout(url, timeout) { //fetch anh url va thoi gian het han
        return new Promise((resolve, reject) => { // 2 trang thai resolve va reject
            const controller = new AbortController(); // tao 1 controller huy fetch
            const signal = controller.signal; // dung de lien ket vs fetch

            const timeoutId = setTimeout(() => {
                controller.abort();
            }, timeout); // set time out de het time out roi goi abort

            fetch(url, { signal }) // url va doi so signal
                .then(response => { // tra ve rq
                    clearTimeout(timeoutId);// huy time out neu dc tra ve
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.blob();
                })
                .then(blob => { // lay du lieu
                    let img = new Image();
                    img.src = URL.createObjectURL(blob);
                    img.onload = () => resolve(img);
                    img.onerror = err => reject(err);
                })
                .catch(error => { // neu k du thoi gian
                    if (error.name === 'AbortError') {
                        reject(new Error('Request timed out'));
                    } else {
                        reject(error);
                    }
                });
        });
    },

    async call() { //tai nhieu anh song song
        const urls = [
            'https://picsum.photos/id/237/300/200',
            'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g',
            'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ',
            'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g'
        ];

        const promises = urls.map(url => // duyet qua URL, tao promise
            this.fetchImageWithTimeout(url, this.TimeOut)
                .then(img => ({ status: 'fulfilled', img, url }))
                .catch(error => ({ status: 'rejected', error, url }))
        );

        const results = await Promise.all(promises); // doi anh tai thanh cong or that bai

        for (let i = 0; i < results.length; i++) {
            const result = results[i];

            if (result.status === 'fulfilled') {
                this.Tile.string = "Image loaded:";
                this.Body.string = result.url;// day la anh dc tai thanh cong

                let texture = new cc.Texture2D();
                texture.initWithElement(result.img);
                texture.handleLoadedTexture(); // cap nhat UI

                let spriteFrame = new cc.SpriteFrame(texture);// tao spriteframe

                if (i < this.spriteArray.length) { // gan anh vao sprite tuong ung
                    this.spriteArray[i].spriteFrame = spriteFrame;
                } else {
                    console.warn(`No sprite available for index ${i}`);
                }

            } else { // neu loi hien thi loi trong UI + log loi~
                this.Tile.string = "Error:";
                this.Body.string = result.error.message;
                console.error("Error loading image:", result.url, result.error);
            }
        }
    },

    start() {
        this.call();
    },
});



//Câu hỏi:
// abort.controller co xai dc cho khac, VD: axios
// duoc su dung o cho nao, platform nao ho tro


//Trả lời
// Abort controller có dùng được ngoài fetch không ?
// Có, nhưng không được sử dụng với các phương thức khác như axios, request, ...
// Vì AbortController bản chất chỉ là công cụ phát tín hiệu cancel thông qua signal, chứ 
// không tự huỷ được
// Vì thế API nào được thế kế để "nghe" tín hiệu này mới phản hồi

// Fetch thì đương nhiên là xài được và dùng phổ biến nhất
// ReadableStream, WritableStream xài được trong API stream
// XMLHttpRequest xài được
// navigator.sendBeacon(trình duyệt): không xài được
// setTimeout, setInterval không xài được, thay vào đó ta phải viết wrapper
// Axios thì tuỳ phiên bản, hiện tại sử dụng CancelToken ở v0.21 trở xuống
// một số bên thư viện thứ 3 : got, ky, node-fetch có hỗ trợ rõ ràng
// Web API như AudiContext, WebRTC, thì cũng tuỳ do không đồng nhất browser

// AbortController không chỉ dùng cho fetch, nhưng phụ thuộc vào việc thư viện/API có hỗ trợ signal hay không.

// fetch là ví dụ điển hình nhất vì nó hỗ trợ AbortSignal gốc từ trình duyệt.

// Một số thư viện phổ biến (Axios, jQuery Ajax...) phải dùng cơ chế riêng.